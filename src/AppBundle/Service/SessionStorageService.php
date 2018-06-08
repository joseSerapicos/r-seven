<?php
namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\EntityManager;


/**
 * Class SessionStorageService
 * Handle with objects stored in session
 * @package AppBundle\Service
 */
class SessionStorageService
{
    /**
     * @var Session (service)
     */
    protected $session;

    /**
     * @var EntityManager (database manager)
     */
    protected $entityManager;

    /**
     * @var LocalRepositoryService (database manager)
     */
    protected $localRepositoryService;


    /**
     * Constructor
     * @param Session $session
     * @param EntityManager $entityManager
     * @param LocalRepositoryService $localRepositoryService
     */
    public function __construct(
        Session $session,
        EntityManager $entityManager,
        LocalRepositoryService $localRepositoryService
    ) {
        $this->session = $session;
        $this->entityManager = $entityManager;
        $this->localRepositoryService = $localRepositoryService;
    }

    /**
     * Get object
     * NOTE: We do not use in this process the EntityManager::merge, because this method does not
     * recovery the objects in cascade, since that when the objects are saved in the storage, the foreign objects
     * it's only saved the 'id', since that the EntityManager does not retrieve the object if it is not necessary.
     * @param $id
     * @return object
     */
    public function get($id)
    {
        $storage = $this->session->get('_storage');

        if (isset($storage[$id])) {
            $object = $storage[$id]['obj'];

            // Check if object it's a genuine session storage object
            if (!$this->isSsObj($object->getId())) {
                // The object is not a genuine session storage object, should be a database object,
                // so we will to try to get the object from the database
                return $this->getFromDb($object);
            }

            $objectClass = HelperService::getClassName($object);
            $objectBundleNameArr = HelperService::getBundleNameArr($object);
            $objectBundleNamespace = $objectBundleNameArr['prefix'].$objectBundleNameArr['bundle'];

            // Get object metadata
            $objectFields = $this->localRepositoryService
                ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                ->execute('getMetadata');

            // Restore saved dependency objects (foreign fields) to be recognized by entity manager
            if (is_array($objectFields)) {
                foreach ($objectFields as $field => $fieldMetadata) {
                    if ($this->localRepositoryService
                            // Set always the entity repository, because the function getFromDb overrides it
                            ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                            ->execute('getFieldMetadata', array($field, 'type')) == 'object'
                    ) {
                        $dependency = (isset($fieldMetadata['dependency']) ? $fieldMetadata['dependency'] : null);

                        // Methods name
                        $dbField = $this->localRepositoryService
                            // Set always the entity repository, because the function getFromDb overrides it
                            ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                            ->execute('getFieldMetadata', array($field, 'field'));
                        $getMethodName = ('get' . ucfirst($dbField));

                        if (
                            // Only restore direct foreign objects, the others are restored when get the whole object
                            // from the parent (dependency) object, which in turn is a direct foreign object.
                            !$dependency
                            // Check if object already is saved, can be a dependency object not saved yet
                            // (like embed objects that are created only at same time of the main object)
                            && method_exists($object, $getMethodName)
                            && $object->$getMethodName()
                            && $object->$getMethodName()->getId()
                        ) {
                            $setMethodName = ('set' . ucfirst($dbField));

                            // Check if is not another object stored in session
                            // (dependency objects not saved in database yet)
                            if ($this->isSsObj($object->$getMethodName()->getId())) {
                                $formType = $this->localRepositoryService
                                    // Set always the entity repository, because the function getFromDb overrides it
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'type', null, 'form'));

                                // If is an embed object we need to resolve all embed fields recursively
                                if ($formType == 'embed') {
                                    $object->$setMethodName($this->get($object->$getMethodName()->getId()));
                                }
                            } else {
                                // Get object from database
                                $object->$setMethodName($this->getFromDb($object->$getMethodName()));
                            }
                        }

                        continue;






                        // Get object container from dependencies recursively
                        $dependency = (isset($fieldMetadata['dependency']) ? $fieldMetadata['dependency'] : null);
                        $objContainer = $object;
                        $dependencyArr = array();
                        while ($dependency) {
                            array_unshift(
                                $dependencyArr,
                                $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($dependency, 'field'))
                            );
                            $dependency = (empty($objectFields['entityFields'][$dependency]['dependency'])
                                ? false
                                : $objectFields['entityFields'][$dependency]['dependency']
                            );
                        }
                        // Get field value (object container) recursively
                        foreach ($dependencyArr as $dependency) {
                            $methodName = ('get' . ucfirst($dependency));
                            if (method_exists($objContainer, $methodName)) {
                                $objContainer = $objContainer->$methodName();
                            }
                        }

                        // Methods name
                        $dbField = $this->localRepositoryService
                            ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                            ->execute('getFieldMetadata', array($field, 'field'));
                        $getMethodName = ('get' . ucfirst($dbField));
                        $setMethodName = ('set' . ucfirst($dbField));
                        if (!method_exists($objContainer, $getMethodName)
                            || !method_exists($objContainer, $setMethodName)
                        ) {
                            continue;
                        }

                        // Set object dependency again
                        if ($objContainer->$getMethodName() // Check if object container (parent object of dependency) is defined,
                            && $objContainer->$getMethodName()->getId() // Check if object already is saved, can be an dependency object not saved yet (like embed objects that are created only at same time of the main object)
                            && !$this->isSsObj($objContainer->$getMethodName()->getId()) // Check if is not another object stored in session (dependency objects not saved in database yet)
                        ) {
                            // Get dependency object
                            $dependencyObj = $this->localRepositoryService->setEntityRepository(
                                $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'BundlePrefix'))
                                . $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'Bundle'))
                                . ':'
                                . $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'entity'))
                            )->execute(
                                'findOneById',
                                array($objContainer->$getMethodName()->getId())
                            );

                            // Set again dependency object (choice, now loaded and recognized by entity manager)
                            $objContainer->$setMethodName($dependencyObj);
                        }
                    }
                }
            }

            return $object;
        }

        return null;
    }

    /**
     * Get object from database
     * @param $object
     * @return mixed
     */
    protected function getFromDb($object)
    {
        $objectClass = HelperService::getClassName($object);
        $objectBundleNameArr = HelperService::getBundleNameArr($object);
        $objectBundleNamespace = $objectBundleNameArr['prefix'].$objectBundleNameArr['bundle'];

        return $this->localRepositoryService
            ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
            ->execute('findOneById', array($object->getId()));
    }

    /**
     * Is Session Storage Object
     * @param $id
     * @return boolean
     */
    public function isSsObj($id)
    {
        $storage = $this->session->get('_storage');

        if (isset($storage[$id])) {
            return $storage[$id]['isSsObj'];
        }

        return false;
    }

    /**
     * Get Session Storage Parent Object
     * @param $id
     * @return array|mixed
     */
    public function getParentObj($id)
    {
        $storage = $this->session->get('_storage');

        if (isset($storage[$id]) // Check if object is set, the object may have expired and been removed
            && $storage[$id]['parent'] // Check if the object has parent
            && isset($storage[$storage[$id]['parent']]) // Check if the parent is set
        ) {
            return $storage[$storage[$id]['parent']]['obj'];
        }

        return null;
    }

    /**
     * Get Session Storage Child Objects
     * @param $id
     * @param null $childKey
     * @return array|mixed
     */
    public function getChildObjects($id, $childKey = null)
    {
        $storage = $this->session->get('_storage');

        // Check if object is set, the object may have expired and been removed
        if (isset($storage[$id])
            && (count($storage[$id]['childrenObj']) > 0)
        ) {
            if ($childKey) {
                return (isset($storage[$id]['childrenObj'][$childKey])
                    ? $storage[$id]['childrenObj'][$childKey]
                    : array()
                );
            }

            return reset($storage[$id]['childrenObj']); // First child
        }

        return array();
    }

    /**
     * Save
     * @param $object
     * @param null $parent (used when the object is stored in the parent object in session)
     * @return bool
     */
    public function save($object, $parent = null)
    {
        // Clear session storage (for maintenance)
        // This procedure is important here to clear expired entries and to avoid generate repeat the same entry id
        $this->clear();

        // Controls if the object is new and stored only in session storage. This occurs when the object id is filled
        // by the session storage, otherwise the object already has an id (probably from the database), not being an
        // genuine session storage object
        $isSsObj = false;

        $storage = $this->session->get('_storage');

        // Set id
        if (empty($object->getId())) {
            $object->setId($this->generateId());
            // It's a new object with a session storage id, a genuine session storage object
            $isSsObj = true;
        }

        // Store in parent object
        $parentObj = (($parent && isset($storage[$parent])) ? $storage[$parent]['obj'] : null);

        if ($parentObj) {
            // Create index in parent
            $childIndex = HelperService::getClassName($object);
            if (!isset($storage[$parent]['childrenObj'][$childIndex])) {
                $storage[$parent]['childrenObj'][$childIndex] = array();
            }

            // Add or update object to parent (object can be another with the same id, like when we save a clone)
            $storage[$parent]['childrenObj'][$childIndex][$object->getId()] = $object;
        }

        // Store object (at root of storage)
        if (!isset($storage[$object->getId()])) {
            $storage[$object->getId()] = array(
                'obj' => null,
                'childrenObj' => array(),
                // Save only id, because parent object can change and the object stay out of date
                'parent' => ($parentObj ? $parentObj->getId() : null),
                'isSsObj' => $isSsObj
            );
        }
        $storage[$object->getId()]['obj'] = $object;

        // Save storage in session
        $this->session->set('_storage', $storage);

        return true;
    }

    /**
     * Clear session storage (old data stored more than '$limit' hours ago will be removed)
     * @param $limit (hhmmssuuuuuu)
     * @return $this
     */
    public function clear($limit = 10000000000) { // Default 1 hours
        $storage = $this->session->get('_storage');

        $now = $this->generateId();
        $limitTime = ($now - $limit); // hhmmssuuuuuu

        foreach ($storage as $time => $value) {
            if (($time < $limitTime) // All entries saved more than 1 hours (until 0h to $now-1h)
                || ($time > $now) // All entries saved more than 1 hours but in an hour bigger then $now
                // (saved in previous days) (until $now to 23:59)
            ) {
                $this->delete($time, $storage);
            } else {
                // The rest of entries doesn't need to be verified, because entries are ascendant ordered
                break;
            }
        }

        $this->session->set('_storage', $storage);

        return $this;
    }

    /**
     * Delete object
     * @param $id
     * @param $recursiveStorage (used in recursive calls)
     * @return $this
     */
    public function delete($id, &$recursiveStorage = null)
    {
        $storage = null;
        if ($recursiveStorage) {
            $storage = &$recursiveStorage;
        } else {
            $storage = $this->session->get('_storage');
        }

        // Check if object is set, the object may have expired and been removed
        if (isset($storage[$id])) {
            // Delete children objects
            if (count($storage[$id]['childrenObj']) > 0) {
                $this->deleteChildObjects($id, null, $storage); // Remove all children objects
            }

            // Delete in parent object
            if ($parent = $storage[$id]['parent']) {
                // Get index in parent
                $object = $storage[$id]['obj'];
                $childIndex = HelperService::getClassName($object);
                if (isset($storage[$parent]['childrenObj'][$childIndex])
                    && isset($storage[$parent]['childrenObj'][$childIndex][$id])
                ) {
                    unset($storage[$parent]['childrenObj'][$childIndex][$id]);
                }
            }

            // Delete object
            unset($storage[$id]);

            // Update storage in session
            if (!$recursiveStorage) {
                $this->session->set('_storage', $storage);
            }
        }

        return $this;
    }

    /**
     * Delete Session Storage Child Objects
     * @param $id
     * @param null $childKey
     * @param $recursiveStorage (used in recursive calls)
     * @return $this
     */
    public function deleteChildObjects($id, $childKey = null, &$recursiveStorage = null) {
        $storage = null;
        if ($recursiveStorage) {
            $storage = &$recursiveStorage;
        } else {
            $storage = $this->session->get('_storage');
        }

        // Check if object is set, the object may have expired and been removed
        if (isset($storage[$id])) {
            // Determine child keys to delete
            $childKeys = ($childKey
                ? array($childKey) // Specific child
                : array_keys($storage[$id]['childrenObj']) // All children
            );

            foreach ($childKeys as $childKey) {
                if (isset($storage[$id]['childrenObj'][$childKey])
                    && (count($storage[$id]['childrenObj'][$childKey]) > 0)
                ) {
                    foreach ($storage[$id]['childrenObj'][$childKey] as $childId => $childObj) {
                        // This "if" is a protection for circular reference,
                        // can occurs if by mistake is defined the objects as child itself
                        if ($childId != $id) {
                            // Remove object completely
                            $this->delete($childId, $storage);
                        }
                    }
                    unset($storage[$id]['childrenObj'][$childKey]);
                }
            }

            // Update storage in session
            if (!$recursiveStorage) {
                $this->session->set('_storage', $storage);
            }
        }

        return $this;
    }

    /**
     * Generate Session Storage id
     * @param int $loopControl
     * @return int
     * @throws \Exception
     */
    public function generateId($loopControl = 0) {
        $t = microtime(true);
        $micro = sprintf("%06d", ($t - floor($t)) * 1000000);
        $dateTime = new \DateTime(date('Y-m-d H:i:s.' . $micro, $t));

        // Due to the expiration time (1 hour) this identifier will never be repeated
        $id = intval($dateTime->format("Hisu"));

        // Check if id is already defined, very difficult to occur, but it has already occurred
        $storage = $this->session->get('_storage');
        if (isset($storage[$id])) {
            if ($loopControl > 9) { // Theoretically impossible
                throw new \Exception('Session storage id cannot be set!');
            }
            return $this->generateId(++$loopControl);
        }

        return $id;
    }

    /**
     * Debug session storage
     * @param $exit (if true you can see the correct format when the final response is "json")
     * @return $this
     */
    public function debug($exit = true)
    {
        $endId = uniqid('debug-var-end-anchor-');

        echo('<div style="margin: 12px;"><a href="#'.$endId.'">Go to end</a><pre>');

        $storage = $this->session->get('_storage');
        if (is_array($storage)) {
            foreach ($storage as $objKey => $obj) {
                echo('<hr>');
                echo('<div><span>' . $objKey . ': ' . get_class($obj['obj']) . '</span>');
                if (count($obj['childrenObj']) > 0) {
                    foreach ($obj['childrenObj'] as $childrenObjKey => $childrenArr) {
                        echo('<p>- Children: ' . $childrenObjKey . '</p><ul>');
                        foreach ($childrenArr as $childObjKey => $childObj) {
                            echo('<li>' . $childObjKey . ': ' . get_class($childObj) . '</li>');
                        }
                        echo('</ul>');
                    }
                }
                echo("</div>");
            }
        }

        echo('</pre><div id="'.$endId.'"></div></div>');

        if ($exit) {
            exit;
        }

        return $this;
    }


    /**
     * Force to get object
     * This method is not used anymore, but it's here in case of future necessity,
     * because this method get all foreign objects from database one by one manually
     * until reconstruct completely the original object.
     * @param $id
     * @return object
     */
    private function getForce($id)
    {
        $storage = $this->session->get('_storage');

        if (isset($storage[$id])) {
            $object = $storage[$id]['obj'];

            $objectClass = HelperService::getClassName($object);
            $objectBundleNameArr = HelperService::getBundleNameArr($object);
            $objectBundleNamespace = $objectBundleNameArr['prefix'].$objectBundleNameArr['bundle'];

            // Get object metadata
            $objectFields = $this->localRepositoryService
                ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                ->execute('getMetadata');

            // Restore saved dependency objects (foreign fields) to be recognized by entity manager
            if (is_array($objectFields)) {
                foreach ($objectFields as $field => $fieldMetadata) {
                    if ($this->localRepositoryService
                            ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                            ->execute('getFieldMetadata', array($field, 'type')) == 'object'
                    ) {
                        // Get object container from dependencies recursively
                        $dependency = (isset($fieldMetadata['dependency']) ? $fieldMetadata['dependency'] : null);
                        $objContainer = $object;
                        $dependencyArr = array();
                        while ($dependency) {
                            array_unshift(
                                $dependencyArr,
                                $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($dependency, 'field'))
                            );
                            $dependency = (empty($objectFields['entityFields'][$dependency]['dependency'])
                                ? false
                                : $objectFields['entityFields'][$dependency]['dependency']
                            );
                        }
                        // Get field value (object container) recursively
                        foreach ($dependencyArr as $dependency) {
                            $methodName = ('get' . ucfirst($dependency));
                            if (method_exists($objContainer, $methodName)) {
                                $objContainer = $objContainer->$methodName();
                            }
                        }

                        // Methods name
                        $dbField = $this->localRepositoryService
                            ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                            ->execute('getFieldMetadata', array($field, 'field'));
                        $getMethodName = ('get' . ucfirst($dbField));
                        $setMethodName = ('set' . ucfirst($dbField));
                        if (!method_exists($objContainer, $getMethodName)
                            || !method_exists($objContainer, $setMethodName)
                        ) {
                            continue;
                        }

                        // Set object dependency again
                        if ($objContainer->$getMethodName() // Check if object container (parent object of dependency) is defined,
                            && $objContainer->$getMethodName()->getId() // Check if object already is saved, can be an dependency object not saved yet (like embed objects that are created only at same time of the main object)
                            && !$this->isSsObj($objContainer->$getMethodName()->getId()) // Check if is not another object stored in session (dependency objects not saved in database yet)
                        ) {
                            // Get dependency object
                            $dependencyObj = $this->localRepositoryService->setEntityRepository(
                                $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'BundlePrefix'))
                                . $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'Bundle'))
                                . ':'
                                . $this->localRepositoryService
                                    ->setEntityRepository($objectBundleNamespace.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'entity'))
                            )->execute(
                                'findOneById',
                                array($objContainer->$getMethodName()->getId())
                            );

                            // Set again dependency object (choice, now loaded and recognized by entity manager)
                            $objContainer->$setMethodName($dependencyObj);
                        }
                    }
                }
            }

            return $object;
        }

        return null;
    }
}
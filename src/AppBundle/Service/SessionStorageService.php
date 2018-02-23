<?php
namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Session\Session;


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
     * @var LocalRepositoryService (database manager)
     */
    protected $localRepositoryService;


    /**
     * Constructor
     * @param Session $session
     * @param LocalRepositoryService $localRepositoryService
     */
    public function __construct(
        Session $session,
        LocalRepositoryService $localRepositoryService
    ) {
        $this->session = $session;
        $this->localRepositoryService = $localRepositoryService;
    }

    /**
     * Get object
     * @param $id
     * @return object
     */
    public function get($id)
    {
        $storage = $this->session->get('_storage');

        if (isset($storage[$id])) {
            $object = $storage[$id]['obj'];
            $objectClass = HelperService::getClassName($object);
            $objectBundle = HelperService::getBundleName($object);

            // Get object metadata
            $objectFields = $this->localRepositoryService
                ->setEntityRepository($objectBundle.':'.$objectClass)
                ->execute('getMetadata');

            // Restore saved dependency objects (foreign fields) to be recognized by entity manager
            if (is_array($objectFields)) {
                foreach ($objectFields as $field => $fieldMetadata) {
                    if ($this->localRepositoryService
                            ->setEntityRepository($objectBundle.':'.$objectClass)
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
                                    ->setEntityRepository($objectBundle.':'.$objectClass)
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
                            ->setEntityRepository($objectBundle.':'.$objectClass)
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
                            && !isset($storage[$objContainer->$getMethodName()->getId()]) // Check if is not another object stored in session (dependency objects not saved in database yet)
                        ) {
                            // Get dependency object
                            $dependencyObj = $this->localRepositoryService->setEntityRepository(
                                $this->localRepositoryService
                                    ->setEntityRepository($objectBundle.':'.$objectClass)
                                    ->execute('getFieldMetadata', array($field, 'Bundle'))
                                . ':'
                                . $this->localRepositoryService
                                    ->setEntityRepository($objectBundle.':'.$objectClass)
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

        $storage = $this->session->get('_storage');

        // Set id
        if (empty($object->getId())) {
            $object->setId($this->generateId());
        }

        // Store in parent object
        if ($parent && isset($storage[$parent])) {
            // Create index in parent
            $childIndex = HelperService::getClassName($object);
            if (!isset($storage[$parent]['childrenObj'][$childIndex])) {
                $storage[$parent]['childrenObj'][$childIndex] = array();
            }

            // Add object to parent
            $storage[$parent]['childrenObj'][$childIndex][$object->getId()] = $object;
        }

        // Store object (at root of storage)
        if (!isset($storage[$object->getId()])) {
            $storage[$object->getId()] = array(
                'obj' => null,
                'childrenObj' => array()
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
                $this->delete($time, null, $storage);
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
     * @param null $parent (used when the object is stored in the parent object in session)
     * @param $recursiveStorage (used in recursive calls)
     * @return $this
     */
    public function delete($id, $parent = null, &$recursiveStorage = null)
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
            if ($parent && isset($storage[$parent])) {
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
                        // Remove object completely
                        $this->delete($childId, null, $storage);
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
     * @return int
     */
    public function generateId() {
        $t = microtime(true);
        $micro = sprintf("%06d", ($t - floor($t)) * 1000000);
        $dateTime = new \DateTime(date('Y-m-d H:i:s.' . $micro, $t));

        // Due to the expiration time (1 hours) this identifier will never be repeated
        return intval($dateTime->format("Hisu"));
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
}
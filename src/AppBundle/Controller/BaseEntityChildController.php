<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

/**
 * Class BaseEntityChildController
 * Child entity dependent of parent fields
 * @package AppBundle\Controller
 */
abstract class BaseEntityChildController extends BaseEntityController
{
    // Array of parents
    protected $parentConf = array();

    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Detail'; }

    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @param $parents (Mandatory parameter, but set as null by default to be compatible with the parent init function.
     * Array of parent ids, each id is an entry in array. The order of the entries in array is the
     * same that is used when the parent routes are defined (in the child class, init method). If no array is provided,
     * the value of the parameter is used as id (it works for one parent only)
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        if (!$parents || !is_array($parents) || (count($parents) < 1) || (count($this->parentConf) < 1)) {
            throw new \Exception('Configuration cannot be set, missing arguments (parent)!');
        }

        /* Menu label (title) and ACL (selectedMenu) */
        $label = $this->getLabel();
        if ($label) { $this->templateConf['label'] = $label; }

        if (empty($this->templateConf['selectedMenu']['route'])) {
            $this->templateConf['selectedMenu']['route'] = reset($this->parentConf)['route'];
        }
        /* /Menu label (title) and ACL (selectedMenu) */

        // Parent configuration and object
        $this->setParentConf($parents);

        // Route
        if(!empty($this->templateConf['route'])) {
            $parentsParameters = array();
            foreach ($this->parentConf as $parentKey => $parentConf) {
                $parentsParameters[$parentKey] = ($parentConf['obj'] ? $parentConf['obj']->getId() : 0);
            }
            // Set route url
            foreach ($this->templateConf['route'] as $key => $value) {
                if (empty($this->templateConf['route'][$key]['url'])) {
                    $this->templateConf['route'][$key]['url'] = $this->generateUrl(
                        $value['name'],
                        $parentsParameters
                    );
                }
            }
        }

        parent::init($request);

        /* Response */
        // In case of child entities, if parent storage is defined as "session",
        // so children should not be marked as "storage" to be handled by template as regular database objects,
        // then it will be shown as regular children on the parent form (DataBox, etc)
        if ($this->flags['parentStorage'] == 'session') {
            $this->responseConf['addObjectSessionStorageFlag'] = false;
        }
        /* /Response */

        // Search. Local conf search, force the parents criteria at this level,
        // "$templateConf" is not secure enough and this criteria don't should be send to template/view
        foreach ($this->parentConf as $parentKey => $parentConf) {
            $this->localConf['search']['criteria'][] = array(
                'field' => $parentConf['fieldObj'],
                'expr' => 'eq',
                'value' => $parentConf['obj']
            );
        }

        return $this;
    }
    /** Allow bypass over child init classes override,
     * so we can access the base init function without call intermediate override methods
     * @param Request $request
     * @param $parents
     * @return BaseEntityController
     */
    protected function baseEntityChildInit(Request $request, $parents = null) {
        return self::init($request, $parents);
    }

    /**
     * Set flags.
     * Set default values for flags. Flags are defined before init the component, so never override its values.
     * @return $this
     */
    protected function setFlags()
    {
        parent::setFlags();

        if (!isset($this->flags['parentStorage'])) {
            $this->flags['parentStorage'] = 'db'; // Default parent storage
        }

        return $this;
    }

    /**
     * Set parent configuration.
     * It needs to have been set before (by the child class) the parameter $this->parentConf['myParentField']['route'].
     * It is used to guess properties.
     * Use the pattern format ('_' + bundle + '__' + controller + '__' + action).
     * @param $parents
     * @return $this
     * @throws \Exception
     */
    protected function setParentConf($parents)
    {
        // Normalize array of parent ids
        $parents = $this->normalizeParentIds($parents);

        foreach ($this->parentConf as $parentKey => $parentConf) {
            $routeSegments = explode('__', substr($parentConf['route'], 1));

            if (count($routeSegments) < 2) {
                throw new \Exception('Configuration cannot be set, missing arguments (parent route)!');
            }

            $routeSegmentsIndex = 0;

            $parentConf['BundlePrefix'] = '';
            $parentConf['bundlePrefix'] = '';
            if (in_array($routeSegments[0], array('bck', 'frt'))) {
                $parentConf['BundlePrefix'] = HelperService::snakeCaseToCamelCase($routeSegments[$routeSegmentsIndex]);
                $parentConf['bundlePrefix'] = $routeSegments[$routeSegmentsIndex];
                $routeSegmentsIndex++;
            }
            $parentConf['bundle'] = $routeSegments[$routeSegmentsIndex]; // snake_case
            $parentConf['Bundle'] = (HelperService::snakeCaseToCamelCase($routeSegments[$routeSegmentsIndex]) . 'Bundle'); // CamelCase
            // (CamelCase)
            $parentConf['BundleNamespace'] = ($parentConf['BundlePrefix'].$parentConf['Bundle']);
            // (CamelCase separated with '\')
            $parentConf['BundlePath'] = (
                (empty($parentConf['BundlePrefix']) ? '' : ($parentConf['BundlePrefix'] . '\\'))
                . $parentConf['Bundle']
            );
            $routeSegmentsIndex++;
            $parentConf['controller'] = HelperService::snakeCaseToCamelCase($routeSegments[$routeSegmentsIndex]); // CamelCase
            $parentConf['entity'] = $parentConf['controller']; // CamelCase
            $parentConf['entityClass'] = ($parentConf['BundlePath'].'\Entity\\'.$parentConf['entity']);
            $parentConf['entityTable'] = ((($parentConf['bundle'] == 'sysadmin')
                    ? 'app_' : '') . lcfirst($parentConf['entity'])); // lowerCamelCase
            $parentConf['entityDataBase'] = (($parentConf['bundle'] == 'sysadmin')
                ? 'app_database' : 'local_database');
            $parentConf['fieldObj'] = (
                (($parentConf['bundle'] == 'sysadmin')
                    ? ('app' . $parentConf['entity'])
                    : $parentConf['entityTable'])
                . 'Obj'
            ); // lowerCamelCase

            $this->parentConf[$parentKey] = $parentConf;
            $this->parentConf[$parentKey]['obj'] = $this->getParentObj($parents[$parentKey], $parentKey); // Object
        }

        return $this;
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action index.
     * @param Request $request
     * @param $parents
     * @return mixed
     */
    public function indexChildAction(Request $request, $parents)
    {
        // Set configuration
        $this->init($request, $parents);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['type'] = "ARRAY";
        return $this->render($this->localConf['templatesPath'].'index.html.twig', $this->getResponse());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Profile action (handles only with registers of the logged user)
     * @param Request $request
     * @param $identifier (user field which makes the association between the user table (parent) and the child table
     * like 'id', 'entity_id', etc.)
     * @return mixed
     */
    public function profileChildAction(Request $request, $identifier = 'id')
    {
        // Define selected menu route once the route is not the pattern for modules/menus (index)
        $this->templateConf['selectedMenu']['route'] = $request->get('_route');

        // Set configuration
        $session = $this->get('session');
        $loggedUser_id = $session->get('_app.user')[$identifier];
        $this->init($request, array($loggedUser_id));

        // Update breadcrumb
        $this->updateBreadcrumb($request);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['type'] = "ARRAY";
        return $this->render($this->localConf['templatesPath'].'profile.html.twig', $this->getResponse());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return mixed
     */
    public function newChildAction(Request $request, $parents)
    {
        // Set configuration
        $this->init($request, $parents);
        return parent::newAction($request);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get a list/array of compact objects from the search configuration or a regular object if the "id" is provided
     * @param Request $request
     * @param $parents
     * @param $id
     * @return mixed
     */
    public function getChildAction(Request $request, $parents, $id)
    {
        // Set configuration
        $this->init($request, $parents);
        return parent::getAction($request, $id);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @param $parents
     * @return mixed
     */
    public function choicesChildAction(Request $request, $parents)
    {
        // Set configuration
        $this->init($request, $parents);
        return parent::choicesAction($request);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to edit/add objects
     * @param Request $request
     * @param $parents
     * @param $id
     * @return mixed
     */
    public function editChildAction(Request $request, $parents, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);
        return parent::editAction($request, $id);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $id
     * @return mixed
     */
    public function cancelChildAction(Request $request, $parents, $id)
    {
        // Set configuration
        $this->init($request, $parents);

        return parent::cancelAction($request, $id);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $parents
     * @param $id
     * @return mixed
     */
    public function deleteChildAction(Request $request, $parents, $id)
    {
        // Set configuration
        $this->init($request, $parents);

        return parent::deleteAction($request, $id);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Detail action
     * @param Request $request
     * @param $parents
     * @param $id
     * @return mixed
     */
    public function detailChildAction(Request $request, $parents, $id)
    {
        // Set configuration
        $this->init($request, $parents);

        return parent::detailAction($request, $id);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to order object by your "priority" field
     * @param Request $request
     * @param $parents
     * @param $id
     * @param $type
     * @return mixed
     */
    public function orderChildAction(Request $request, $parents, $id, $type)
    {
        // Set configuration
        $this->init($request, $parents);
        return parent::orderAction($request, $id, $type);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get all data
     * @param Request $request
     * @param $parents
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     * @throws \Exception
     */
    public function dataChildAction(Request $request, $parents, $responseType = 'http')
    {
        // Set configuration
        $this->init($request, $parents);
        return parent::dataAction($request, $responseType);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get configuration
     * @param Request $request
     * @param $parents
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     * @throws \Exception
     */
    public function confChildAction(Request $request, $parents, $id = null)
    {
        // Set configuration
        $this->init($request, $parents);
        return parent::confAction($request, $id);
    }

    /**
     * Get parent configuration
     * @param null $parentKey
     * @return mixed
     */
    protected function getParentConf($parentKey = null)
    {
        return ($parentKey ? $this->parentConf[$parentKey] : reset($this->parentConf));
    }

    /**
     * Get parent object
     * @param $parentId
     * @param null $parentKey
     * @return null
     * @throws \Exception
     */
    protected function getParentObj($parentId, $parentKey = null)
    {
        // Use "0" when you need to define routes before create a parent object, like wizard with dependent entities

        $obj = null;
        $parentConf = $this->getParentConf($parentKey);

        if (!empty($parentId)) {
            // Try always to get from database (default) first, even if $flags['storage'] = 'session',
            // because the child object can be work with session storage, but the parent is in database
            $obj = $this->getParentRepositoryService($parentKey)
                ->execute('findOneById', array($parentId));

            // Try to get from session storage (alternative)
            if(empty($obj)) {
                // If parent is not in database, so all objects have to be in session
                $this->flags['parentStorage'] = 'session';
                $this->flags['storage'] = 'session';
                $this->flags['parent'] = $parentId;
                $obj = $this->getObjectFromSS($parentId);
            }
        }

        if (($parentId != 0) && !($obj instanceof $parentConf['entityClass'])) {
            throw new \Exception('Configuration cannot be set, missing arguments (parent)!');
        }

        return $obj;
    }

    /**
     * Overrides parent method
     * @return null
     */
    protected function getObjectsBySearch() {
        // Try get from session storage
        if ($this->flags['storage'] == 'session') {
            // Get parent id
            $parentConf = $this->getParentConf();
            $parentId = (!empty($parentConf['obj']) ? $parentConf['obj']->getId() : null);

            if ($parentId) {
                return $this->getChildObjectsFromSS($parentId, $this->localConf['entity'], true);
            }
        }

        // Try get from database
        return parent::getObjectsBySearch();
    }

    /**
     * Get parent repository service
     * @param null $parentKey
     * @return mixed
     */
    protected function getParentRepositoryService($parentKey = null)
    {
        $parentConf = $this->getParentConf($parentKey);
        return $this->getRepositoryService($parentConf['entity'], $parentConf['Bundle'], $parentConf['BundlePrefix']);
    }

    /**
     * Get parent Entity Manager
     * @param null $parentKey
     * @return mixed
     */
    protected function getParentEntityManager($parentKey = null)
    {
        $parentConf = $this->getParentConf($parentKey);
        return $this->getDoctrine()
            ->getManager($parentConf['entityDataBase']);
    }

    /**
     * Get object
     * @param $id
     * @return object
     */
    protected function getObject($id = null)
    {
        $object = parent::getObject($id);
        return $object;
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();
        return $this->setObjectParents($obj);
    }

    /**
     * Set parents objects
     * @param $object
     * @return mixed
     */
    protected function setObjectParents($object) {
        foreach ($this->parentConf as $parentKey => $parentConf) {
            if ($parentConf['obj']) {
                // Parent can be a direct field or a foreign field (in case of merge tables)
                $metadata = $this->localConf['entityFields'][$parentConf['fieldObj']];
                $dependency = (isset($metadata['dependency']) ? $metadata['dependency'] : null);
                $objContainer = ($dependency
                    ? $this->getDependencyObjectContainer($object, $dependency)
                    : $object
                );

                $method = ('set' . ucfirst($parentConf['fieldObj']));
                $objContainer->$method($parentConf['obj']);
            }
        }

        return $object;
    }

    /**
     * Normalize array with parent ids
     * @param $ids
     * @return array
     */
    protected function normalizeParentIds($ids)
    {
        if (!is_array($ids)) {
            $ids = array($ids);
        }
        return array_combine(array_keys($this->parentConf), $ids);
    }
}
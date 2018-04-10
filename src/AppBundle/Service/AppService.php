<?php
namespace AppBundle\Service;

use Symfony\Component\DependencyInjection\ContainerInterface as Container;
use AppBundle\Service\HelperService;

class AppService
{
    /**
     * @var Container
     */
    protected $container;


    /**
     * Construct
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->container = $container;
    }

    /**
     * Add flash message
     * @param $body
     * @param string $head
     * @param string $type
     * @return $this
     */
    public function addFlashMessage($body, $head = '', $type = 'info')
    {
        $this->container->get('session')->getFlashBag()->add(
            'messages',
            array(
                'type' => $type,
                'head' => $head,
                'body' => $body
            )
        );
        return $this;
    }

    /**
     * Initializes app
     * @param number $store
     * @return $this
     */
    public function init($store = null)
    {
        $session = $this->container->get('session');

        // Clear all flash messages
        $session->getFlashBag()->clear();

        // Remove temporary session information
        $session->remove('_tmp.user_request'); // Remove temporary variable to avoid redirect loop
        $session->remove('_tmp.user_system');

        // System (_app.system) was loaded in user_provider

        // Breadcrumb
        $session->set('_app.breadcrumb', array());

        // User
        $session->set('_app.user', $this->getUser());

        // App modules
        $session->set('_app.modules', $this->getAppModules());

        // Store
        $stores = $this->getStores();
        $defaultStore = ((is_array($stores) && $store && isset($stores[$store]))
            ? $store
            : (is_array($stores)
                ? reset($stores)['id']
                : null
            )
        );
        $session->set('_app.stores', $stores); // All sores of user
        $session->set('_app.store', $defaultStore); // First store (@TODO get default store from user settings)
        $session->set('_app.view.stores', $stores); // All stores for view context (without modules)

        if ($defaultStore) {
            $this->setStoreModules();
            $this->setStoreAcl();
        }

        // Temporary storage (array with time as key, to clear storage correctly)
        $session->set('_storage', array());

        return $this;
    }

    /**
     * Set store on app
     * @param number $store
     * @return $this
     */
    public function setStore($store = null)
    {
        $session = $this->container->get('session');

        // Store
        $stores = $session->get('_app.stores'); // All sores of user
        if (is_array($stores) && is_array($stores[$store])) {
            $session->set('_app.store', $store); // Set new store

            // Set flash message
            $this->addFlashMessage(
                ('Store has been changed to:'
                    .'<br/>'.$session->get('_app.stores')[$store]['name']
                ),
                'Success',
                'success'
            );

            $this->setStoreModules();
            $this->setStoreAcl();
        }

        return $this;
    }

    /**
     * Set store modules (get and store on session to get only once)
     * @return $this
     */
    private function setStoreModules() {
        $session = $this->container->get('session');
        $store = $session->get('_app.store');

        if ($store && !isset($session->get('_app.stores')[$store]['modules'])) {
            // Get modules and menus of store of logged user
            $storeModules = $this->getStoreModules($store);
            $stores = $session->get('_app.stores');
            $stores[$store]['modules'] = $storeModules;
            $session->set('_app.stores', $stores);
        }

        return $this;
    }

    /**
     * Set store acl (shared access form other stores)
     * @return $this
     */
    private function setStoreAcl() {
        $session = $this->container->get('session');
        $store = $session->get('_app.store');

        if ($store && !isset($session->get('_app.stores')[$store]['acl'])) {
            // Get acl for store
            $storeAcl = $this->getStoreAcl($store);

            // Update stores in session (with acl defined)
            $stores = $session->get('_app.stores');
            $stores[$store]['acl'] = $storeAcl;
            $session->set('_app.stores', $stores);
        }

        return $this;
    }

    /**
     * Get user
     * @return array
     */
    protected function getUser() {
        $userObj = $this->container->get('security.token_storage')->getToken()->getUser();
        $entityObj = $userObj->getEntityObj();
        $userAvatar = $entityObj->getAvatar();
        $userEmail = $this->container->get('entities.service.repository')
            ->setEntityRepository('EntitiesBundle:EntityEmail')
            ->execute(
                'getDefaultEmail',
                array($entityObj)
            );
        if ($userAvatar) {
            $userAvatar = substr($userAvatar, strpos($userAvatar, '/upload/'));
        }

        return array (
            'id' => $userObj->getId(),
            'language' => $userObj->getId(),
            'username' => $userObj->getUsername(),
            'name' => $userObj->getEntityObj()->getName(),
            'email' => $userEmail,
            'avatar' => $userAvatar,
            'role' => $userObj->getRole(),
            'entity_id' => $userObj->getEntityObj()->getId()
        );
    }

    /**
     * Get stores
     * @return array
     */
    protected function getStores() {
        $isAdmin = $this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN');

        // Get logged user id
        $session = $this->container->get('session');
        $loggedUserId = $session->get('_app.user')['id'];

        $options = array(
            'fields' => array(
                'id',
                'name',
                'color'
            ),
            'criteria' => array (
                array(
                    'field' => 'isEnabled',
                    'expr' => 'eq',
                    'value' => 1
                )
            ),
            'orderBy' => array(
                array('field' => 'name', 'value' => 'ASC')
            )
        );

        $stores = $this->container->get('admin.service.repository')
            ->setEntityRepository('AdminBundle:Store')
            ->execute(
                'getAllJoinWithUserGroupAclUser',
                array(
                    $options,
                    $isAdmin,
                    $loggedUserId
                )
            );

        // Set id as index for easy search
        if (is_array($stores) && (count($stores)> 0)) {
            $stores = array_combine(array_column($stores, 'id'), $stores);
        } else {
            $stores = null;
        }

        return $stores;
    }

    /**
     * Get app modules and menus
     * @return array
     */
    protected function getAppModules() {
        // Modules to retrieve from app database
        $appModulesName = array('Home', 'Personal Area');
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SYSADMIN')) {
            $appModulesName[] = 'Sysadmin';
        }

        $options = array(
            'fields' => array('id', 'name', 'appModuleObj',
                'app_module.id AS module_id', 'IDENTITY(app_module.appModuleObj) AS parentModule_id', 'app_module.name AS module_name',
                'app_icon.icon AS module_icon', '8 AS acl', 'route'
            ),
            'criteria' => array(
                array('field' => 'app_module.isEnabled', 'expr' => 'eq', 'value' => 1),
                array('field' => 'app_moduleMenu.isEnabled', 'expr' => 'eq', 'value' => 1),
                array('field' => 'app_module.name', 'expr' => 'in', 'value' => $appModulesName)
            ),
            'orderBy' => array(
                array('field' => 'app_module.priority', 'value' => 'ASC'),
                array('field' => 'app_moduleMenu.priority', 'value' => 'ASC')
            )
        );

        $moduleMenuArr = $this->container->get('sysadmin.service.repository')
            ->setEntityRepository('SysadminBundle:ModuleMenu')
            ->execute(
                'getAllJoinWithIcon',
                array(
                    $options,
                )
            );

        return $this->normalizeModulesTreeView($moduleMenuArr);
    }

    /**
     * Get store modules and menus of logged user
     * @param null $store
     * @return array
     */
    protected function getStoreModules($store =  null)
    {
        // Get logged user store
        $session = $this->container->get('session');
        $loggedUserStore = ($store ? $store : $session->get('_app.store'));
        $baseModuleMenuArr = $session->get('_app.modules');

        // No store, no menus!
        if (empty($loggedUserStore)) {
            return array();
        }

        $isAdmin = $this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN');

        // Get logged user id
        $loggedUserId = $session->get('_app.user')['id'];

        $options = array(
            // "app_module.id" and "app_moduleMenu.id" are used to avoid id override between local and system db
            'fields' => array('app_moduleMenu.id', 'name', 'moduleObj',
                'app_module.id AS module_id', 'IDENTITY(app_module.appModuleObj) AS parentModule_id', 'module.name AS module_name',
                'app_icon.icon AS module_icon', 'userGroupAclMenu.acl AS acl', 'app_moduleMenu.route AS route'
            ),
            'criteria' => array(
                array('field' => 'module.isEnabled', 'expr' => 'eq', 'value' => 1),
                array('field' => 'moduleMenu.isEnabled', 'expr' => 'eq', 'value' => 1)
            ),
            'orderBy' => array(
                array('field' => 'module.priority', 'value' => 'ASC'),
                array('field' => 'moduleMenu.priority', 'value' => 'ASC')
            )
        );

        $moduleMenuArr = $this->container->get('admin.service.repository')
            ->setEntityRepository('AdminBundle:ModuleMenu')
            ->execute(
                'getAllJoinWithUserGroupAclUser',
                array(
                    $options,
                    $isAdmin,
                    $loggedUserId,
                    $loggedUserStore
                )
            );

        return $this->normalizeModulesTreeView($moduleMenuArr, $baseModuleMenuArr);
    }

    /**
     * Get store acl (shared access from others stores)
     * @param null $store
     * @return array
     */
    protected function getStoreAcl($store =  null)
    {
        // Get logged user store
        $session = $this->container->get('session');
        $loggedUserStore = ($store ? $store : $session->get('_app.store'));

        // No store, no acl!
        if (empty($loggedUserStore)) {
            return array();
        }

        $acl = $this->container->get('admin.service.repository')
            ->setEntityRepository('AdminBundle:Store')
            ->execute(
                'getStoreAcl',
                array(
                    $loggedUserStore
                )
            );

        return $acl;
    }

    /**
     * Create a tree view of modules and menus
     * @param $moduleMenuArr
     * @param $baseModuleMenuArr (base module menu array to append entries of $moduleMenuArr,
     *     usually used to create store modules using as base app modules)
     * @return array
     */
    protected function normalizeModulesTreeView($moduleMenuArr, $baseModuleMenuArr = array())
    {
        $modules = $baseModuleMenuArr;
        if (is_array($moduleMenuArr) && (count($moduleMenuArr) > 0)) {
            foreach ($moduleMenuArr as $moduleMenu) {
                // Add entry in modules
                $module_id = $moduleMenu['module_id'];
                $parentModule_id = (empty($moduleMenu['parentModule_id']) ? 0 : $moduleMenu['parentModule_id']);

                // Parent module index
                if (!isset($modules[$parentModule_id])) {
                    $modules[$parentModule_id] = array();
                }

                // Module index
                if (!isset($modules[$parentModule_id][$module_id])) {
                    $modules[$parentModule_id][$module_id] = array(
                        'id' => $module_id,
                        'parent' => $parentModule_id,
                        'name' => $moduleMenu['module_name'],
                        'icon' => $moduleMenu['module_icon'],
                        'menus' => array()
                    );
                }

                // Add entry in menus of module
                $modules[$parentModule_id][$module_id]['menus'][] = array(
                    'id' => $moduleMenu['id'],
                    'name' => $moduleMenu['name'],
                    'acl' => $moduleMenu['acl'],
                    'route' => $moduleMenu['route'],
                    'url' => $this->container->get('router')->generate($moduleMenu['route'])
                );
            }
        }

        return $modules;
    }
}
<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use AppBundle\Service\HelperService;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

abstract class BaseController extends Controller
{
    // Very important flags that changes the way how controller is initialized.
    // It should be defined before call the init() method.
    protected $flags = array(
        'storage' => 'db', // Default storage
        'parent' => null // Parent id used in some features like SessionStorage
    );

    // Local configuration
    protected $localConf = array();

    // Template/view configuration to send from controller to template app (angular)
    protected $templateConf = array(
        // Initialized here to avoid "undefined index",
        // in some cases the definition of this indices in the code login can be not reached.
        'selectedMenu' => array(
            'route' => null,
            'module' => null,
            'menu' => null,
            'acl' => null
        ),
        'label' => null,
        // Local specific custom data of controller to sent to template app (angular)
        'localData' => array('template' => array(), 'data' => array())
    );

    // Response configuration to send after process request from controller to template/view (twig)
    protected $responseConf = array(
        'status' => 1, // [1: success, 0: error]
        'errors' => array(),
        'flashMessages' => array(), // (error, warning, info and success messages)
        'hasConf' => false,
        'addObjectSessionStorageFlag' => true, // Mark session storage object with a flag to be identified by template
        // Local specific custom data of controller to sent to template/view (twig)
        'localData' => array('template' => array(), 'data' => array()),
    );

    // Controls if controller has been initialized
    protected $isInitialized = false;


    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }
        $this->isInitialized = true;

        // Set global vars in HelperService (to be accessed from entity, repository, formType, etc.)
        HelperService::setGlobalVar('filesRepository', $this->get('session')->get('_app.system')['filesRepository']);
        HelperService::setGlobalVar('isAdmin', $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN'));
        HelperService::setGlobalVar('loggedUserId', $this->get('session')->get('_app.user')['id']);
        // This parameter is used to generate the token. We need to use the same parameter value in forms,
        // controllers and views, in order to generate always the same token regardless of the context
        // (because static views).
        // So we use the value defined in "./app/config/parameters.yml" "parameters:secret" for all contexts,
        // to make it more generic and configurable.
        // In twig this parameter is accessible trough the configured global parameter "csrf_token_id" (in config.yml).
        $csrfTokenId = $this->container->getParameter('secret');
        HelperService::setGlobalVar('csrfTokenId', $csrfTokenId);

        // Get request route
        $requestRoute = $request->attributes->get('_route');

        /* Controller */
        if($requestRoute) {
            $routeSegments = explode('__', substr($requestRoute, 1));
            if (count($routeSegments) > 1) {
                $this->localConf['bundle'] = $routeSegments[0]; // snake_case
                $this->localConf['Bundle'] = (HelperService::snakeCaseToCamelCase($routeSegments[0]) . 'Bundle'); // CamelCase
                $this->localConf['controller'] = HelperService::snakeCaseToCamelCase($routeSegments[1]); // CamelCase
            }
        } else {
            // Used in the case of fragments (no route available)
            $routeSegments = explode(':', $request->attributes->get('_controller'));
            if (count($routeSegments) > 1) {
                // bundle: Removes the "Bundle" prefix and converts to snake_case
                $this->localConf['bundle'] = HelperService::camelCaseToSnakeCase(substr($routeSegments[0], 0, -6));
                $this->localConf['Bundle'] = $routeSegments[0]; // CamelCase
                $this->localConf['controller'] = $routeSegments[1]; // CamelCase
            }
        }
        if (count($routeSegments) < 2) {
            throw new \Exception('Configuration cannot be set, missing arguments (route)!');
        }
        /* /Controller */

        /* Debug mode */
        $this->templateConf['isDebug'] = $this->get('kernel')->isDebug();
        /* Debug mode */

        /* Selected Menu and ACL */
        if (empty($this->templateConf['selectedMenu']['route'])) {
            // Build the route following the pattern ('_' . bundle . '__' . controller . '__' . action)
            // "index" action to select the correct menu in template/view
            $this->templateConf['selectedMenu']['route'] = (
                '_'
                . $this->localConf['bundle'] . '__'
                . HelperService::camelCaseToSnakeCase($this->localConf['controller'])
                . '__index'
            );
        }

        // Find the module and menu by route (by session is faster than query database)
        $session = $this->get('session');
        $store = $this->getStoreAttr('id');
        $modules = ($store ? $session->get('_app.stores')[$store]['modules'] : $session->get('_app.modules'));
        foreach ($modules as $childModules) { // First level module in tree view
            foreach ($childModules as $module) { // Second level module in tree view
                foreach ($module['menus'] as $menu) {
                    if ($menu['route'] == $this->templateConf['selectedMenu']['route']) {
                        $this->templateConf['selectedMenu']['module'] = array(
                            (empty($module['parent']) ? $module['id'] : $module['parent']), // First level of tree view module
                            $module['id'] // Second level of tree view module
                        );
                        $this->templateConf['selectedMenu']['menu'] = $menu['id'];
                        $this->templateConf['selectedMenu']['acl'] = $menu['acl'];
                        if (empty($this->templateConf['label'])) {
                            $this->templateConf['label'] = $menu['name'];
                        }
                        break 2;
                    }
                }
            }
        }
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        if ($isAdmin) { $this->templateConf['selectedMenu']['acl'] = 8; } // No restrictions
        /* Selected Menu and ACL */

        /* Access control list */
        if (empty($this->templateConf['selectedMenu']['acl'])) { // Logged user cannot be here
            throw $this->createNotFoundException('Requested page not found!');
        }
        $this->templateConf['acl'] = array(
            'read' => ($this->templateConf['selectedMenu']['acl'] > 0), // 1
            'edit' => ($this->templateConf['selectedMenu']['acl'] > 1), // 2
            'add' => ($this->templateConf['selectedMenu']['acl'] > 3), // 4
            'delete' => ($this->templateConf['selectedMenu']['acl'] > 7) // 8
        );
        /* / Access control list */

        /* Actions for template/view */
        $this->templateConf['actions'] = array(
            'edit' => $this->templateConf['acl']['edit'],
            'add' => $this->templateConf['acl']['add'],
            'delete' => $this->templateConf['acl']['delete']
        );
        /* /Actions for template/view */

        /* Extra data (specific custom data of local controller) */
        $this->templateConf['extraData'] = array(
            'template' => array(), // Extra data for template like 'class', 'colClass', etc.
            'service' => array() // Extra data for service like 'fields', etc.
        );
        /* /Extra data */

        /* Response */
        // Avoid to wrap data with status (in case of fragments originated by calls from twig)
        $this->responseConf['hasStatus'] = !empty($requestRoute);
        /* /Response */

        return $this;
    }

    /**
     * DEFINE ROUTE HERE
     * CALL PARENT: parent::confAction()
     *
     * Action to get configuration
     * @param Request $request
     * @return mixed
     */
    public function confAction(Request $request)
    {
        // Set configuration
        $this->init($request);

        $this->responseConf['hasConf'] = true;
        return $this->getResponse(true);
    }

    /**
     * Update breadcrumb
     * @param Request $request
     * @return $this
     */
    protected function updateBreadcrumb(Request $request)
    {
        $session = $this->get('session');
        $breadcrumb = $session->get('_app.breadcrumb');

        $route = $request->get('_route');

        // Don't repeat paths
        if(!empty($breadcrumb[$route])) {
            unset($breadcrumb[$route]);
        }
        // Max of 6 paths
        elseif(count($breadcrumb) > 6) {
            array_shift($breadcrumb);
        }

        $breadcrumb[$route] = array(
            'url' => $request->getUri(),
            'label' => $this->templateConf['label']
        );

        $session->set('_app.breadcrumb', $breadcrumb);

        return $this;
    }

    /**
     * Add flash message to show to user
     * @param string $body (html message)
     * @param string $head (html message)
     * @param string $type [success, info, warning, error]
     * @return $this
     */
    protected function addFlashMessage($body, $head = '', $type = 'info')
    {
        $type = in_array($type, array('success', 'info', 'warning', 'error')) ? $type : 'info';

        $this->responseConf['flashMessages'][] = array(
            'type' => $type,
            'head' => $head,
            'body' => $body
        );

        return $this;
    }

    /**
     * Clear flash messages
     * @return $this
     */
    protected function clearFlashMessage()
    {
        $this->responseConf['flashMessages'] = array();
        return $this;
    }

    /**
     * Debug variable
     * @param $data
     * @param boolean $exit (if true you can see the correct format when the final response is "json")
     * @return $this
     */
    protected function debugVar($data, $exit = true)
    {
        $endId = uniqid('debug-var-end-anchor-');

        echo('<div style="margin: 12px;"><a href="#'.$endId.'">Go to end</a><pre>');
        print_r($data);
        echo('</pre><div id="'.$endId.'"></div></div>');

        if ($exit) {
            exit;
        }

        return $this;
    }

    /**
     * Get request data
     * @param Request $request
     * @return null
     */
    protected function getRequestData(Request $request)
    {
        $data = null;
        $content = $request->getContent();

        if(!empty($content)) {
            parse_str($content, $data);
        }

        return $data;
    }

    /**
     * Check csrf token
     * @param $csrfToken
     * @return $this
     */
    protected function checkCsrfToken($csrfToken)
    {
        if (!$this->isCsrfTokenValid(HelperService::getGlobalVar('csrfTokenId'), $csrfToken)) {
            throw new AuthenticationException('Invalid request');
        }
        return $this;
    }

    /**
     * Get and process request data
     * @param Request $request
     * @param bool $checkCsrfToken
     * @return null
     */
    protected function getAndProcessRequestData(Request $request, $checkCsrfToken = true)
    {
        $data = $this->getRequestData($request);

        if ($checkCsrfToken) {
            $csrfToken = (isset($data['csrfToken']) ? $data['csrfToken'] : null);
            $this->checkCsrfToken($csrfToken);
            unset($data['csrfToken']);
        }
        return $data;
    }

    /**
     * Normalize and get the response for user
     * @param bool $isJson (is a json response)
     * @param array $extraData (extra data to merge into response)
     * @return array
     */
    protected function getResponse($isJson = false, $extraData = array())
    {
        $data = (is_array($extraData) ? $extraData : array());

        // Add conf
        if ($this->responseConf['hasConf']) {
            $data = array_merge($data, $this->templateConf);
        } else {
            // Add mandatory conf if is not configured to send
            $data['localData'] = $this->templateConf['localData'];
        }

        // Return json response
        if ($isJson) {
            // Wrap data with status
            if ($this->responseConf['hasStatus']) {
                $data = array(
                    'status' => $this->responseConf['status'],
                    'data' => array_merge($data, $extraData)
                );

                // Add errors
                if (!empty($this->responseConf['errors'])) {
                    $data['errors'] = $this->responseConf['errors'];
                }

                // Add flash messages
                if (!empty($this->responseConf['flashMessages'])) {
                    $data['flashMessages'] = $this->responseConf['flashMessages'];
                }
            }

            // Create a json response
            $response = new JsonResponse();
            return $response->setData($data);
        }

        // Return array
        return array(
            '_conf' => $data,
            '_localData' => $this->responseConf['localData']
        );
    }

    /**
     * Handle with not found exception
     * @param Request $request
     * @return mixed
     */
    protected function handleNotFoundException(Request $request) {
        $session = $this->get('session');
        $breadcrumb = $session->get('_app.breadcrumb');

        // Try to redirect to the last valid url
        if (is_array($breadcrumb) && (count($breadcrumb) > 0)) {
            $requestRoute = $request->get('_route');
            if ($requestRoute && isset($breadcrumb[$requestRoute])) {
                // Invalid route (responsible for the exception, maybe caused by store changed)
                unset($breadcrumb[$requestRoute]);
                $session->set('_app.breadcrumb', $breadcrumb);
            }

            if (count($breadcrumb) > 0) {
                $lastUrl = end($breadcrumb)['url'];
                return $this->redirect($lastUrl);
            }
        }

        // Redirect to home page
        $this->get('app.service.app')->addFlashMessage(
            'No such url!',
            'Page Redirect',
            'warning'
        );
        return $this->redirectToRoute('_home__default__index');
    }

    /**
     * Get store attr
     * @param null $attr (if not provided, return all store array)
     * @return mixed
     */
    protected function getStoreAttr($attr = null) {
        $storeId = $this->get('session')
            ->get('_app.store');

        if ($attr) {
            switch ($attr) {
                case 'id':
                    return $storeId;
                default:
                    $store = $this->get('session')
                        ->get('_app.store')[$storeId];

                    if ($attr && isset($store[$attr])) {
                        return $store[$attr];
                    }

                    return ($attr ? null : $store);
            }
        }
    }

    /**
     * Get store acl
     * @param $resource
     * @return mixed
     */
    protected function getStoreAcl($resource) {
        $session = $this->get('session');
        $storeId = $session->get('_app.store');
        $storeAcl = array();

        if ($storeId && $resource) {
            // Get store acl
            $storeAcl = $session->get('_app.stores')[$storeId]['acl'];

            $resource = explode(':', $resource);
            foreach ($resource as $resourceIndex) {
                if (isset($storeAcl[$resourceIndex])) {
                    // Go into acl array according with $resource array index
                    $storeAcl = $storeAcl[$resourceIndex];
                } else {
                    // Acl array index not found, return only the store itself.
                    $storeAcl = array($storeId);
                    break;
                }
            }
        }

        return $storeAcl;
    }
}
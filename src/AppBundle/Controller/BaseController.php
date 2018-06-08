<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use AppBundle\Service\HelperService;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

abstract class BaseController extends Controller
{
    // Controls if controller has been initialized
    protected $isInitialized = false;

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
        // Type of response to return <JSON, ARRAY, RAW_JSON, RAW_ARRAY>
        'type' => 'JSON',
        'status' => 1, // <1: success, 0: error>
        'hasStatus' => true, // Send status in response
        'errors' => array(),
        'flashMessages' => array(), // (error, warning, info and success messages)
        'hasConf' => false,
        // Local specific custom data of controller to sent to template/view (twig)
        'localData' => array('template' => array(), 'data' => array()),
        'dependencies' => array() // Dependencies of other resources/objects (children)
    );


    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }
        $this->isInitialized = true;


        //////////////////////////////////////////////////////////////////////////////////////////
        // Disable debug toolbar to improve the page loading in development mode
        //////////////////////////////////////////////////////////////////////////////////////////
        if ($this->get('kernel')->isDebug() && $this->container->has('profiler')) {
            $this->container->get('profiler')->disable();
        }
        //////////////////////////////////////////////////////////////////////////////////////////

        $session = $this->get('session');

        // Set global vars in HelperService (to be accessed from entity, repository, formType, etc.)
        $systemLangPrefix = $session->get('_app.system.language')['systemPrefix'];
        HelperService::setGlobalVar('systemLangPrefix', $systemLangPrefix);
        $userLangPrefix = $session->get('_app.user.language')['systemPrefix'];
        HelperService::setGlobalVar('userLangPrefix', $userLangPrefix);
        // This is the variable used by all processes.
        // By default initializes with user language.
        // User language is used to display the interface,
        // for legal processes change this variable to system language (like current account documents),
        // and for customer processes change this variable to the customer language (like email send, payment requests, etc)
        // Call: HelperService::setGlobalVar('langPrefix', HelperService::getGlobalVar('systemLangPrefix'));
        // Or: $this->setLangPrefix($context = 'USER', $entity = null); (in BaseEntityController)
        HelperService::setGlobalVar('langPrefix', $userLangPrefix);
        HelperService::setGlobalVar('filesRepository', $session->get('_app.system')['filesRepository']);
        HelperService::setGlobalVar('baseUrl', $this->generateUrl('_app__default__index', array(), UrlGeneratorInterface::ABSOLUTE_URL));
        HelperService::setGlobalVar('systemName', $session->get('_app.system')['name']);
        HelperService::setGlobalVar('isAdmin', $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN'));
        HelperService::setGlobalVar('loggedUserId', $session->get('_app.user')['id']);
        // This parameter is used to generate the token. We need to use the same parameter value in forms,
        // controllers and views, in order to generate always the same token regardless of the context
        // (because static views).
        // So we use the value defined in "./app/config/parameters.yml" "parameters:secret" for all contexts,
        // to make it more generic and configurable.
        // In twig this parameter is accessible trough the configured global parameter "csrf_token_id" (in config.yml).
        $csrfTokenId = $this->container->getParameter('secret');
        HelperService::setGlobalVar('csrfTokenId', $csrfTokenId);

        /* Controller */
        $bundleNameArr = HelperService::getBundleNameArr($this);
        // (CamelCase)
        // BundlePrefix can be pre-filled in case of controllers that uses a different entity,
        // like front-office controllers that uses back-office entities.
        if (!isset($this->localConf['BundlePrefix'])) {
            $this->localConf['BundlePrefix'] = $bundleNameArr['prefix'];
        }
        // (snake_case)
        $this->localConf['bundlePrefix'] = HelperService::camelCaseToSnakeCase($this->localConf['BundlePrefix']);
        // (CamelCase)
        // Bundle can be pre-filled in case of controllers that uses a different entity,
        // like Bck/AdminBundle/Controller/UserController.
        if (!isset($this->localConf['Bundle'])) {
            $this->localConf['Bundle'] = $bundleNameArr['bundle'];
        }
        // Removes "Bundle" (snake_case)
        $this->localConf['bundle'] = HelperService::camelCaseToSnakeCase(substr($this->localConf['Bundle'], 0, -6));
        // (CamelCase)
        $this->localConf['BundleNamespace'] = ($this->localConf['BundlePrefix'].$this->localConf['Bundle']);
        // (CamelCase separated with '\')
        $this->localConf['BundlePath'] = (
            (empty($this->localConf['BundlePrefix']) ? '' : ($this->localConf['BundlePrefix'] . '\\'))
            . $this->localConf['Bundle']
        );
        // Removes "Controller" (CamelCase)
        $this->localConf['controller'] = substr(HelperService::getClassName($this), 0, -10);
        /* /Controller */

        /* Debug mode */
        $this->templateConf['isDebug'] = $this->get('kernel')->isDebug();
        /* Debug mode */

        /* Base paths */
        $this->localConf['paths'] = array(
            'root' => ($this->get('kernel')->getRootDir() . '/../'),
            'language' => ($this->get('kernel')->getRootDir() . '/../src/'
                . (empty($this->localConf['BundlePrefix']) ? '' : ($this->localConf['BundlePrefix'] . '/'))
                . $this->localConf['Bundle'] . '/Resources/language/'.$this->localConf['controller'] . '/'
            )
        );
        /* /Base paths */

        /* System language file */
        $systemLanguagePath = ($this->localConf['paths']['root']
            . 'src/AppBundle/Resources/language/base/' . $systemLangPrefix . '.php'
        );
        $this->loadLanguageFileByAction(null, $systemLanguagePath, false); // First load, no merge is needed (false)
        /* /System language file */

        /* Selected Menu and ACL */
        if ($session->get('_app.isBckContext')) { // Front-office context does not have menus nor ACL control
            if (empty($this->templateConf['selectedMenu']['route'])) {
                // Build the route following the pattern ('_' . bundle . '__' . controller . '__' . action)
                // "index" action to select the correct menu in template/view
                $this->templateConf['selectedMenu']['route'] = (
                    '_'
                    . (empty($this->localConf['bundlePrefix']) ? '' : ($this->localConf['bundlePrefix'] . '__'))
                    . $this->localConf['bundle'] . '__'
                    . HelperService::camelCaseToSnakeCase($this->localConf['controller'])
                    . '__index'
                );
            }

            // Find the module and menu by route (by session is faster than query database)
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
            if ($isAdmin) {
                $this->templateConf['selectedMenu']['acl'] = 8;
            } // No restrictions
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
        } else {
            $this->templateConf['acl'] = array(
                'read' => true,
                'edit' => false,
                'add' => false,
                'delete' => false
            );
        }

        /* Actions for template/view */
        $this->templateConf['actions'] = array(
            'edit' => $this->templateConf['acl']['edit'],
            'add' => $this->templateConf['acl']['add'],
            'delete' => $this->templateConf['acl']['delete']
        );
        /* /Actions for template/view */

        /* Controls for template/view */
        $this->templateConf['controls'] = array(
            'expander' => array('isEnabled' => false, 'isExpanded' => false),
            'legend' => array(
                array('label' => 'Canceled', 'class' => 'legend-canceled', 'field' => 'isEnabled', 'expr' => 'null')
            )
        );
        /* /Controls for template/view */

        /* Extra data (specific custom data of local controller) */
        $this->templateConf['extraData'] = array(
            'template' => array(), // Extra data for template like 'class', 'colClass', etc.
            'service' => array() // Extra data for service like 'fields', etc.
        );
        /* /Extra data */

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
        return $this->getResponse();
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
     * @param bool $hasDataNormalization (normalize data to return only the request custom data)
     * @return null
     */
    protected function getAndProcessRequestData(Request $request, $checkCsrfToken = true, $hasDataNormalization = true)
    {
        $data = $this->getRequestData($request);

        if ($checkCsrfToken) {
            $csrfToken = (isset($data['csrfToken']) ? $data['csrfToken'] : null);
            $this->checkCsrfToken($csrfToken);
        }

        return ($hasDataNormalization ?
            (isset($data['data']) ? $data['data'] : array()) :
            $data
        );
    }

    /**
     * Normalize and get the response for user
     * @param array $extraData (extra data to merge into response)
     * @param $hasSymfonyResponse (wrap the response in a Symfony response)
     * @return mixed
     */
    protected function getResponse($extraData = array(), $hasSymfonyResponse = true)
    {
        $data = (is_array($extraData) ? $extraData : array());

        // If conf is configured to sent, add all data
        if ($this->responseConf['hasConf']) {
            $data = array_merge($data, $this->templateConf);
            // Get conf language file
            $this->loadLanguageFileByAction('conf');
            $data['language'] = HelperService::getLangClient();
        } else {
            // If conf is not configured to sent, add some mandatory data
            $data['localData'] = $this->templateConf['localData'];
        }

        // Response
        switch ($this->responseConf['type']) {
            case 'JSON': // Used in json requests from the browser
                // Wrap data with status (if enabled)
                if ($this->responseConf['hasStatus']) {
                    $data = array(
                        'status' => $this->responseConf['status'],
                        'data' => $data
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
            case 'RAW_JSON': // Used in calls directly from templates (twig)
                if (!$hasSymfonyResponse) {
                    return $data;
                }

                // Create a json response
                $response = new JsonResponse();
                return $response->setData($data);
                break;
            case 'RAW_ARRAY': // Used in calls directly from controllers
                return $data;
                break;
            default: // ('ARRAY') Regular type to sent to render a regular view
                return array(
                    '_conf' => $data,
                    '_dependencies' => $this->responseConf['dependencies'],
                    '_localData' => $this->responseConf['localData']
                );
        }
    }

    /**
     * Set response conf attribute (to be called from out of this controller)
     * @param $attr
     * @param $value
     * @return $this
     */
    public function setResponseConfAttr($attr, $value)
    {
        $this->responseConf[$attr] = $value;
        return $this;
    }

    /**
     * Decode Json
     * @param $data
     * @return mixed
     */
    protected function jsonDecode($data) {
        $jsonEncoder = new JsonEncoder();
        return $jsonEncoder->decode($data, 'json');
    }

    /**
     * Handle Exit
     * @param string $message
     * @param bool $hasJson (send a json response)
     * @throws \Exception
     */
    protected function handleExit($message = 'An error has occurred', $hasJson = false) {
        if ($hasJson) {
            $jsonResponse = $this->getResponse(array(), false);
            $response = new Response(json_encode($jsonResponse));
            $response->headers->set('Content-Type', 'application/json');
            $response->send();
            exit;
        }

        throw new \Exception($message);
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

        $isBckContext = $session->get('_app.isBckContext');
        $route = ($isBckContext ? '_bck__home__default__index' : '_home__default__index');
        return $this->redirectToRoute($route);
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

    /**
     * Load language file by action
     * @param $action
     * @param $languageFilePath
     * @param bool $hasMerge
     * @return $this
     */
    protected function loadLanguageFileByAction($action, $languageFilePath = null, $hasMerge = true)
    {
        if (!$languageFilePath) {
            $languageFilePath = ($this->localConf['paths']['language']
                . $action . '/'
                . HelperService::getGlobalVar('userLangPrefix') . '.php'
            );
        }

        if (file_exists($languageFilePath)) {
            $languageArr = include $languageFilePath;

            // Normalize array
            $languageArr = array_merge(
                array('client' => array(), 'server' => array()),
                $languageArr
            );

            // In case of include error $languageArr is not set
            if ($languageArr) {
                // If merged is enabled, so merge with previous loads
                if ($hasMerge) {
                    $prevLanguageArr = HelperService::getGlobalVar('languageArr');
                    if ($prevLanguageArr) {
                        $languageArr['client'] = array_merge($prevLanguageArr['client'], $languageArr['client']);
                        $languageArr['server'] = array_merge($prevLanguageArr['server'], $languageArr['server']);
                    }
                }
                HelperService::setGlobalVar('languageArr', $languageArr);
            }
        }

        return $this;
    }
}
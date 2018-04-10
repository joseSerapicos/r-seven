<?php
namespace AppBundle\Controller;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;


abstract class BaseEntityController extends BaseController
{
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

        parent::init($request);

        // Local configuration
        $this->setFlags();

        // Local configuration
        $this->setLocalConf();

        // Template configuration
        $this->setTemplateConf();

        /* Response */
        $this->responseConf['hasObjects'] = false;
        $this->responseConf['objects'] = null;
        $this->responseConf['hasObject'] = true;
        $this->responseConf['object'] = null;
        // Mark session storage object with a flag to be identified by template
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        // Update fields choices with self reference (generally used in 'edit' and 'delete' actions)
        $this->responseConf['hasFieldsChoicesUpdate'] = false;
        /* /Response */

        return $this;
    }

    /**
     * Set flags.
     * Set default values for flags. Flags are defined before init the component, so never override its values.
     * @return $this
     */
    protected function setFlags()
    {
        if (!isset($this->flags['handleStore'])) {
            $this->flags['handleStore'] = true;
        }

        return $this;
    }

    /**
     * Set local configuration
     * @return $this
     */
    protected function setLocalConf()
    {
        /* Entity */
        // Entity can be pre-filled in case of controllers that uses a different entity,
        // like "Supplement" and "Discount" use the "PriceException" entity.
        if (empty($this->localConf['entity'])) {
            $this->localConf['entity'] = $this->localConf['controller']; // CamelCase
        }
        $this->localConf['entityClass'] = ($this->localConf['Bundle'].'\Entity\\'.$this->localConf['entity']);
        if (empty($this->localConf['entityFields'])) { // Can be initialized and handled in child controller
            $this->localConf['entityFields'] = $this->getLocalRepositoryService()->execute('getMetadata');
        }
        $this->localConf['entityTable'] = ((($this->localConf['bundle'] == 'sysadmin')
                ? 'app_' : '') . lcfirst($this->localConf['entity'])); // lowerCamelCase
        // Necessary to get and persist object in the correct database
        $this->localConf['entityDataBase'] = (($this->localConf['bundle'] == 'sysadmin')
            ? 'app_database' : 'local_database');
        // Check if manager contains the object when database is persisted, it's necessary when the object
        // crosses multiple bundles/tables from different managers (example: local database joins with app database).
        $this->localConf['checkObjectManager'] = false;
        /* /Entity */

        /* Form */
        $this->localConf['formTypeClass'] = ($this->localConf['Bundle'].'\Form\\'.$this->localConf['entity'].'Type');
        /* /Form */

        /* General repository functions. Default function to be called in main method, can be override after "init()" */
        $this->localConf['functions'] = array(
            'getObjects' => 'getObjects'
        );
        /* /Functions */

        /* Templates: Default view/template for action */
        $this->localConf['templatesPath'] = ($this->localConf['Bundle'].':'.$this->localConf['entity'].':');
        $this->localConf['templates'] = array(
            'index' => ($this->localConf['templatesPath'] . 'index.html.twig'),
            'detail' => ($this->localConf['templatesPath'] . 'detail.html.twig'),
            'edit' => 'AppBundle:form:form-popup.html.twig'
        );
        /* /Templates */

        /* Search */
        $this->localConf['search'] = array(
            'fields' => array(),
            'criteria' => array()
        );
        if (!empty($this->localConf['entityFields']['storeObj']) && $this->flags['handleStore']) {
            // Set filter by store
            if (empty($this->flags['storeAclResource'])) {
                $this->localConf['search']['criteria'][] = array(
                    'field' => 'storeObj',
                    'expr' => 'eq',
                    'value' => $this->getStoreAttr('id')
                );
            } else {
                $this->localConf['search']['criteria'][] = array(
                    'field' => 'storeObj',
                    'expr' => 'in',
                    'value' => $this->getStoreAcl($this->flags['storeAclResource'])
                );
            }
        }
        /* /Search */

        return $this;
    }

    /**
     * Set template configuration
     * @return $this
     */
    protected function setTemplateConf()
    {
        /* Fields */
        $templateFieldsConf = $this->getTemplateFieldsConf();
        $this->templateConf['fields'] = $templateFieldsConf['fields'];
        /* /Fields */

        /* Route */
        if(!empty($this->templateConf['route'])) {
            foreach ($this->templateConf['route'] as $key => $value) {
                if (empty($this->templateConf['route'][$key]['url'])) {
                    $this->templateConf['route'][$key]['url'] = $this->generateUrl($value['name']);
                }
            }
        }
        /* /Route */

        /* Search */
        $orderByField = array();
        if (isset($this->localConf['entityFields']['priority'])) {
            $orderByField = array('field' => 'priority', 'value' => 'ASC');
        } elseif (isset($this->localConf['entityFields']['name'])) {
            $orderByField = array('field' => 'name', 'value' => 'ASC');
        } else {
            $orderByField = array('field' => 'id', 'value' => 'DESC');
        }

        $this->templateConf['search'] = array (
            'fields' => $templateFieldsConf['defaultSelection'], // Selected fields by default to show in view
            'criteria' => array(
                array('field' => 'isEnabled', 'expr' => 'eq', 'value' => 1)
            ),
            'orderBy' => array(
                $orderByField
            ),
            'limit' => 12, // Is good for pagination, allow alignment with it multiples (1, 2, 3, 4, ...)
            'offset' => 0,
            'hasMore' => false // Controls the pagination
        );
        /* /Search */

        /* Controls */
        $this->templateConf['controls']['expander'] = false;
        /* /Controls */

        return $this;
    }

    /**
     * Set Template Fields Conf
     * @param null $fieldsContext (context to set fields and fields metadata [view, form, defaultSelection])
     * @return array
     */
    protected function getTemplateFieldsConf($fieldsContext = null)
    {
        // Normalize fields context
        $fieldsContext = ($fieldsContext ? $fieldsContext :
            (empty($this->flags['hasForm']) ? 'view' : 'form')
        );
        // Set context to get metadata from EntityRepository
        $context = (($fieldsContext == 'defaultSelection') ? 'view' : $fieldsContext);

        // Normalize fields to template (send only the necessary information)
        $templateFieldsConf = array(
            'fields' => array(
                'view' => array(), // Fields to render in 'view context'
                'form' => array(), // Fields to render in 'form context'
                'metadata' => array(), // Metadata about fields
                'choices' => array() // Choices for object or enum fields
            ),
            'defaultSelection' => array() // Fields selected by default to be shown in view (selected in search conf)
        );

        // No entity fields
        if (!is_array($this->localConf['entityFields'])) {
            return $templateFieldsConf;
        }

        $defaultChoices = array(
            'type' => null,
            'hasSelfReference' => false,
            'query' => null,
            'value' => null
        );

        foreach ($this->localConf['entityFields'] as $field => $fieldMetadata) {
            $contextType = $this->getFieldMetadata($field, 'type', $context);
            $formType = $this->getFieldMetadata($field, 'type', 'form');

            // Add field
            $notAllowedTypes = array(
                // "hidden" and "fake" types is only used in form, but is used also in metadata as auxiliary field
                // like the "type" in "BookingService".
                'view' => array('none', 'hidden', 'fake'),
                'form' => array('none', 'embed')
            );
            $hasField = false; // Controls if is needed to add the field metadata
            switch ($fieldsContext) {
                // Only fields for form
                case 'form':
                    if (!in_array($contextType, $notAllowedTypes['form'])) {
                        $templateFieldsConf['fields'][$context][] = $field;
                        $hasField = true;
                    }
                    break;
                // Only default fields for view
                case 'defaultSelection':
                    if (!in_array($contextType, $notAllowedTypes['view'])
                        && isset($fieldMetadata['isDefault'])
                        && $fieldMetadata['isDefault'])
                    {
                        $templateFieldsConf['fields']['view'][] = $field;
                        $templateFieldsConf['fields']['defaultSelection'][] = $field;
                        $hasField = true;
                    }
                    break;
                // Full fields info (view, default selection and form)
                default: // view
                    if (!in_array($contextType, $notAllowedTypes['view'])) {
                        $templateFieldsConf['fields'][$context][] = $field;
                        $hasField = true;

                        // Check if default selection in view (search conf) is enabled
                        if (isset($fieldMetadata['isDefault']) && $fieldMetadata['isDefault']) {
                            $templateFieldsConf['defaultSelection'][] = $field;
                        }
                    }

                    // View context needs also to send form fields to be used by Angular when build the form controls.
                    // In turn, form context doesn't need to send the view fields because it's rendered
                    // in twig as template of Angular form component.
                    if (!in_array($formType, $notAllowedTypes['form'])) {
                        $templateFieldsConf['fields']['form'][] = $field;
                        $hasField = true;
                    }
            }

            // Add field metadata
            if ($hasField) {
                $templateFieldsConf['fields']['metadata'][$field] = array(
                    'label' => $fieldMetadata['label'],
                    // Determined according the context, but if is "none", the "form" context is used (field
                    // can be "none" in view but used only in form, like "startManualDate" in "BookingService")
                    'type' => (in_array($contextType, array('none')) ? $formType : $contextType),
                    'acl' => $fieldMetadata['acl'],
                    'isObject' => ($fieldMetadata['type'] == 'object'), // To be ignored by search
                    'parent' => (empty($fieldMetadata['parent']) ? null : $fieldMetadata['parent'])
                );

                // Choices (object and enum type, 'auto-complete' get choices at run-time, so does not need this conf)
                if (in_array($fieldMetadata['type'], array('object', 'enum')) &&
                    !in_array($formType, array('auto-complete', 'hidden-entity'))) {
                    // Normalize choices array
                    $choices = array_merge(
                        $defaultChoices,
                        ((isset($fieldMetadata['typeDetail']) && isset($fieldMetadata['typeDetail']['choices'])) ?
                            $fieldMetadata['typeDetail']['choices'] :
                            array()
                        )
                    );

                    // Used to determine the method to render in view
                    $choices['type'] = $fieldMetadata['type'];

                    // NOTE: Choices values for foreign key objects are not defined here,
                    // to avoid get object from database all times that conf is initialized,
                    // so we handle with this choices values only when this information is necessary,
                    // and this is determined in the response.

                    $templateFieldsConf['fields']['choices'][$field] = $choices;
                }

                // Merge with specific data for view
                if (($fieldsContext == 'view') && isset($fieldMetadata['view'])) {
                    $templateFieldsConf['fields']['metadata'][$field] = array_merge(
                    // NOTE: This array first to be override by the second
                    // (where fields like 'type' are more refined according with form context)
                        $fieldMetadata['view'],
                        $templateFieldsConf['fields']['metadata'][$field]
                    );
                }

                // Field in view (usually used by auto-complete)
                $fieldInView = $this->getFieldMetadata($field, 'fieldInView');
                if (!empty($fieldInView)) {
                    $templateFieldsConf['fields']['metadata'][$field]['fieldInView'] = $fieldInView;
                }

                // Default value (to use in new objects)
                $defaultValue = $this->getFieldMetadata($field, 'default');
                if ($defaultValue != null) {
                    $templateFieldsConf['fields']['metadata'][$field]['default'] = $defaultValue;
                }
            }
        }

        return $templateFieldsConf;
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request) {
        // Set configuration
        $this->init($request);
        // Update breadcrumb
        $this->updateBreadcrumb($request);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        return $this->render($this->localConf['templates']['index'], $this->getResponse());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Profile action (handles only with registers of the logged user)
     * @param Request $request
     * @return mixed
     */
    public function profileAction(Request $request)
    {
        // Define selected menu route once the route is not the pattern for modules/menus (index)
        $this->templateConf['selectedMenu']['route'] = $request->get('_route');
        // Set configuration
        $this->init($request);
        // Update breadcrumb
        $this->updateBreadcrumb($request);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = false;
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $this->responseConf['object'] = $this->normalizeObject($this->getObject($loggedUserId));

        return $this->render($this->localConf['templatesPath'].'profile.html.twig', $this->getResponse());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);
        $this->templateConf['label'] = ($this->templateConf['label'] . ' Detail'); // Override label

        // Update breadcrumb
        $this->updateBreadcrumb($request);

        // Get and validate object
        $obj = $this->getObject($id);
        if (!($obj instanceof $this->localConf['entityClass']) || ($id != $obj->getId())) {
            return $this->handleNotFoundException($request);
        }

        // Config response
        $this->responseConf['object'] = $this->normalizeObject($obj);
        $this->responseConf['hasConf'] = true;
        return $this->render($this->localConf['templates']['detail'], $this->getResponse());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get a new object
     * @param Request $request
     * @return mixed
     */
    public function newAction(Request $request)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Use session storage, object is not persisted by user yet
        $this->init($request);

        // Set and save a new object in session to preserve default values
        $newObj = $this->newObject();
        $this->saveObjectToSS($newObj, true);

        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        if(!empty($id)) {
            $object = $this->getObject($id);

            $this->responseConf['object'] = $this->normalizeObject($object);
            return $this->getResponse(true);
        }
        
        // Process request
        $this->getAndProcessRequestData($request);

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->addFlashMessage( // Flash message to display to user
            'The data has been refreshed',
            'Success',
            'success'
        );
        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @return mixed
     */
    public function choicesAction(Request $request)
    {
        // Set configuration
        $this->init($request);
        // Redefine template criteria
        $this->templateConf['search']['criteria'] = array(
            array(
                'field' => 'isEnabled',
                'expr' => 'eq',
                'value' => true
            )
        );

        $this->getAndProcessRequestData($request);

        // Get options
        $options = $this->getSearch();
        $options['conf'] = array('hasFields' => false); // Field are only used for join
        if (!empty($options['limit'])) { // Pagination enabled
            $options['limit']++; // Used to control the pagination
        }

        // Get objects
        $choices = $this->getLocalRepositoryService()
            ->execute(
                'getChoices',
                array(
                    true,
                    'getResult',
                    $options
                )
            );

        if (count($choices) > 0) {
            // Control pagination
            if (!empty($options['limit'])) { // Pagination enabled
                $this->templateConf['search']['hasMore'] = (count($choices) == $options['limit']);
                if ($this->templateConf['search']['hasMore']) {
                    array_pop($choices); // Remove the last row, it's only to control the pagination
                }
            }

            // Map objects
            $choices = array_map(
                function($value) {
                    return array(
                        'id' => $value->getId(),
                        'label' => $value->__toString()
                    );
                },
                $choices
            );
        }

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $choices;
        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to edit/add objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);

            if ($this->preSaveObject($obj, $data['form'])) {
                $this->saveForm($form, $obj);
            }
            // This method is executed independent of the success in save
            // (check the $response['status'] if you need this information)
            $this->postSaveObject($obj, $data['form']);
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to toggle isEnabled field
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function cancelAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        if ($this->preCancelObject($obj)) {
            // Disable object
            $obj->setIsEnabled(!$obj->getIsEnabled());
            // Save object
            $this->saveObject($obj, true, true);
        }
        $this->postCancelObject($obj);

        if ($this->responseConf['status'] == 1) {
            $this->addFlashMessage( // Flash message to display to user
                'The data has been '.($obj->getIsEnabled() ? 'enabled' : 'canceled'),
                'Success',
                'success'
            );
        }
        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Set array of "ids"
        $ids = array();
        if(!empty($id)) {
            $ids[] = $id;
        } else if(!empty($data['data']['id']) && is_array($data['data']['id'])) {
            $ids = $data['data']['id'];
        }
        
        // Delete object/objects
        foreach($ids as $id) {
            $obj = $this->getObject($id);
            if ($this->preDeleteObject($obj, null)) {
                $this->deleteObject($obj);
            }
            // This method is executed independent of the success in delete
            // (check the $response['status'] if you need this information)
            $this->postDeleteObject($obj, null);

            // Return in case of error
            if ($this->responseConf['status'] !== 1) {
                return $this->getResponse(true);
            }
        }

        // Update fields choices with self reference
        $this->responseConf['hasFieldsChoicesUpdate'] = true;

        $this->addFlashMessage( // Flash message to display to user
            'The data has been deleted',
            'Success',
            'success'
        );
        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to order object by your "priority" field
     * @param Request $request
     * @param $id
     * @param $type
     * @return mixed
     */
    public function orderAction(Request $request, $id, $type)
    {
        // Set configuration
        $this->init($request);

        // Process request
        $this->getAndProcessRequestData($request);

        // Get object
        $obj = $this->getObject($id);

        // Update priority
        $priority = $obj->getPriority();
        switch ($type) {
            case 'up':
                $priority = (($priority > 0) ? ($priority - 1) : $priority);
                break;
            case 'down':
                $priority++;
                break;
        }

        // Save only if there are changes
        if ($priority != $obj->getPriority()) {
            $obj->setPriority($priority);
            $this->saveObject($obj);
        }

        if ($this->responseConf['status'] === 1) {
            // Update fields choices with self reference
            $this->responseConf['hasFieldsChoicesUpdate'] = true;

            // Config response
            $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
            $this->addFlashMessage( // Flash messages to display to user
                'The data has been updated',
                'Success',
                'success'
            );
        }

        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get all data
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataAction(Request $request, $responseType = 'http')
    {
        // Set configuration
        $this->init($request);
        if ($responseType == 'array') { // Get all objects @TODO change 'array' to 'jsonAllObjects'
            $this->templateConf['search']['limit'] = null;
        }

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['hasStatus'] = ($responseType == 'http'); // Only has status in http responses
        return $this->getResponse(true);
    }

    /**
     * Save object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @param $addToResponse (determines if object should be added to response)
     * @return mixed
     */
    protected function saveObject(&$object, $hasFlush = true, $addToResponse = false)
    {
        return self::saveObject_static($this, $object, $hasFlush, $addToResponse);
    }
    /**
     * Static signature
     * Can be used for general objects
     * @param $controller
     * @param $object
     * @param bool $hasFlush
     * @param bool $addToResponse
     * @return mixed
     */
    static protected function saveObject_static($controller, &$object, $hasFlush = true, $addToResponse = false)
    {
        // Validate object
        //$errors = $controller->validateObject($object); // Nor necessary, form validates object

        switch ($controller->flags['storage']) {
            case 'session':
                return $controller->saveObjectToSS($object, $addToResponse);
            default:
                return $controller->saveObjectToDb($object, $hasFlush, $addToResponse);
        }
    }

    /**
     * Save object to session storage
     * @param $object
     * @param $addToResponse (determines if object should be added to response)
     * @return $this
     */
    protected function saveObjectToSS(&$object, $addToResponse = false)
    {
        if ($object) {
            if (!$this->container->get('app.service.session_storage')->save($object, $this->flags['parent'])) {
                // Config response
                $this->responseConf['status'] = 0;
                // Flash messages to display to user
                $this->addFlashMessage(
                    'Please restart the process.',
                    'The data has expired.',
                    'warning'
                );
            }

            // If configure response is enabled, then set object to response
            if ($addToResponse) {
                if ($this->responseConf['hasObject']) {
                    $this->responseConf['object'] = $this->normalizeObject($object); // Object updated
                }
            }
        }

        return $this;
    }

    /**
     * Save object to database
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @param $addToResponse (determines if object should be added to response)
     * @return $this
     */
    protected function saveObjectToDb(&$object, $hasFlush = true, $addToResponse = false)
    {
        // Persist object in Entity Manager
        if ($object /*&& !$errors*/) {
            $entityManager = $this->getLocalEntityManager();

            // Check object in manager
            // (for app objects in local manager because multiple managers don't be able to handle the same entity)
            if ($this->localConf['checkObjectManager']) {
                if (!$entityManager->contains($object)) {
                    $object = $entityManager->merge($object);
                }
            }

            $entityManager->persist($object);

            // Generates code for object (only after persisted, to avoid jumping numbers when persist fail)
            if (isset($this->localConf['entityFields']['code'])) {
                $fieldMetadata = $this->localConf['entityFields']['code'];
                // Choice dependency (parent object)
                $dependency = (isset($fieldMetadata['dependency'])
                    ? $fieldMetadata['dependency']
                    : null
                );
                $objContainer = ($dependency
                    ? $this->getDependencyObjectContainer($object, $dependency)
                    : $object
                );
                if (method_exists($objContainer, 'getCodeNumber') && empty($objContainer->getCodeNumber())) {
                    $setting = (empty($this->flags['setting']) ? array() : $this->flags['setting']);
                    $settingBundle = (empty($setting['Bundle']) ? $this->localConf['Bundle'] : $setting['Bundle']);
                    $settingEntity = (empty($setting['entity']) ? ($this->localConf['entity'] . 'Setting') : $setting['entity']);
                    $localBundle = $localEntity = null;
                    if ($dependency && isset($this->localConf['entityFields'][$dependency]['typeDetail'])) {
                        $localBundle = $this->localConf['entityFields'][$dependency]['typeDetail']['Bundle'];
                        $localEntity = $this->localConf['entityFields'][$dependency]['typeDetail']['entity'];
                    } else {
                        $localBundle = $this->localConf['Bundle'];
                        $localEntity = $this->localConf['entity'];
                    }
                    $this->get('app.service.code_generator')
                        ->generateCode(
                            $objContainer,
                            $this->getLocalRepositoryService(),
                            ($settingBundle . ':' . $settingEntity),
                            ($localBundle . ':' . $localEntity),
                            (empty($setting['criteria']) ? array() : $setting['criteria'])
                        );
                }
            }

            // Persist object in database
            if ($hasFlush) {
                $this->flushEm();

                // If persisted in database with success and configure response is enabled, then set object to response
                if ($addToResponse && ($this->responseConf['status'] == 1) && ($this->responseConf['hasObject'])) {
                    $this->responseConf['object'] = $this->normalizeObject($object); // Object updated
                }
            }
        } /* else {
            $this->responseConf['status'] = 0;
            $this->responseConf['errors'] = $errors;
        }*/

        return $this;
    }

    /**
     * Get Surrounding Objects.
     * @param $object
     * @return null
     */
    protected function getSurroundingObjects($object) {
        if (isset($this->localConf['entityFields']['code'])) {
            $fieldMetadata = $this->localConf['entityFields']['code'];
            // Choice dependency (parent object)
            $dependency = (isset($fieldMetadata['dependency'])
                ? $fieldMetadata['dependency']
                : null
            );
            $entityClass = (($dependency && isset($this->localConf['entityFields'][$dependency]['typeDetail']) && isset($this->localConf['entityFields'][$dependency]['typeDetail']['entityClass']))
                ? $this->localConf['entityFields'][$dependency]['typeDetail']['entityClass']
                : $this->localConf['entityClass']
            );

            if (method_exists($entityClass, 'getCode')) {
                $setting = (empty($this->flags['setting']) ? array() : $this->flags['setting']);
                $settingBundle = (empty($setting['Bundle']) ? $this->localConf['Bundle'] : $setting['Bundle']);
                $settingEntity = (empty($setting['entity']) ? ($this->localConf['entity'] . 'Setting') : $setting['entity']);
                $localBundle = $localEntity = null;
                if ($dependency && isset($this->localConf['entityFields'][$dependency]['typeDetail'])) {
                    $localBundle = $this->localConf['entityFields'][$dependency]['typeDetail']['Bundle'];
                    $localEntity = $this->localConf['entityFields'][$dependency]['typeDetail']['entity'];
                } else {
                    $localBundle = $this->localConf['Bundle'];
                    $localEntity = $this->localConf['entity'];
                }

                return $this->get('app.service.code_generator')
                    ->getSurroundingObjects(
                        $object,
                        $this->getLocalRepositoryService(),
                        ($settingBundle . ':' . $settingEntity),
                        ($localBundle . ':' . $localEntity),
                        (empty($setting['criteria']) ? array() : $setting['criteria'])
                    );
            }
        }

        return null;
    }

    /**
     * Delete object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function deleteObject($object, $hasFlush = true)
    {
        return self::deleteObject_static($this, $object, $hasFlush);
    }
    /**
     * Delete object
     * Can be used for general objects
     * @param $controller
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    static protected function deleteObject_static($controller, $object, $hasFlush = true)
    {
        switch ($controller->flags['storage']) {
            case 'session':
                return $controller->deleteObjectFromSS($object->getId());
            default:
                return $controller->deleteObjectFromDb($object, $hasFlush);
        }
    }

    /**
     * Delete object from session storage
     * @param $objectId
     * @param $objectId
     * @return $this
     */
    protected function deleteObjectFromSS($objectId, $parentId = null)
    {
        $parentId = ($parentId ? $parentId :
            (isset($this->flags['parent']) ? $this->flags['parent'] : null)
        );

        // Delete object from session
        if (!empty($objectId)) {
            $this->container->get('app.service.session_storage')->delete($objectId, $parentId);
        }

        return $this;
    }

    /**
     * Delete object from database
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function deleteObjectFromDb($object, $hasFlush = true)
    {
        $entityManager = $this->getLocalEntityManager();

        // Check object in manager
        // (for app objects in local manager because multiple managers don't be able to handle the same entity)
        if ($this->localConf['checkObjectManager']) {
            if (!$entityManager->contains($object)) {
                $object = $entityManager->merge($object);
            }
        }

        // Delete object in Entity Manager
        $entityManager->remove($object);

        // Delete object in database
        if ($hasFlush) {
            $this->flushEm();
        }

        return $this;
    }

    /**
     * Flush Entity Manager (persists data to database)
     * @return $this
     */
    protected function flushEm()
    {
        try {
            $this->getLocalEntityManager()->flush();
        } catch (\Exception $e) {
            $this->handleDatabaseException($e);
        }

        return $this;
    }

    /**
     * Set default values to object
     * @param $object
     * @return mixed
     */
    protected function setObjectDefaultValues($object)
    {
        return self::setObjectDefaultValues_static($this, $object);
    }
    /**
     * Static signature
     * Can be used for general objects
     * @param $controller
     * @param $object
     * @return mixed
     */
    static protected function setObjectDefaultValues_static($controller, $object)
    {
        // Only set default values if is a new object (without id)
        if (empty($object->getId())) {
            // Set default data
            $object->setInsertTime(new \DateTime());
            $object->setInsertUser($controller->get('session')
                ->get('_app.user')['username']
            );

            if ($object->getIsEnabled() === null) {
                $object->setIsEnabled(true);
            }

            if (method_exists($object, 'setPriority') && ($object->getPriority() === null)) {
                $object->setPriority(0);
            }

            if (method_exists($object, 'setStoreObj') && $controller->flags['handleStore']) {
                $store = $controller->getStoreAttr('id');
                if ($store) {
                    $storeObj = $controller->getRepositoryService('Store', 'AdminBundle')
                        ->execute(
                            'findOneById',
                            array($store)
                        );
                    $object->setStoreObj($storeObj);
                }
            }
        }

        return $controller;
    }

    /**
     * Handle database exception
     * @param $exception
     * @return $this
     */
    protected function handleDatabaseException($exception)
    {
        // @TODO save error in database

        $this->responseConf['status'] = 0;

        // Errors reference: https://dev.mysql.com/doc/refman/5.5/en/error-messages-server.html
        // Determines message based in error code
        $errorCode = (method_exists($exception, 'getErrorCode')
            ? $exception->getErrorCode()
            : null
        );

        switch ($errorCode) {
            case 1048: // null (can occurs if the entity has "code" and it's not correctly defined)
                $message = 'Fail to persist object: Please fill all mandatory fields or check your settings.';
                break;
            case 1062: // Duplicate entry
                $message = 'Fail to persist object: Please check if object already exists.';
                break;
            case 1451: // Referenced row (foreign key constraint)
                $message = 'Fail to delete object: Please check if object is in use.</br>Consider disable it only.';
                break;
            default:
                $message = 'Fail to persist object.';
        }

        // Send details for sysadmin
        if ($this->get('security.authorization_checker')->isGranted('ROLE_SYSADMIN')) {
            $errorMessage = (method_exists($exception, 'getMessage')
                ? $exception->getMessage()
                : null
            );

            $message .= (
                "</br>Code: " . $errorCode
                . "</br>Detail: " . $errorMessage
            );
        }

        $this->addFlashMessage( // Flash messages to display to user
            $message,
            'Error',
            'error'
        );

        return $this;
    }

    /**
     * Handle Form Errors
     * @param $form
     * @return $this
     */
    protected function handleFormErrors($form) {
        $this->responseConf['status'] = 0;
        $this->responseConf['errors'] = array();
        $flashMessage = ''; // Flash message to display to user

        // Curiosity, you can use instead:
        //$flashMessage = (string) $form->getErrors();

        // General errors (are shown to used through the flash message)
        foreach($form->getErrors() as $error) {
            $errorMessage = $error->getMessage();
            $flashMessage .= ('- ' . $errorMessage . '<br/>');

            // @TODO translate messages
            // $this->container->get('translator')->trans($error->getMessage(), array(), 'validators');
        }

        // Field errors
        foreach($form->all() as $field => $formField) {
            foreach($formField->getErrors() as $error) {
                $this->responseConf['errors'][$field][] = $error->getMessage();

                // @TODO translate messages
                // $this->container->get('translator')->trans($error->getMessage(), array(), 'validators');
            }
        }

        // Set flash message
        if (empty($flashMessage)) {
            $flashMessage = 'Please check errors.';
        }
        $this->addFlashMessage(
            $flashMessage,
            'Fail to persist object',
            'error'
        );

        return $this;
    }

    /**
     * Save form
     * @param $form
     * @param $object
     * @param $hasValidation
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function saveForm($form, $object, $hasValidation = true, $hasFlush = true)
    {
        switch ($this->flags['storage']) {
            case 'session':
                return $this->saveFormToSS($object);
            default:
                return $this->saveFormToDb($form, $object, false, $hasFlush);
        }
    }

    /**
     * Save form to Session Storage
     * @param $object
     * @return $this
     */
    protected function saveFormToSS($object)
    {
        $this->saveObjectToSS($object, true);

        return $this;
    }

    /**
     * Save form
     * @param $form
     * @param $object
     * @param $hasValidation
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function saveFormToDb($form, $object, $hasValidation = true, $hasFlush = true)
    {
        // Check if form is valid
        if ($hasValidation && !$this->validateForm($form)) {
            return $this;
        }

        // Persist object in entity manager
        $this->saveObjectToDb($object, $hasFlush, true);

        // Success
        if (($this->responseConf['status'] == 1)
            && $object->getId() // Id needs to be defined,
            // otherwise the flush method was not called and the object has not yet persisted in database,
            // this procedure is used when we have many operations in the same "flush" (transaction)
        ) {
            // Update fields choices with self reference
            $this->responseConf['hasFieldsChoicesUpdate'] = true;

            // Flash messages to display to user
            $this->addFlashMessage(
                'The data has been updated',
                'Success',
                'success'
            );
        }

        return $this;
    }

    /**
     * Validate form
     * @param $form
     * @return bool
     */
    protected function validateForm($form) {
        if ($form->isValid()) {
            return true;
        }

        $this->handleFormErrors($form);
        return false;
    }

    /**
     * Validate object using validator
     * @param $object
     * @return array|null
     */
    protected function validateObject($object) {
        $validator = $this->get('validator');
        $validatorErrors = $validator->validate($object);
        $errors = null;

        if (count($validatorErrors) > 0) {
            $errors = array();
            foreach($validatorErrors as $validatorError) {
                $errors[$validatorError->getPropertyPath()][] = $validatorError->getMessage();
            }
        }

        return $errors;
    }

    /**
     * Get list/array of objects by search configuration
     * @return null
     */
    protected function getObjectsBySearch() {
        $options = $this->getSearch();

        if (!empty($options['limit'])) { // Pagination enabled
            $options['limit']++; // Used to control the pagination
        }

        // Try get from database
        $getFunction = $this->localConf['functions']['getObjects'];
        $objects = $this->getLocalRepositoryService()
            ->execute(
                $getFunction,
                array($options)
            );

        if (!empty($options['limit'])) { // Pagination enabled
            $this->templateConf['search']['hasMore'] = (count($objects) == $options['limit']);
            if ($this->templateConf['search']['hasMore']) {
                // Remove the last row, it's only to control the pagination
                array_pop($objects);
            }
        }

        // Tree view mode
        if (isset($this->templateConf['treeView'])
            && isset($this->flags['treeViewMode']) && $this->flags['treeViewMode']
        ) {
            return $this->normalizeTreeViewObjects($objects);
        }

        return $objects;
    }

    /**
     * Normalize tree view objects
     * @param $objects
     * @return array
     */
    protected function normalizeTreeViewObjects($objects)
    {
        // If parentField is nor defined, put all objects in level '0' to simulate a tree-view of one level
        // (it's used the tree-view template to show the objects)
        if (!isset($this->templateConf['treeView']['localParentField'])) {
            return ((is_array($objects) && (count($objects) > 0)) ? array(0 => $objects) : array());
        }

        $nodes = array();
        if (is_array($objects) && (count($objects) > 0)) {
            foreach ($objects as $obj) {
                $index = (empty($obj[$this->templateConf['treeView']['localParentField']])
                    ? 0 : $obj[$this->templateConf['treeView']['localParentField']]
                );
                $nodes[$index][] = $obj;
            }
        }

        return $nodes;
    }

    /**
     * Normalize object/array of objects
     * @param $object
     * @return mixed
     */
    protected function normalizeObject($object) {
        $normalizedObj = array();

        if ((!$object instanceof $this->localConf['entityClass']) || !is_array($this->localConf['entityFields'])) {
            return $normalizedObj;
        }

        foreach ($this->localConf['entityFields'] as $field => $metadata) {
            $normalizerConf = $this->getFieldMetadata($field, 'normalizer');

            // Exception for foreign fields merged is this entity/object,
            // whose data is in your parent entity/object (ie: client, supplier, etc.)
            $dependency = (isset($normalizerConf['dependency'])
                ? $normalizerConf['dependency'] // Specific dependency (used by UserGroupUser to get the correct name)
                : (isset($metadata['dependency']) // General dependency
                    ? $metadata['dependency']
                    : null
                )
            );
            $objContainer = ($dependency
                ? $this->getDependencyObjectContainer($object, $dependency)
                : $object
            );

            // Field name in database (index can be an alias, used in icon)
            $fieldName = $this->getFieldMetadata($field, 'field');
            $methodName = (isset($normalizerConf['method'])
                ? $normalizerConf['method'] // Specific method (used by UserGroupUser to get the correct name)
                : ('get' . ucfirst($fieldName)) // General method
            );

            // If method doesn't exists, the field it's a foreign field and should be ignored
            if(!method_exists($objContainer, $methodName)) {
                // $normalizedObj[$field] = null; // It could be used to avoid undefined field...
                continue;
            }

            $type = $this->getFieldMetadata($field, 'type');
            $renderType = $this->getFieldMetadata($field, 'type', 'form'); // Starts to render based in form type
            if ($renderType == 'none') {
                if (in_array($fieldName, array(
                    'id', // 'id' is mandatory to handle objects
                    'priority' // 'priority' is mandatory to order objects
                ))) {
                    $renderType = 'number';
                } else {
                    // If form type is "disabled", render is based in view type
                    $renderType = $this->getFieldMetadata($field, 'type', 'view');
                }
            }
            $normalizedValue = null;

            // Exception for object
            if ($type == 'object') {
                if ($renderType == 'array') {
                    $normalizedValue = $objContainer->normalizeArrayCollection($objContainer->$methodName());
                } else {
                    // Set id as value of object type (necessary in form to select the correct choice)
                    $fkObj = $objContainer->$methodName();
                    $normalizedValue = ($fkObj ? $fkObj->getId() : null);
                }
            } else {
                switch ($renderType) {
                    case 'datetime':
                        $normalizedValue = $objContainer->normalizeDateTime($objContainer->$methodName());
                        break;
                    case 'date':
                        $normalizedValue = $objContainer->normalizeDate($objContainer->$methodName());
                        break;
                    case 'none':
                        continue 2;
                        break;
                    case 'password':
                        $normalizedValue = $objContainer->normalizePassword($objContainer->$methodName());
                        break;
                    default:
                        $normalizedValue = $objContainer->$methodName();
                }
            }

            $normalizedObj[$field] = $normalizedValue;
        }

        return $normalizedObj;
    }

    /**
     * Normalize Foreign Object
     * @param $object
     * @param $entity (Uppercase)
     * @param $bundle (Uppercase)
     * @return mixed
     */
    protected function normalizeForeignObject($object, $entity, $bundle)
    {
        // Save local entity conf to be replaced after get all objects
        $localEntityClass = $this->localConf['entityClass'];
        $localEntityFields = $this->localConf['entityFields'];

        // Set foreign object configuration
        $this->localConf['entityClass'] = ($bundle.'Bundle\Entity\\'.$entity);
        $this->localConf['entityFields'] =
            $this->getRepositoryService($entity, $bundle.'Bundle')->execute('getMetadata');

        $normalizedObj = $this->normalizeObject($object);

        $this->localConf['entityClass'] = $localEntityClass;
        $this->localConf['entityFields'] = $localEntityFields;

        return $normalizedObj;
    }

    /**
     * Get Session Storage Child Objects
     * @param $parentId
     * @param null $childKey
     * @param $hasNormalization
     * @return array|mixed
     */
    public function getChildObjectsFromSS($parentId = null, $childKey = null, $hasNormalization = false)
    {
        $parentId = ($parentId ? $parentId :
            (isset($this->flags['parent']) ? $this->flags['parent'] : null)
        );

        $childObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $parentId,
            $childKey
        );

        if ($hasNormalization) {
            $childObjectsNormalized = array();
            foreach ($childObjects as $childObj) {
                $childObj = $this->getObjectFromSS($childObj->getId()); // Update object getting all foreign objects yet
                // @TODO: you need to call normalizeForeignObject and pass all objects to avoid reset the conf for each object
                $childObjectsNormalized[] = $this->normalizeObject($childObj);
            }
            return $childObjectsNormalized;
        }

        return $childObjects;
    }

    /**
     * Get Dependency Object Container
     * Used to determines the object container of foreign fields merged is the entity/object,
     * whose data is in your parent entity/object (ie: client, supplier, etc.)
     * @param $object
     * @param $dependency
     * @return mixed
     */
    protected function getDependencyObjectContainer($object, $dependency) {
        $objContainer = $object;

        // Get dependencies recursively
        $dependencyArr = array();
        while ($dependency) {
            array_unshift($dependencyArr, $this->getFieldMetadata($dependency, 'field'));
            $dependency = (empty($this->localConf['entityFields'][$dependency]['dependency'])
                ? false
                : $this->localConf['entityFields'][$dependency]['dependency']
            );
        }

        // Get field value recursively
        foreach($dependencyArr as $dependency) {
            $methodName = ('get' . ucfirst($dependency));
            if (method_exists($objContainer, $methodName)) {
                $objContainer = $objContainer->$methodName();
            }
        }

        return $objContainer;
    }

    /**
     * Get object
     * @param $id
     * @return object
     */
    protected function getObject($id = null)
    {
        $obj = null;

        if(!empty($id)) {
            // Default storage
            if ($this->flags['storage'] == 'db') {
                $obj = $this->getObjectFromDb($id);
                if ($obj) {
                    return $obj;
                }
            }

            // Alternative storage ('session')
            $obj = $this->getObjectFromSS($id);
            if ($obj) {
                $this->flags['storage'] = 'session';
                return $obj;
            }
        }

        // New object
        return $this->newObject();
    }

    /**
     * Get object from Session Storage
     * @param $id
     * @return object
     */
    protected function getObjectFromSS($id)
    {
        if(empty($id)) {
            return null;
        }
        return $this->container->get('app.service.session_storage')->get($id);
    }

    /**
     * Get object from database
     * @param $id
     * @return object
     */
    protected function getObjectFromDb($id)
    {
        if(empty($id)) {
            return null;
        }
        return $this->getLocalRepositoryService()->execute('findOneById', array($id));
    }

    /**
     * Get fields choices
     * @param $hasSelfReferenceOnly (if enabled, define choices only for fields with self reference enabled)
     * @return array
     */
    protected function getFieldsChoices($hasSelfReferenceOnly = false)
    {
        $candidateFieldsChoices = $this->templateConf['fields']['choices'];
        $fieldsChoices = array();

        if (is_array($candidateFieldsChoices) && (count($candidateFieldsChoices) > 0)) {
            foreach ($candidateFieldsChoices as $candidateField => $candidateFieldChoices) {
                if (!$hasSelfReferenceOnly || ($hasSelfReferenceOnly && $candidateFieldChoices['hasSelfReference'])) {
                    if ($candidateFieldChoices['type'] == 'object') {
                        $fieldsChoices[$candidateField]['value'] = $this->getFieldChoicesFromDb($candidateField);
                    } else {
                        // Enum
                        $fieldsChoices[$candidateField]['value'] = array();

                        if (is_array($candidateFieldChoices['value']) && (count($candidateFieldChoices['value']) > 0)) {
                            foreach ($candidateFieldChoices['value'] as $label => $id) {
                                $fieldsChoices[$candidateField]['value'][] = array('id' => $id, 'label' => $label);
                            }
                        }
                    }
                    unset($fieldsChoices[$candidateField]['query']); // This information shouldn't be in template
                }
            }
        }

        return $fieldsChoices;
    }

    /**
     * Get field choices from database
     * @param $field
     * @return array
     */
    protected function getFieldChoicesFromDb($field)
    {
        $choices = array();

        // Query to get choices in repository
        $query = $this->getFieldMetadata($field, 'query'); // Specific defined in metadata
        if (empty($query)) { $query = 'getChoices'; } // Default

        $entity = $this->getFieldMetadata($field, 'entity');
        $Bundle = $this->getFieldMetadata($field, 'Bundle');
        $formType = $this->getFieldMetadata($field, 'type', 'form');

        $objects = $this->getLocalRepositoryService()
            // Repository needs to be redefined to the field entity repository,
            // however local repository service is used to use the local entity manager
            // (local database is injected in the constructor of the repository service)
            ->setEntityRepository($Bundle . ':' . $entity)
            ->execute($query);

        // Normalize choices
        if (is_array($objects) && (count($objects ) > 0)) {
            switch ($formType) {
                case 'tree-view':
                    // Order nodes in array by parent node, using the parent id as index (0 for root nodes)
                    // It needs that the parameter "field" has been configured into the parameter "object"
                    $nodes = array();
                    $getMethod = ('get'.ucfirst($field));

                    foreach ($objects as $object) {
                        $parentId = ($object->$getMethod() ? $object->$getMethod()->getId() : null);
                        $index = (empty($parentId) ? 0 : $parentId);
                        $nodes[$index][] = array('id' => $object->getId(), $field => $parentId, 'label' => $object->__toString());
                    }

                    // Order nodes in array by level dependency, immediately bellow your parent node
                    $choices = array();
                    $getRecursiveNodes = function ($index, $levelPrefix, $ascendantNodes) use (&$getRecursiveNodes, &$nodes, &$choices) {
                        if (!empty($nodes[$index]) && is_array($nodes[$index])) {
                            foreach ($nodes[$index] as $node) {
                                // Send the name whit the prefix based on the level
                                $node['label'] = ($levelPrefix . $node['label']);

                                // Array of ascendant nodes
                                $localAscendantNodes = $ascendantNodes;
                                $localAscendantNodes[$node['id']] = $node['id'];
                                $node['ascendantNodes'] = $localAscendantNodes;

                                $choices[] = $node;
                                $getRecursiveNodes($node['id'], $levelPrefix . '. ', $localAscendantNodes);
                            }
                        }
                    };
                    $getRecursiveNodes(0, '', array());
                    break;
                default:
                    foreach ($objects as $object) {
                        $choices[] = array('id' => $object->getId(), 'label' => $object->__toString());
                    }
            }
        }

        return $choices;
    }

    /**
     * Get array from field
     * @param $field
     * @param array $options (array with 'criteria', 'orderBy', 'limit' and 'offset')
     * @return array
     */
    protected function getArrayFromField($field, $options = array())
    {
        $options['fields'] = array($field);

        // Merge with local conf search, there are mandatory parameters
        if (isset($this->localConf['search']) && isset($this->localConf['search']['criteria'])) {
            $options['criteria'] = array_merge(
                (isset($options['criteria']) ? $options['criteria'] : array()),
                $this->localConf['search']['criteria']
            );
        }

        $fieldValuesArray = $this->getLocalRepositoryService()
            ->execute(
                'queryBuilder',
                array(
                    $options
                )
            );

        return (is_array($fieldValuesArray) && (count($fieldValuesArray) > 0))
            ? array_column($fieldValuesArray, $field)
            : array();
    }

    /**
     * Get repository service
     * @param null $entity
     * @param null $Bundle (CamelCase with "Bundle" prefix at the end)
     * @return mixed
     */
    protected function getRepositoryService($entity, $Bundle)
    {
        return $this->get(HelperService::camelCaseToSnakeCase(substr($Bundle, 0, -6)).'.service.repository')
            ->setEntityRepository($Bundle.':'.$entity);
    }

    /**
     * Get local/own repository service.
     * Alias to "getLocalRepositoryService"
     * @return mixed
     */
    protected function getLocalRepositoryService()
    {
        $entity = $this->localConf['entity'];
        $Bundle = $this->localConf['Bundle'];

        return $this->getRepositoryService($entity, $Bundle);
    }

    /**
     * Get Entity Manager
     * @return mixed
     */
    protected function getLocalEntityManager()
    {
        return $this->getDoctrine()
            ->getManager($this->localConf['entityDataBase']);
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $class = $this->localConf['entityClass'];
        $obj = new $class();

        $entityMetadata = $this->localConf['entityFields'];

        // Create "embed" children
        if (is_array($entityMetadata)) {
            foreach ($entityMetadata as $fieldName => $fieldMetadata) {
                if (isset($fieldMetadata['typeDetail'])
                    && isset($fieldMetadata['typeDetail']['metadata'])
                    && isset($fieldMetadata['typeDetail']['metadata']['persist'])
                    && $fieldMetadata['typeDetail']['metadata']['persist'] // true
                ) {
                    $entityFieldName = $this->getFieldMetadata($fieldName , 'field');
                    $class = ($fieldMetadata['typeDetail']['entityClass']);
                    $childObj = new $class();
                    // Use static method to avoid to call specific redefined method in child
                    self::setObjectDefaultValues_static($this, $childObj);
                    $setMethod = 'set' . ucfirst($entityFieldName);
                    $obj->$setMethod($childObj);
                }
            }
        }

        // Set default values
        $this->setObjectDefaultValues($obj);

        return $obj;
    }

    /**
     * Set search according to a regular array
     * @param $search
     * @return $this
     */
    protected function setSearch($search)
    {
        // Normalize search parameter
        $currentSearch = $this->templateConf['search'];
        $search = is_array($search) ? $search : array();

        // Make always multiples of default 'limit'
        if ($currentSearch['limit']) {
            $search['limit'] = (empty($search['offset'])
                ? $currentSearch['limit']
                : ($currentSearch['limit'] - ($search['offset'] % $currentSearch['limit']))
            );
            if ($search['limit'] < $currentSearch['limit']) {
                // For best user experience and server request optimization, if the limit is small, increase it
                $search['limit'] += $currentSearch['limit'];
            }
        } else {
            // Pagination not allowed, restore defaults (when merge with current conf)
            unset($search['limit'], $search['offset']);
        }

        // Restore defaults (when merge with current conf, doesn't allowed modifications)
        unset($search['hasMore']);

        $this->templateConf['search'] = array_merge($currentSearch, $search);

        return $this;
    }

    /**
     * Get search (merge template search conf with local search conf and some mandatory options)
     * @return mixed
     */
    protected function getSearch()
    {
        // Template is a default search
        $search = $this->templateConf['search'];
        $mandatorySearch = $this->localConf['search']; // Contents mandatory parameter to search independent of user preferences
        $legendFields = array_column($this->templateConf['controls']['legend'], 'field'); // Mandatory to display legends

        // Merge search, with mandatory (array_unique remove duplication to avoid errors in database)
        $search['fields'] = array_unique(array_merge($search['fields'], $mandatorySearch['fields'], $legendFields));
        $search['criteria'] = array_merge($search['criteria'], $mandatorySearch['criteria']);
        // Merge conf local data
        $mandatoryConfLocalData = ((isset($mandatorySearch['conf']) && isset($mandatorySearch['conf']['localData'])) ?
            $mandatorySearch['conf']['localData'] :
            null
        );
        if ($mandatoryConfLocalData) {
            $confLocalData = ((isset($search['conf']) && isset($search['conf']['localData'])) ?
                $search['conf']['localData'] :
                null
            );

            if (!isset($search['conf'])) {
                $search['conf'] = array();
            }
            $search['conf']['localData'] = array_merge(
                ($confLocalData ? $confLocalData : array()),
                $mandatoryConfLocalData
            );
        }

        // 'id' is mandatory to handle objects
        if (!in_array('id', $search['fields'])) {
            $search['fields'][] = 'id';
        }

        // 'priority' is mandatory to handle with order in actions feature
        if (isset($this->localConf['entityFields']['priority'])
            && !in_array('priority', $search['fields'])
        ) {
            $search['fields'][] = 'priority';
        }

        // 'isEnabled' is mandatory to handle with "disabled" class in template/view
        if (isset($this->localConf['entityFields']['isEnabled'])
            && !in_array('isEnabled', $search['fields'])
        ) {
            $search['fields'][] = 'isEnabled';
        }

        // 'storeObj' is mandatory to handle with code in view (to show the correct color)
        if (isset($this->localConf['entityFields']['code'])
            && isset($this->localConf['entityFields']['storeObj'])
            && !in_array('storeObj', $search['fields'])
        ) {
            $search['fields'][] = 'storeObj';
        }

        return $search;
    }

    /**
     * Get request data
     * @param Request $request
     * @param bool $checkCsrfToken
     * @param bool $hasSearch
     * @return mixed
     */
    protected function getAndProcessRequestData(Request $request, $checkCsrfToken = true, $hasSearch = true)
    {
        $data = parent::getAndProcessRequestData($request, $checkCsrfToken);

        // Process search
        if ($hasSearch && !empty($data['search'])) {
            // Normalize search array
            if (is_array($data['search'])) {
                $this->setSearch($data['search']);
            } else {
                $this->setSearch(json_decode($data['search'], true));
            }
            unset($data['search']);
        }

        return $data;
    }

    /**
     * Normalize and get the response for user
     * @param bool $isJson (is a json response)
     * @param array $extraData (extra data to merge into response)
     * @param $hasSymfonyResponse (wrap the response in a Symfony response)
     * @return array
     */
    protected function getResponse($isJson = false, $extraData = array(), $hasSymfonyResponse = true)
    {
        $data = array();

        // Add objects
        if ($this->responseConf['hasObjects']) {
            // Note: Comparison needs to be "===", otherwise empty array is wrongly considered
            $data['objects'] = (($this->responseConf['objects'] === null)
                ? $this->getObjectsBySearch()
                : $this->responseConf['objects']
            );

            // Add mandatory conf if is not configured to send
            if (!$this->responseConf['hasConf']) {
                $data['search']['hasMore'] = $this->templateConf['search']['hasMore'];
            }
        }
        
        // Add object
        if ($this->responseConf['hasObject'] && $this->responseConf['object']) {
            $data['object'] = $this->responseConf['object'];
            // Set session storage object flag to be handled by template
            if ($this->responseConf['addObjectSessionStorageFlag'] && ($this->flags['storage'] == 'session')) {
                $data['object']['_isSessionStorage'] = true;
            }
        }

        // Update mandatory conf
        if ($this->responseConf['hasConf']) {
            // Set field choices (usually added in 'conf' and 'data' actions)
            $this->templateConf['fields']['choices'] = $this->getFieldsChoices();
        } else {
            // Add mandatory conf if is not configured to send
            if ($this->responseConf['hasFieldsChoicesUpdate']) {
                // Update fields choices with self reference (generally used in 'edit' and 'delete' actions)
                $data['fields']['choices'] = $this->getFieldsChoices(true);
            }
        }

        return parent::getResponse($isJson, array_merge($data, $extraData), $hasSymfonyResponse);
    }

    /**
     * Get field metadata. Simplify the call get field metadata to entity.
     * @param $field
     * @param $attribute
     * @param $context ('view'|'form'|'none')
     * @return mixed
     */
    protected function getFieldMetadata($field, $attribute, $context = 'none')
    {
        switch ($attribute) {
            case 'table':
                return $this->getLocalRepositoryService()
                    ->execute('getFieldTable', array($field));
            default:
                return $this->getLocalRepositoryService()
                    ->execute('getFieldMetadata', array($field, $attribute, $this->localConf['entityFields'], $context));
        }
    }

    /**
     * Get Object Form Context
     * @param $object
     * @return string
     */
    protected function getObjectFormContext($object)
    {
        $id = $object->getId();
        return ((empty($id) || ($this->flags['storage'] == 'session')) ? 'add' : 'edit');
    }


    ////////
    // Events/Callbacks
    ////////////////////////////////

    /**
     * Pre (before) save object event. Use this function to handle event.
     * @param $object
     * @param $data (usually the form data)
     * @return boolean (true to continue, false to abort)
     */
    protected function preSaveObject(&$object, $data) {
        return true;
    }

    /**
     * Post (after) save object event. Use this function to handle event.
     * @param $object
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null) {
        return $this;
    }

    /**
     * Pre (before) delete object event. Use this function to handle event.
     * @param $object
     * @param $context (context to help to determine actions)
     * @return boolean (true to continue, false to abort)
     */
    protected function preDeleteObject($object, $context = null) {
        return true;
    }

    /**
     * Post (after) delete object event. Use this function to handle event.
     * @param $object
     * @param $context (context to help to determine actions)
     * @return $this
     */
    protected function postDeleteObject($object, $context = null) {
        return $this;
    }

    /**
     * Pre (before) cancel object event. Use this function to handle event.
     * @param $object
     * @return boolean (true to continue, false to abort)
     */
    protected function preCancelObject($object) {
        return true;
    }

    /**
     * Post (after) cancel object event. Use this function to handle event.
     * @param $object
     * @return $this
     */
    protected function postCancelObject($object) {
        return $this;
    }
}
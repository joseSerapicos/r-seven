<?php

namespace Bck\AdminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Bck\EntitiesBundle\Entity\Entity;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends BaseEntityController
{
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

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__admin__user__get'
            ),
            'edit' => array(
                'name' => '_bck__admin__user__edit'
            ),
            'delete' => array(
                'name' => '_bck__admin__user__delete'
            ),
            'detail' => array(
                'name' => '_bck__admin__user__detail'
            ),
            'choices' => array(
                'name' => '_bck__admin__user__choices'
            )
        );

        // Fields (set correct fields before process them by the parent init)
        $this->localConf['entityFields'] = $this->getRepositoryService('User', 'LoginBundle', '')->execute('getMetadata');
        // Only admins can see role
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        if (!$isAdmin) {
            unset($this->localConf['entityFields']['role']);
            $this->localConf['formTypeClass'] = '\LoginBundle\Form\UserNoAdminType';
        }


        // Overrides entity
        $this->localConf['BundlePrefix'] = '';
        $this->localConf['Bundle'] = 'LoginBundle';

        parent::init($request);
        $this->localConf['templatesPath'] = ('BckAdminBundle:'.$this->localConf['entity'].':');

        // Local Search
        // Remove Sysadmin and customers from results
        $this->localConf['search']['criteria'][] = array(
            'field' => 'role',
            'expr' => 'in',
            'value' => array('ROLE_ADMIN', 'ROLE_USER')
        );
        // Remove the logged user (logged user can not manager herself, like delete his own account,
        // if he is the unique admin, the application would be stay without admin accounts, and this can not be happen)
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $this->localConf['search']['criteria'][] = array(
            'field' => 'id',
            'expr' => 'neq',
            'value' => $loggedUserId
        );

        // Template Search
        $this->templateConf['search']['fields'] =
            array('id', 'avatar', 'name', 'surname', 'username', 'isEnabled');
        if ($isAdmin) {
            $this->templateConf['search']['fields'][] = 'role';
        }

        // Access control list (only admin can remove users, because users can belongs to multiple stores,
        // and other users can not realize that)
        $this->templateConf['acl']['delete'] = $isAdmin;

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'delete' => $this->templateConf['acl']['delete'],
                'detail' => true,
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/bck/admin/user",
     *     name="_bck__admin__user__index"
     * )
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);
    }

    /**
     * @Route("/bck/admin/user/profile",
     *     name="_bck__admin__user__profile"
     * )
     *
     * Overrides the parent method
     * @param Request $request
     * @return mixed
     */
    public function profileAction(Request $request)
    {
        return parent::profileAction($request);
    }

    /**
     * @Route("/bck/admin/user/detail/{id}",
     *     name="_bck__admin__user__detail",
     *     defaults={"id" = null},
     * )
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }
    
    /**
     * @Route("/bck/admin/user/get/{id}",
     *     name="_bck__admin__user__get",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/bck/admin/user/choices/{noAdmin}",
     *     name="_bck__admin__user__choices",
     *     defaults={"noAdmin" = null},
     * )
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @param $noAdmin (determine if admins are included in response)
     * @return mixed
     */
    public function choicesLocalAction(Request $request, $noAdmin)
    {
        // Set configuration
        $this->init($request);

        // Exclude admin from results
        if ($noAdmin) {
            $this->localConf['search']['criteria'][] = array(
                'field' => 'role',
                'expr' => 'neq',
                'value' => 'ROLE_ADMIN'
            );
        }

        return parent::choicesAction($request);
    }

    /**
     * @Route("/bck/admin/user/edit-password/{id}",
     *     name="_bck__admin__user__edit_password"
     * )
     *
     * Action to define password using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editPasswordAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Keep only the password field
        $this->templateConf['fields']['form'] = array('password');
        $this->localConf['formTypeClass'] = '\LoginBundle\Form\UserPasswordType';
        $this->localConf['templates']['edit'] = 'AppBundle:form:form.html.twig';

        return $this->editAction($request, $id);
    }

    /**
     * @Route("/bck/admin/user/edit/{id}",
     *     name="_bck__admin__user__edit",
     *     defaults={"id" = null},
     * )
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

        // Add mode
        if ($id === null) {
            // Unset password field.
            if(($key = array_search('password', $this->templateConf['fields']['form'])) !== false) {
                unset($this->templateConf['fields']['form'][$key]);
            }
            $this->localConf['form']['buttons'] = 'wizard';
            $this->localConf['formTypeClass'] = str_replace('User', 'UserAdd', $this->localConf['formTypeClass']);
        }

        // Get object
        $obj = $this->getObject($id);
        $obj_role = $obj->getRole(); // Save current role

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if($form->isValid()) {
                // Save entity in database
                $entityObj = $obj->getEntityObj();
                parent::setObjectDefaultValues($entityObj);

                // Check user and role, the user can't change your own role
                $session = $this->get('session');
                $loggedUser_id = $session->get('_app.user')['id'];
                if ($loggedUser_id == $obj->getId()) { // Check for denied updates
                    if ($obj_role != $obj->getRole()) { // Cannot change your own role
                        $obj->setRole($obj_role);
                        // Warn user about
                        $this->addFlashMessage(
                            'Role cannot be set!<br/>If you want to change your role<br/>please sign in with another user.',
                            'Warning',
                            'warning'
                        );
                    }
                    if (!$obj->getIsEnabled()) { // Cannot disable your own account
                        $obj->setIsEnabled(true);
                        // Warn user about
                        $this->addFlashMessage(
                            'Account not disabled!<br/>If you want to disable your account<br/>please sign in with another user.',
                            'Warning',
                            'warning'
                        );
                    }
                }
            }

            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Add mode
        if ($id === null) {
            // Set password to be rendered by Angular form
            $this->templateConf['fields']['form'][] = 'password';
            // Render form
            return $this->render('AppBundle:wizard:form-popup.html.twig', array(
                '_conf' => $this->templateConf,
                '_form' => $form->createView(),
                '_containers' => array(
                    array(
                        'label' => 'Basic info',
                    ),
                    array(
                        'label' => 'Password',
                    )
                )
            ));
        }

        // Edit
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/admin/user/delete/{id}",
     *     name="_bck__admin__user__delete",
     *     defaults={"id" = null},
     * )
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }

    /**
     * @Route("/bck/admin/user/conf/{id}",
     *     name="_bck__admin__user__conf",
     *     defaults={"id" = null}
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        return parent::confAction($request, $id);
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        // Set role if user is not admin
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        if (!$isAdmin) {
            $obj->setRole('ROLE_USER');
        }

        $entityObj = $obj->getEntityObj();
        // Set an code (is not used, but can't be null...)
        $entityObj->setCodePrefix('user-');
        $entityObj->setCodeNumber(uniqid());

        return $obj;
    }

    /**
     * Get object
     * @param $id
     * @param $storage (can be 'db' or 'session')
     * @return object
     */
    protected function getObject($id = null, $storage = 'db')
    {
        $obj = parent::getObject($id, $storage);

        // Set password encoder to encode password
        return $obj->setPasswordEncoder($this->container->get('security.password_encoder'));
    }

    /**
     * Get list/array of objects by search configuration and limit it according the logged user role (only admin can see admins)
     * @param null $options (array with 'fields', 'criteria', 'orderBy', 'limit' and 'offset')
     * @return null
     */
    protected function getObjectsBySearch($options = null) {
        // Only admins can see admins, so users can't edit admins even if they are access to this menu.
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        if (!$isAdmin) {
            $this->localConf['search']['criteria'][] = array(
                'field' => 'role',
                'expr' => 'neq',
                'value' => 'ROLE_ADMIN'
            );
        }

        return parent::getObjectsBySearch($options);
    }

    /**
     * Overrides parent method
     * @return mixed
     */
    protected function getSearch()
    {
        $this->templateConf['search'] = $this->boostCriteriaByName($this->templateConf['search']);
        return parent::getSearch();
    }

    /**
     * Boost criteria by name. To improve the search results by "name"
     * @param $search
     * @return mixed
     */
    private function boostCriteriaByName($search) {
        if (isset($search['criteria']) && is_array($search['criteria'])) {
            // Search criteria for 'name' to change it.
            $criteriaIndex = null;
            foreach ($search['criteria'] as $tmpCriteriaIndex => $criteria) {
                if ($criteria['field'] == 'name') {
                    $criteriaIndex = $tmpCriteriaIndex;
                    break;
                }
            }

            // If criteria for "name" is found, change it.
            if ($criteriaIndex !== null) {
                // Search in name and surname
                // SELECT * FROM `entity` WHERE CONCAT(entity.name, ' ', entity.surname) like '%name surname%'
                $search['criteria'][$criteriaIndex]['field'] = "CONCAT(entity.name, ' ', entity.surname)";
                $search['criteria'][] = array( // Crosses
                    'field' => 'legalName',
                    'method' => 'or',
                    'expr' => $search['criteria'][$criteriaIndex]['expr'],
                    'value' => $search['criteria'][$criteriaIndex]['value']
                );
            }
        }

        return $search;
    }
}
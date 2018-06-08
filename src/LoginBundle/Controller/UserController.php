<?php

namespace LoginBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use AppBundle\Service\HelperService;
use LoginBundle\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Password'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'entity' => array('route' => '_bck__entities__entity__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'edit' => array(
                'name' => '_login__user__edit'
            ),
            'edit-password' => array(
                'name' => '_login__user__edit_password'
            ),
            'edit-login' => array(
                'name' => '_login__user__edit_login'
            )
        );

        parent::init($request, $parents);

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/login/user/edit-password/{entity}/{id}",
     *     name="_login__user__edit_password",
     *     defaults={"id" = null}
     * )
     *
     * Action to define password using the form
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function editPasswordAction(Request $request, $entity, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, array($entity));

        // Keep only the password field
        $this->templateConf['fields']['form'] = array('password');
        $this->localConf['formTypeClass'] = '\LoginBundle\Form\UserPasswordType';
        $this->localConf['templates']['edit'] = 'AppBundle:form:form.html.twig';

        return $this->editLocalChildAction($request, $entity, $id);
    }

    /**
     * @Route("/login/user/edit-login/{entity}/{id}",
     *     name="_login__user__edit_login",
     *     defaults={"id" = null}
     * )
     *
     * Action to define login using the form
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function editLoginAction(Request $request, $entity, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, array($entity));

        // Keep only the password field
        $this->templateConf['fields']['form'] = array('username', 'password', 'isSent');
        $this->localConf['formTypeClass'] = '\LoginBundle\Form\UserLoginFlatFormType';
        $this->localConf['templates']['edit'] = 'AppBundle:form:form.html.twig';

        return $this->editLocalChildAction($request, $entity, $id);
    }

    /**
     * @Route("/login/user/edit/{entity}/{id}",
     *     name="_login__user__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $entity, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, array($entity));

        // Get object
        $obj = $this->getObject($id, $entity);
        $obj_role = $obj->getRole(); // Save current role

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted() && $form->isValid()) {
            $data = $this->getRequestData($request);
            $data = $data['form'];

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

            // Set password info to be sent by email
            if (isset($data['password'])) {
                $session->set('_tmp.password', array($obj->getUsername() => $data['password']));
                $obj->setIsSent(false);
            }

            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Edit
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/login/user/conf/{entity}/{id}",
     *     name="_login__user__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $entity, $id = null)
    {
        // Set configuration
        $this->init($request, array($entity));

        // In this case, the object is get by the entity,
        // and the id parameter is used has boolean to determines if the object should be returned with the conf or not
        if (!empty($id)) {
            $obj = $this->getObject(null, $entity);
            $this->responseConf['hasObject'] = true;
            $this->responseConf['object'] = $this->normalizeObject($obj);
        }

        return parent::confChildAction($request, array($entity), null);
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();
        return $this->newObject_static($this, $obj);
    }

    /**
     * New object (static)
     * @param $controller (to access all methods that uses service container)
     * @param $object (pre created object)
     * @return object
     */
    protected function newObject_static($controller, $object)
    {
        // Get email to use as username
        $entityObj = $object->getEntityObj();
        $defaultUsername = $controller->getRepositoryService('EntityEmail', 'EntitiesBundle', 'Bck')
            ->execute(
                'getDefaultEmailByEntity',
                array($entityObj->getId(), true)
            );
        if (empty($defaultUsername)) {
            // Use the code to make the username unique
            $defaultUsername = $entityObj->getCode();
        }
        $object->setUsername($defaultUsername);

        $object->setRole('ROLE_CUSTOMER');
        $object->setIsSent(false);

        // @TODO: Set system language as default language
        //$appLanguageObj = $this->get('session')->get('_app.system.language');
        //$object->setAppLanguageObj($appLanguageObj);

        return $object->setPasswordEncoder($controller->container->get('security.password_encoder'));
    }

    /**
     * Get object
     * @param $id
     * @param $entity (get object from entity)
     * @return object
     */
    protected function getObject($id = null, $entity = null)
    {
        $obj = null;

        if ($id) {
            $obj = parent::getObject($id);
        }
        else if ($entity) {
            $obj = $this->getLocalRepositoryService()->execute('findOneByEntityObj', array($entity));
        }

        if (!$obj) {
            // New object
            return $this->newObject();
        }

        // Set password encoder to encode password
        return $obj->setPasswordEncoder($this->container->get('security.password_encoder'));
    }

    /**
     * Create default user
     * @param $controller (to access all methods that uses service container)
     * @param $entityObj
     * @param $defaultUsername
     * @return mixed
     * @throws \Exception
     */
    public function createDefaultUser($controller, $entityObj, $defaultUsername = null)
    {
        $obj = new User();
        parent::setObjectDefaultValues_static($controller, $obj);
        $obj->setEntityObj($entityObj);
        $obj = $this->newObject_static($controller, $obj);

        if (!empty($defaultUsername)) {
            $obj->setUsername($defaultUsername);
        }

        $password = HelperService::generateRandomString();
        $obj->setPassword($password);

        // In case of user has not defined yet in the session, set the user itself as insert user
        if (empty($obj->getInsertUser())) {
            $obj->setInsertUser($obj->getUsername());
        }

        parent::saveObject_static($controller, $obj);

        // Check if there are some error on save the user
        if ($this->responseConf['status'] == 0) {
            throw new \Exception('Error on process request. Please contact the support center.');
        }

        return $obj;
    }
}
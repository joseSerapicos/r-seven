<?php

namespace Frt\CommonBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use AppBundle\Service\HelperService;
use LoginBundle\Controller\UserController;
use LoginBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class FrtHashResourceController extends BaseEntityController
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

        // This entity is handled by internal processes

        parent::init($request);

        return $this;
    }

    /**
     * @Route("/common/frt-hash-resource/process/{system}/{store}/{hash}",
     *     name="_common__frt_hash_resource__process"
     * )
     *
     * Process action (action to process the payment)
     * @param Request $request
     * @param $system (id of system to connect to correct database)
     * @param $store (id of store to use)
     * @param $hash
     * @return mixed
     * @throws \Exception
     */
    public function processAction(Request $request, $system, $store, $hash)
    {
        if (!$system || !$store || !$hash) {
            throw new \Exception('Invalid request parameters.');
        }

        $session = $this->get('session');
        $session->set('_app.context', 'FRT');
        $session->set('_app.isBckContext', false);
        $session->set('_app.frtContext', 'EMBED'); // Mark front-office context as 'EMBED' in session

        $this->get('app.service.frt')->loadSystem($system, $store);

        // Set configuration
        $this->init($request);

        // Get object
        $obj = $this->getLocalRepositoryService()->execute('findOneByHash', array($hash));
        if (!$obj) {
            throw new \Exception('No request information can be found in the system.');
        }

        $clientObj = $obj->getClientObj();
        $entityObj = $clientObj->getEntityObj();

        // Get user email
        $email = $this->getRepositoryService('EntityEmail', 'EntitiesBundle', 'Bck')
            ->execute(
                'getDefaultEmailByEntity',
                array($entityObj->getId(), true)
            );

        // Load user
        // Try to get the user form users if defined
        $userObj = $this->getRepositoryService('User', 'LoginBundle', '')
            ->execute(
                'findOneByEntityObj',
                array(
                    $entityObj
                )
            );
        if (!$userObj) {
            // Create a new userObj to simulate an user, so we don't need a pre inserted user in the database.
            // Save user to avoid always create a new user!
            $defaultUsername = (empty($email) ? $clientObj->getCode() : $email);
            $userController = $this->get('login.controller.user');
            $userController->setContainer($this->container);
            $userObj = $userController->createDefaultUser($this, $entityObj, $defaultUsername);
        }

        $userAvatar = $entityObj->getAvatar();
        if ($userAvatar) {
            $userAvatar = $entityObj->normalizeUrl($userAvatar);
        }

        // @TODO: set the user as logged in user in Symfony
        $session->set('_app.user', array (
                'id' => $userObj->getId(),
                'language' => $userObj->getId(),
                'username' => $userObj->getUsername(),
                'name' => $userObj->getEntityObj()->getName(),
                'surname' => $userObj->getEntityObj()->getSurname(),
                'email' => $email,
                'avatar' => $userAvatar,
                'role' => $userObj->getRole(),
                'entity_id' => $userObj->getEntityObj()->getId()
            )
        );
        // Set user language
        $appLanguageObj = $userObj->getAppLanguageObj();
        if ($appLanguageObj) {
            $session->set('_app.user.language', array(
                'systemPrefix' => $appLanguageObj->getSystemPrefix(),
                'lcCode' => $appLanguageObj->getLcCode(),
                'name' => $appLanguageObj->getName()
            ));
        } else {
            $session->set('_app.user.language', $session->get('_app.system.language'));
        }

        // Init front-office
        $this->get('app.service.frt')->init();

        // Redirect user to the route
        return $this->forward($obj->getActionId(), $obj->getActionParam());
    }
}
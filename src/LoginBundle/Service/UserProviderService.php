<?php
// src/LoginBundle/Service/UserProviderService.php

namespace LoginBundle\Service;

use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\HttpFoundation\RequestStack;
use AppBundle\Service\DatabaseService;
use SysadminBundle\Service\RepositoryService as SysadminRepositoryService;
use LoginBundle\Service\RepositoryService as LoginRepositoryService;
use SysadminBundle\Entity\System;
use LoginBundle\Entity\User;
use Symfony\Component\HttpFoundation\Session\Session;

class UserProviderService implements UserProviderInterface
{
    /**
     * @var Session (service)
     */
    protected $session;

    /**
     * @var RequestStack (service)
     */
    protected $requestStack;

    /**
     * @var DatabaseService (service)
     */
    protected $databaseService;

    /**
     * @var SysadminRepositoryService (service)
     */
    protected $sysAdminRepositoryService;

    /**
     * @var LoginRepositoryService (service)
     */
    protected $loginRepositoryService;

    /**
     * @var kernel root_dir parameter (service)
     */
    protected $kernelRootDir;


    /**
     * Construct
     * @param Session $session
     * @param RequestStack $requestStack
     * @param DatabaseService $databaseService
     * @param SysadminRepositoryService $sysAdminRepositoryService
     * @param LoginRepositoryService $loginRepositoryService
     * @param $kernelRootDir
     */
    public function __construct(
        Session $session,
        RequestStack $requestStack,
        DatabaseService $databaseService,
        SysadminRepositoryService $sysAdminRepositoryService,
        LoginRepositoryService $loginRepositoryService,
        $kernelRootDir
    ) {
        $this->session = $session;
        $this->requestStack = $requestStack;
        $this->databaseService = $databaseService;
        $this->sysAdminRepositoryService = $sysAdminRepositoryService;
        $this->loginRepositoryService = $loginRepositoryService;
        $this->kernelRootDir = $kernelRootDir;
    }

    /**
     * Load user system and set database connection
     *
     * @param $system
     * @return mixed
     * @throws UsernameNotFoundException
     */
    protected function loadUserSystem($system)
    {
        if(!empty($system)) {
            $systemObj = $this->sysAdminRepositoryService
                ->setEntityRepository('SysadminBundle:System')
                ->execute(
                    'findOneByLogin',
                    array(
                        $system
                    )
                );
            
            if ($systemObj instanceof System) {
                $this->databaseService->switchConnection(
                    'local_database',
                    $systemObj->getDbHost(),
                    $systemObj->getDbName(),
                    $systemObj->getDbUsername(),
                    $systemObj->getDbPassword()
                );

                // Load basic system information to session
                $this->session->set('_app.system', array(
                    'id' => $systemObj->getId(),
                    'name' => $systemObj->getName(),
                    'filesRepository' => ($this->kernelRootDir.'/../web/upload/'.$systemObj->getName().'/')
                ));

                return $this;
            }
        }

        throw new UsernameNotFoundException('Could not find system. Sorry!');
    }

    /**
     * @param string $username
     * @return mixed
     * @throws UsernameNotFoundException
     */
    public function loadUserByUsername($username)
    {
        // Get system from the form post
        $request = $this->requestStack->getCurrentRequest();
        $system = $request->get('_system');
        if(!empty($system)) {
            // Save the first request from user to redirect after success login
            $this->session->set('_tmp.user_request', $this->session->get('_security.default.target_path'));
            $this->session->set('_tmp.user_system', $system); // To retrieve back to login form if user login fail
        }
        else {
            // Get system from the session
            $system = $this->session->get('_app.system')['id'];
        }

        // Load user system and set database connection
        $this->loadUserSystem($system);

        // Get user
        $userObj = $this->loginRepositoryService
            ->setEntityRepository('LoginBundle:User')
            ->execute(
                'loadUserByUsername',
                array(
                    $username
                )
            );

        if(!($userObj instanceof User)) {
            throw new UsernameNotFoundException('Could not find user. Sorry!');
        }

        return $userObj;
    }

    /**
     * @param UserInterface $user
     * @return mixed|UserInterface
     * @throws UnsupportedUserException
     * @throws UsernameNotFoundException
     */
    public function refreshUser(UserInterface $user)
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(
                sprintf('Instances of "%s" are not supported.', get_class($user))
            );
        }
        
        $userObj = $this->loadUserByUsername($user->getUsername());

        return $userObj;
    }

    /**
     * @param string $class
     * @return bool
     */
    public function supportsClass($class) {
        return $class === 'LoginBundle\Entity\User';
    }
}
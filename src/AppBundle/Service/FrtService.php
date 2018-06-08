<?php
namespace AppBundle\Service;

use Symfony\Component\DependencyInjection\ContainerInterface as Container;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;

class FrtService
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
     * Initializes app
     * @return $this
     */
    public function init()
    {
        $session = $this->container->get('session');
        $isEmbed = ($session->has('_app.frtContext') && ($session->get('_app.frtContext') == 'EMBED'));

        // Clear all flash messages
        $session->getFlashBag()->clear();

        // Remove temporary session information
        $session->remove('_tmp.hasAuthenticationSubmit');
        $session->remove('_tmp.user_system');

        // Breadcrumb
        $session->set('_app.breadcrumb', array());

        // User
        if (!$isEmbed) { // Embed context sets the user manually
            $session->set('_app.user', $this->container->get('app.service.app')->getLoggedUser());
        }

        // App modules
        //$session->set('_app.modules', $this->getAppModules());

        // Temporary storage (array with time as key, to clear storage correctly)
        $session->set('_storage', array());

        return $this;
    }

    /**
     * Set front-office settings
     * @param $system (system id, system name or system domain)
     * @param null $store (generally used in embed context)
     * @return $this
     */
    public function loadSystem($system, $store = null)
    {
        $session = $this->container->get('session');
        $isEmbed = ($session->has('_app.frtContext') && ($session->get('_app.frtContext') == 'EMBED'));

        // Set system
        $this->container->get('login.service.user_provider')->loadSystem($system);
        $this->container->get('app.service.app')->loadSystemSettings();

        // Set settings
        $repositoryService = $this->container->get('bck.admin.service.repository')
            ->setEntityRepository($isEmbed ? 'BckAdminBundle:EmbedFrtSetting' : 'BckAdminBundle:FrtSetting');
        $frtSettings = $repositoryService->execute('findAll', array());
        if (count($frtSettings) > 0) {
            $frtSettings = reset($frtSettings);
        } else {
            throw new UsernameNotFoundException('Could not find system settings. Sorry!');
        }
        $storeObj = ($store ?
            $repositoryService->setEntityRepository('BckAdminBundle:Store')->execute('findOneById', array($store)) :
            $frtSettings->getFrtStoreObj()
        );
        $store = $storeObj->getId();
        $frtSettingsArr = array(
            'company' => $isEmbed ? $storeObj->getName() : $frtSettings->getCompany(),
            'slogan' => $frtSettings->getSlogan(),
            'hasHeader' => $isEmbed ? $frtSettings->getHasHeader() : true,
            'hasFooter' => $isEmbed ? $frtSettings->getHasFooter() : true,
            'headerBgColor' => $frtSettings->getHeaderBgColor(),
            'bgColor' => $frtSettings->getBgColor(),
            'headerTxtColor' => $frtSettings->getHeaderTxtColor(),
            'txtColor' => $frtSettings->getTxtColor()
        );

        // Set store
        $session->set('_app.store', $store);
        $stores = $this->container->get('app.service.app')->getStores($store);
        $session->set('_app.stores', $stores);
        // @TODO Front-office menus
        //$this->container->get('app.service.app')->setStoreLogo();
        $this->container->get('app.service.app')->setStoreAcl($store);
        $this->container->get('app.service.app')->setStoreLogo($store);

        // Set store info
        $frtSettingsArr['contacts'] = array_merge(
            $repositoryService->setEntityRepository('BckAdminBundle:StorePhone')
                ->execute('getForFrontOfficeByStore', array($store)),
            $repositoryService->setEntityRepository('BckAdminBundle:StoreEmail')
                ->execute('getForFrontOfficeByStore', array($store)),
            $repositoryService->setEntityRepository('BckAdminBundle:StoreLink')
                ->execute('getForFrontOfficeByStore', array($store))
        );
        $session->set('_app.settings', $frtSettingsArr);

        return $this;
    }
}
<?php

namespace Frt\EntitiesBundle\Controller;

use Bck\EntitiesBundle\Controller\ClientController as BckClientController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class ClientController extends BckClientController
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
            'edit' => array(
                'name' => '_entities__client__edit'
            )
        );

        // Overrides BundlePrefix to use the entity of back-office
        $this->localConf['BundlePrefix'] = 'Bck';

        $this->baseEntityInit($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array('edit' => true);

        // ACL
        $this->templateConf['acl'] = array('read' => true, 'edit' => true); // Allow the user edit your profile

        return $this;
    }

    /**
     * @Route("/entities/client/edit/{id}",
     *     name="_entities__client__edit",
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
        $this->localConf['formTypeClass'] = ('Frt\EntitiesBundle\Form\ClientType');
        // Field to be rendered in form (this configuration for Angular "FormService" is defined in "FormServiceProvider")
        $this->templateConf['fields']['form'] = array('code', 'avatar', 'title', 'name', 'surname',
            'legalName', 'birthDate', 'taxNumber');

        return parent::editAction($request, $id);
    }
}
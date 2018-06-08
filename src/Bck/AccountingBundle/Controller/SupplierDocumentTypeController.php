<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SupplierDocumentTypeController extends BaseEntityController
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

        // Configured as sub-menu, a dependency into view.
        $this->templateConf['label'] = 'Supplier Document Types';
        $this->templateConf['selectedMenu']['route'] = '_bck__accounting__document_types__index';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__accounting__supplier_document_type__get'
            ),
            'edit' => array(
                'name' => '_bck__accounting__supplier_document_type__edit'
            ),
            'delete' => array(
                'name' => '_bck__accounting__supplier_document_type__delete'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Local search to add mandatory criteria
        if (!$this->get('security.authorization_checker')->isGranted('ROLE_SYSADMIN')) {
            $this->localConf['search']['criteria'][] = array(
                'field' => 'requiresSysadminRole',
                'expr' => 'neq',
                'value' => true
            );
        }

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/bck/accounting/supplier-document-type",
     *     name="_bck__accounting__supplier_document_type__index"
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
     * @Route("/bck/accounting/supplier-document-type/get/{id}",
     *     name="_bck__accounting__supplier_document_type__get",
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
     * @Route("/bck/accounting/supplier-document-type/edit/{id}",
     *     name="_bck__accounting__supplier_document_type__edit",
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
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document-type/delete/{id}",
     *     name="_bck__accounting__supplier_document_type__delete",
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
}
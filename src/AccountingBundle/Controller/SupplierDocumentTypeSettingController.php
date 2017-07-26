<?php
namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SupplierDocumentTypeSettingController extends BaseEntityController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['handleStore'] = false; // Store is handled by user

        // Configured as sub-menu, a dependency into view.
        $this->templateConf['label'] = 'Supplier Document Type Series';
        $this->templateConf['selectedMenu']['route'] = '_admin__settings__index';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_accounting__supplier_document_type_setting__get'
            ),
            'edit' => array(
                'name' => '_accounting__supplier_document_type_setting__edit',
            ),
            'delete' => array(
                'name' => '_accounting__supplier_document_type_setting__delete',
            )
        );

        parent::init($request);
        
        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        $this->templateConf['search']['orderBy'] = array(
            array('field' => 'storeObj', 'value' => 'DESC')
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add']
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/accounting/supplier-document-type-setting/get/{id}",
     *     name="_accounting__supplier_document_type_setting__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/accounting/supplier-document-type-setting/edit/{id}",
     *     name="_accounting__supplier_document_type_setting__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/accounting/supplier-document-type-setting/delete/{id}",
     *     name="_accounting__supplier_document_type_setting__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }

    /**
     * @Route("/accounting/supplier-document-type-setting/data",
     *     name="_accounting__supplier_document_type_setting__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @return mixed
     */
    public function dataAction(Request $request)
    {
        return parent::dataAction($request);
    }

    /**
     * Overrides parent function
     * @param $object
     * @param $data
     * @param null $context
     * @return bool
     */
    protected function preSaveObject($object, $data, $context = null) {
        $documentTypeObj = $object->getSupplierDocumentTypeObj();
        $prefix = $object->getSeriesPrefix();
        $prefix = ($prefix ? $prefix : '');
        $number = ($object->getSeriesNumber());

        $object = $this->getRepositoryService("SupplierDocument", 'AccountingBundle')
            ->execute(
                'queryBuilder',
                array(
                    array(
                        'fields' => array(
                            'id'
                        ),
                        'criteria' => array(
                            array('field' => 'supplierDocumentTypeObj', 'expr' => 'eq', 'value' => $documentTypeObj),
                            array('field' => 'supplierDocument.codePrefix', 'expr' => 'eq', 'value' => $prefix),
                            array('field' => 'supplierDocument.codeNumber', 'expr' => 'gt', 'value' => $number)
                        ),
                        'limit' => 1
                    )
                )
            );

        if (empty($object)) {
            return true;
        }

        $this->responseConf['status'] = 0;
        $this->addFlashMessage(
            'This series is already in use.',
            'Data not persisted',
            'error'
        );

        return false;
    }
}
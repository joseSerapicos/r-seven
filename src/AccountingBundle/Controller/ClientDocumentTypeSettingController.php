<?php
namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentTypeSettingController extends BaseEntityController
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
        $this->templateConf['label'] = 'Client Document Type Series';
        $this->templateConf['selectedMenu']['route'] = '_admin__settings__index';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_accounting__client_document_type_setting__get'
            ),
            'edit' => array(
                'name' => '_accounting__client_document_type_setting__edit',
            ),
            'delete' => array(
                'name' => '_accounting__client_document_type_setting__delete',
            )
        );

        parent::init($request);
        
        // Search
        $this->templateConf['search']['orderBy'] = array(
            array('field' => 'storeObj', 'value' => 'DESC')
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'search' => true,
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
     * @Route("/accounting/client-document-type-setting/get/{id}",
     *     name="_accounting__client_document_type_setting__get",
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
     * @Route("/accounting/client-document-type-setting/edit/{id}",
     *     name="_accounting__client_document_type_setting__edit",
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
     * @Route("/accounting/client-document-type-setting/delete/{id}",
     *     name="_accounting__client_document_type_setting__delete",
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
     * @Route("/accounting/client-document-type-setting/data",
     *     name="_accounting__client_document_type_setting__data"
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
     * @param $data (usually the form data)
     * @return bool
     */
    protected function preSaveObject(&$object, $data) {
        $documentTypeObj = $object->getClientDocumentTypeObj();
        $prefix = $object->getSeriesPrefix();
        $prefix = ($prefix ? $prefix : '');
        $number = ($object->getSeriesNumber());

        // Check if the "Series Number" is already in use
        $results = $this->getRepositoryService("ClientDocument", 'AccountingBundle')
            ->execute(
                'queryBuilder',
                array(
                    array(
                        'fields' => array(
                            'id'
                        ),
                        'criteria' => array(
                            array('field' => 'clientDocumentTypeObj', 'expr' => 'eq', 'value' => $documentTypeObj),
                            array('field' => 'clientDocument.codePrefix', 'expr' => 'eq', 'value' => $prefix),
                            // There can not be a greater number than $number, otherwise $number can reach the greater
                            // number and shuffle the series (smaller is not a problem because document type series is
                            // updated and never can be again smaller)
                            array('field' => 'clientDocument.codeNumber', 'expr' => 'gt', 'value' => $number)
                        ),
                        'limit' => 1
                    )
                )
            );

        if (empty($results)) {
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
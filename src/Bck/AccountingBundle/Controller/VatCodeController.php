<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Bck\AccountingBundle\Entity\VatCode;

class VatCodeController extends BaseEntityController
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
                'name' => '_bck__accounting__vat_code__get'
            ),
            'edit' => array(
                'name' => '_bck__accounting__vat_code__edit'
            ),
            'delete' => array(
                'name' => '_bck__accounting__vat_code__delete'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/bck/accounting/vat-code",
     *     name="_bck__accounting__vat_code__index"
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
     * @Route("/bck/accounting/vat-code/get/{id}",
     *     name="_bck__accounting__vat_code__get",
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
     * @Route("/bck/accounting/vat-code/edit/{id}",
     *     name="_bck__accounting__vat_code__edit",
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

        // Get object
        $obj = $this->getObject($id);
        $oldPercentage = $obj->getPercentage(); // Save old percentage to check if percentage is edited

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if ($oldPercentage != $obj->getPercentage()) {
                // Check if there are documents using this VAT code, if then, percentage can't be edited
                if ($this->getLocalRepositoryService()->execute('isInUseByDocuments', array($obj))) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Percentage cannot be edited. It is in use by documents.',
                        'Data not persisted!',
                        'error'
                    );
                    return $this->getResponse();
                }
            }

            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/accounting/vat-code/delete/{id}",
     *     name="_bck__accounting__vat_code__delete",
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
     * @Route("/bck/accounting/vat-code/get-percentage/{id}",
     *     name="_bck__accounting__vat_code__get_percentage"
     * )
     *
     * Action to get the percentage of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getPercentageAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        $obj = $this->getObject($id);

        $this->templateConf['localData']['data']['percentage']
            = ($obj ? $obj->getPercentage() : null);

        return $this->getResponse();
    }
}
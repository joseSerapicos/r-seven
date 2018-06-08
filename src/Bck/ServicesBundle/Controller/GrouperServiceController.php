<?php

namespace Bck\ServicesBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class GrouperServiceController extends BaseServiceController
{
    /**
     * Get Local Service Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalServiceContext()
    {
        return 'grouper';
    }

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
                'name' => '_bck__services__grouper_service__get'
            ),
            'edit' => array(
                'name' => '_bck__services__grouper_service__edit'
            ),
            'delete' => array(
                'name' => '_bck__services__grouper_service__delete'
            )
        );

        parent::init($request);

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = array(
            'id', 'icon', 'name', 'vatCode_name', 'isEnabled'
        );

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
     * @Route("/bck/services/grouper-service",
     *     name="_bck__services__grouper_service__index"
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
     * @Route("/bck/services/grouper-service/get/{id}",
     *     name="_bck__services__grouper_service__get",
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
     * @Route("/bck/services/grouper-service/get-vat-code-percentage/{id}",
     *     name="_bck__services__grouper_service__get_vat_code_percentage"
     * )
     *
     * Action to get the VAT code percentage of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getVatCodePercentageAction(Request $request, $id)
    {
        return parent::getVatCodePercentageAction($request, $id);
    }

    /**
     * @Route("/bck/services/grouper-service/edit/{id}",
     *     name="_bck__services__grouper_service__edit",
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
     * @Route("/bck/services/grouper-service/delete/{id}",
     *     name="_bck__services__grouper_service__delete",
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
     * @Route("/bck/services/grouper-service/conf/{id}",
     *     name="_bck__services__grouper_service__conf",
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
     * Overrides parent method
     * @param $object
     * @return mixed
     */
    protected function setObjectDefaultValues($object)
    {
        parent::setObjectDefaultValues($object);

        // Set mandatory fields not used in this entity
        $serviceObj = $object->getServiceObj();
        $serviceObj->setIsEnabledAvailability(false);
        $serviceObj->setIsEnabledAllot(false);
        $serviceObj->setIsEnabledPrice(false);

        return $this;
    }
}
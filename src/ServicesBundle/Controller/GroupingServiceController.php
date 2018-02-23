<?php

namespace ServicesBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class GroupingServiceController extends BaseServiceController
{
    /**
     * Get Local Service Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalServiceContext()
    {
        return 'grouping';
    }

    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_services__grouping_service__get'
            ),
            'edit' => array(
                'name' => '_services__grouping_service__edit'
            ),
            'delete' => array(
                'name' => '_services__grouping_service__delete'
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
     * @Route("/services/grouping-service",
     *     name="_services__grouping_service__index"
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
     * @Route("/services/grouping-service/get/{id}",
     *     name="_services__grouping_service__get",
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
     * @Route("/services/grouping-service/get-vat-code-percentage/{id}",
     *     name="_services__grouping_service__get_vat_code_percentage"
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
     * @Route("/services/grouping-service/edit/{id}",
     *     name="_services__grouping_service__edit",
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
     * @Route("/services/grouping-service/delete/{id}",
     *     name="_services__grouping_service__delete",
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
     * @Route("/services/grouping-service/conf",
     *     name="_services__grouping_service__conf"
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @return mixed
     */
    public function confAction(Request $request)
    {
        return parent::confAction($request);
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
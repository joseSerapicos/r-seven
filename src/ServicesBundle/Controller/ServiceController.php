<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class ServiceController extends BaseEntityController
{
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
                'name' => '_services__service__get'
            ),
            'edit' => array(
                'name' => '_services__service__edit'
            ),
            'delete' => array(
                'name' => '_services__service__delete'
            ),
            'detail' => array(
                'name' => '_services__service__detail'
            ),
            'thumbnail' => array(
                'name' => '_services__service__thumbnail',
            )
        );

        parent::init($request);

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = array(
            'id', 'thumbnail', 'icon', 'name', 'vatCode_name',
            'isEnabledAvailability', 'isEnabledAllot', 'isEnabledPrice', 'isEnabled'
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => true,
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/services/service",
     *     name="_services__service__index"
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
     * @Route("/services/service/get/{id}",
     *     name="_services__service__get",
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
     * @Route("/services/service/edit/{id}",
     *     name="_services__service__edit",
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
     * @Route("/services/service/thumbnail/{id}",
     *     name="_services__service__thumbnail",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add thumbnail using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function thumbnailAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Create form
        $form = $this->createFormBuilder()
            ->setMethod('POST')
            ->getForm();

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted() && $form->isValid()) {
            // Get data
            $content = $request->getContent();
            $fields = array();
            parse_str($content, $fields);

            // Get object
            $obj = $this->getObject($id);
            $obj->setThumbnail(HelperService::cropImage(
                $this->container->get('liip_imagine.data.manager'),
                $this->container->get('liip_imagine.filter.manager'),
                $fields['path'],
                $fields['width'],
                $fields['height'],
                $fields['x'],
                $fields['y']
            ));

            // Save
            $this->saveObject($obj);
            if ($this->responseConf['status'] === 1) {
                $this->addFlashMessage( // Flash messages to display to user
                    'The data has been updated',
                    'Success',
                    'success'
                );
            }
            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AppBundle:image:crop-form-popup.html.twig', array(
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/services/service/controls",
     *     name="_services__service__controls"
     * )
     *
     * Action to get the base to display/edit controls
     * @param Request $request
     * @return mixed
     */
    public function controlsAction(Request $request)
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Availability'
                ),
                array(
                    'label' => 'Allot/Allot'
                ),
                array(
                    'label' => 'Prices'
                ),
                array(
                    'label' => 'Supplements'
                ),
                array(
                    'label' => 'Discounts'
                ),
                array(
                    'label' => 'Bonus'
                )
            )
        ));
    }

    /**
     * @Route("/services/service/detail/{id}",
     *     name="_services__service__detail",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/services/service/delete/{id}",
     *     name="_services__service__delete",
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
     * @Route("/services/service/detail-tabs",
     *     name="_services__service__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Prices'
                ),
                array(
                    'label' => 'Observations'
                ),
                array(
                    'label' => 'Files'
                ),
                array(
                    'label' => 'Gallery'
                ),
                array(
                    'label' => 'Videos'
                )
            )
        ));
    }

    /**
     * @Route("/services/service/conf",
     *     name="_services__service__conf"
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
}
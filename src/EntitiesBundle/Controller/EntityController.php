<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class EntityController extends BaseEntityController
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

        // Flags
        $this->flags['storeAclResource'] = 'shareEntities:all'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_entities__entity__get'
            ),
            'edit' => array(
                'name' => '_entities__entity__edit'
            ),
            'delete' => array(
                'name' => '_entities__entity__delete'
            ),
            'detail' => array(
                'name' => '_entities__entity__detail'
            ),
            'thumbnail' => array(
                'name' => '_entities__entity__thumbnail',
            ),
            'choices' => array(
                'name' => '_entities__entity__choices'
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
                'detail' => true,
                'search' => true
            )
        );

        // Search. Local conf search, mandatory fields and criteria.
        $this->localConf['search']['fields'][] = 'userObj'; // Used to make the join with user table
        $this->localConf['search']['criteria'][] = array( // Don't retrieve users with the remaining entities
            'field' => 'user.id',
            'expr' => 'isNull',
            'value' => null
        );

        return $this;
    }

    /**
     * @Route("/entities/entity",
     *     name="_entities__entity__index"
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
     * @Route("/entities/entity/detail/{id}",
     *     name="_entities__entity__detail",
     *     defaults={"id" = null},
     * )
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/entities/entity/get/{id}",
     *     name="_entities__entity__get",
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
     * @Route("/entities/entity/choices",
     *     name="_entities__entity__choices",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @return mixed
     */
    public function choicesAction(Request $request)
    {
        return parent::choicesAction($request);
    }

    /**
     * @Route("/entities/entity/edit/{id}",
     *     name="_entities__entity__edit",
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
     * @Route("/entities/entity/thumbnail/{id}",
     *     name="_entities__entity__thumbnail",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add thumbnail (avatar) using the form
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
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // Get data
            $content = $request->getContent();
            $fields = array();
            parse_str($content, $fields);

            // Get object
            $obj = $this->getObject($id);
            $obj->setAvatar(HelperService::cropImage(
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
     * @Route("/entities/entity/contacts",
     *     name="_entities__entity__contacts"
     * )
     *
     * Action to get the base to display/edit contacts
     * @return mixed
     */
    public function contactsAction()
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Addresses'
                ),
                array(
                    'label' => 'Phones'
                ),
                array(
                    'label' => 'Emails'
                ),
                array(
                    'label' => 'Links'
                )
            )
        ));
    }

    /**
     * @Route("/entities/entity/delete/{id}",
     *     name="_entities__entity__delete",
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
     * @Route("/entities/entity/detail-tabs",
     *     name="_entities__entity__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Contacts'
                ),
                array(
                    'label' => 'Notes'
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
     * @Route("/entities/entity/conf",
     *     name="_entities__entity__conf"
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
     * @return mixed
     */
    protected function getSearch()
    {
        $this->templateConf['search'] = $this->empowerCriteriaByName($this->templateConf['search']);
        return parent::getSearch();
    }

    /**
     * Empower criteria by name. To improve the search results by "name"
     * @param $search
     * @return mixed
     */
    private function empowerCriteriaByName($search) {
        if (isset($search['criteria']) && is_array($search['criteria'])) {
            // Search criteria for 'name' to change it.
            $criteriaIndex = null;
            foreach ($search['criteria'] as $tmpCriteriaIndex => $criteria) {
                if ($criteria['field'] == 'name') {
                    $criteriaIndex = $tmpCriteriaIndex;
                    break;
                }
            }

            // If criteria for "name" is found, change it.
            if ($criteriaIndex !== null) {
                // Search in name and surname
                // SELECT * FROM `entity` WHERE CONCAT(entity.name, ' ', entity.surname) like '%name surname%'
                $search['criteria'][$criteriaIndex]['field'] = "CONCAT(entity.name, ' ', entity.surname)";
                $search['criteria'][] = array( // Crosses
                    'field' => 'legalName',
                    'method' => 'or',
                    'expr' => $search['criteria'][$criteriaIndex]['expr'],
                    'value' => $search['criteria'][$criteriaIndex]['value']
                );
            }
        }

        return $search;
    }
}
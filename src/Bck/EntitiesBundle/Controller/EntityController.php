<?php

namespace Bck\EntitiesBundle\Controller;

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
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['storeAclResource'] = 'shareEntities:all'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__entities__entity__get'
            ),
            'edit' => array(
                'name' => '_bck__entities__entity__edit'
            ),
            'delete' => array(
                'name' => '_bck__entities__entity__delete'
            ),
            'detail' => array(
                'name' => '_bck__entities__entity__detail'
            ),
            'thumbnail' => array(
                'name' => '_bck__entities__entity__thumbnail',
            ),
            'choices' => array(
                'name' => '_bck__entities__entity__choices'
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
        $this->localConf['search']['criteria'][] = array( // Don't retrieve system users
            'field' => 'user.role',
            'expr' => 'isNull',
            'value' => null
        );
        $this->localConf['search']['criteria'][] = array( // Don't retrieve system users
            'field' => 'user.role',
            'method' => 'or',
            'expr' => 'eq',
            'value' => "ROLE_CUSTOMER"
        );

        return $this;
    }

    /**
     * @Route("/bck/entities/entity",
     *     name="_bck__entities__entity__index"
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
     * @Route("/bck/entities/entity/detail/{id}",
     *     name="_bck__entities__entity__detail",
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
     * @Route("/bck/entities/entity/get/{id}",
     *     name="_bck__entities__entity__get",
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
     * @Route("/bck/entities/entity/choices",
     *     name="_bck__entities__entity__choices"
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
     * @Route("/bck/entities/entity/edit/{id}",
     *     name="_bck__entities__entity__edit",
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
     * @Route("/bck/entities/entity/thumbnail/{id}",
     *     name="_bck__entities__entity__thumbnail",
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

        // Get object
        $obj = $this->getObject($id);

        // Create form
        $form = $this->createForm('Bck\EntitiesBundle\Form\EntityThumbnailType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse();
            }

            // Get data
            $content = $request->getContent();
            $fields = array();
            parse_str($content, $fields);

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
            return $this->getResponse();
        }

        // Render form
        return $this->render('AppBundle:image:crop-form-popup.html.twig', array(
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/entities/entity/contacts",
     *     name="_bck__entities__entity__contacts"
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
     * @Route("/bck/entities/entity/delete/{id}",
     *     name="_bck__entities__entity__delete",
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
     * @Route("/bck/entities/entity/detail-tabs",
     *     name="_bck__entities__entity__detail_tabs")
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
     * @Route("/bck/entities/entity/conf/{id}",
     *     name="_bck__entities__entity__conf",
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
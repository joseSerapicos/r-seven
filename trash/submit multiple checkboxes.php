<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use EntitiesBundle\Entity\Entity;
use EntitiesBundle\Entity\EntityGroupEntity;

class EntityGroupEntityControllerbbbbbb extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Entities')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'entityGroup' => array('route' => '_entities__entity_group__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_entities__entity_group_entity__get'
            ),
            'edit' => array(
                'name' => '_entities__entity_group_entity__edit',
            ),
            'delete' => array(
                'name' => '_entities__entity_group_entity__edit',
            )
        );

        parent::initChild($request, $parents, $label);

        // Variables
        $this->localConf['form']['buttons'] = 'none';
        $this->localConf['templates']['edit'] = 'EntitiesBundle:EntityGroupEntity:form.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // To show the last inserted in the first position
        $this->templateConf['search']['orderBy'] = array(array('field' => 'id', 'value' => 'DESC'));

        // Actions for template/view
        $this->templateConf['actions'] = array(
            'delete' => $this->templateConf['acl']['delete']
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-group-entity/get/{entityGroup}/{id}",
     *     name="_entities__entity_group_entity__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $entityGroup, $id)
    {
        return parent::getChildAction($request, array($entityGroup), $id);
    }

    /**
     * @Route("/entities/entity-group-entity/edit/{entityGroup}/{id}",
     *     name="_entities__entity_group_entity__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $entityGroup, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($entityGroup));

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // Process request
            $data = $this->getAndProcessRequestData($request, false);

            // Config response
            $this->responseConf['hasObjects'] = true;
            
            $ids = (!empty($data['id']) && is_array($data['id'])) ? $data['id'] : array();
            $addedIds = $this->getArrayFromField('entityGroupObj');
            $idsToAdd = array_diff($ids, $addedIds);
            $idsToDelete = array_diff($addedIds, $ids);

            // No data to update
            if ((count($idsToAdd)) < 1 && (count($idsToDelete) < 1)) {
                $this->addFlashMessage(
                    'There are no data to update!<br/>Please try to refresh the panel.',
                    'Warning',
                    'warning'
                );
                return $this->getResponse(true);
            }

            // Delete objects
            foreach($idsToDelete as $id) {
                $entityGroupObj = $this->get('entities.service.repository')
                    ->setEntityRepository('EntitiesBundle:EntityGroup')
                    ->execute(
                        'findOneById',
                        array(
                            $id
                        )
                    );
                $obj = $this->getLocalRepositoryService()
                    ->execute(
                        'findOneByEntityGroupObj',
                        array(
                            $entityGroupObj
                        )
                    );
                $this->deleteObject($obj);
                // If error, skip to the next step to return the error
                if($this->responseConf['status'] !== 1) {
                    break;
                }
            }

            // Add objects
            if ($this->responseConf['status'] === 1) {
                foreach ($idsToAdd as $id) {
                    $obj = $this->newObject();
                    $entityGroupObj = $this->get('entities.service.repository')
                        ->setEntityRepository('EntitiesBundle:EntityGroup')
                        ->execute(
                            'findOneById',
                            array(
                                $id
                            )
                        );
                    $obj->setEntityGroupObj($entityGroupObj);
                    $this->saveObject($obj);
                    // If error, skip to the next step to return the error
                    if ($this->responseConf['status'] !== 1) {
                        break;
                    }
                }
            }

            // Return
            if ($this->responseConf['status'] === 1) {
                // Refresh to update fields choices
                $this->refreshConf();

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            }
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/entities/entity-group-entity/data/{entityGroup}",
     *     name="_entities__entity_group_entity__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $entityGroup)
    {
        return parent::dataChildAction($request, array($entityGroup));
    }

    /**
     * @Route("/entities/entity-group-entity/conf/{entityGroup}",
     *     name="_entities__entity_group_entity__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $entityGroup)
    {
        return parent::confChildAction($request, array($entityGroup));
    }

    /**
     * Get list/array of objects by search configuration
     * @return null
     */
    protected function getObjectsBySearch() {
        $choices = $this->get('entities.service.repository')
            ->setEntityRepository('EntitiesBundle:EntityGroup')
            ->execute(
                'getAllJoinWithEntity',
                array(
                    null,
                    $this->parentObj->getId()
                )
            );

        $nodes = array();
        if (is_array($choices) && (count($choices) > 0)) {
            foreach ($choices as $choice) {
                $index = (empty($choice['entityGroupObj']) ? 0 : $choice['entityGroupObj']);
                $nodes[$index][] = $choice;
            }
        }

        return $nodes;
    }
}
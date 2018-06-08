<?php

namespace Bck\EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Bck\EntitiesBundle\Entity\Entity;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class BaseEntityTypeController
 * @package BckEntitiesBundle\Controller
 *
 * This is base class for entity types (client, supplier, entity).
 * The name of this class is not only "BaseEntityController" because this name is already in use
 */
abstract class BaseEntityTypeController extends BaseEntityController
{
    /**
     * DEFINE ROUTE HERE
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

        // Set associated Entity object manually, because form handles with Entity object only as embed
        $data = $this->getRequestData($request);
        if (isset($data['form']) && isset($data['form']['selectEntityObj'])) {
            $selectEntityId = $data['form']['selectEntityObj'];
            $selectEntityObj = null;

            if (!empty($selectEntityId)) {
                $selectEntityObj = $this->getRepositoryService('Entity', 'EntitiesBundle', 'Bck')
                    ->execute('findOneById', array($data['form']['selectEntityObj']));
            }

            $obj->setSelectEntityObj($selectEntityObj);
        }

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if ($this->preSaveObject($obj, $data['form'])) {
                $this->saveForm($form, $obj);
            }
            // This method is executed independent of the success in save
            // (check the $response['status'] if you need this information)
            $this->postSaveObject($obj, $data['form']);
            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to change associated Entity for preview
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function changeEntityAction(Request $request, $entity, $id)
    {
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        $selectEntityObj = $this->getRepositoryService('Entity', 'EntitiesBundle', 'Bck')
            ->execute('findOneById', array($entity));

        $obj->setSelectEntityObj($selectEntityObj);

        $this->responseConf['object'] = $this->normalizeObject($obj);
        // Add session storage flag, because this is a object simulation, and it has the same behavior
        $this->responseConf['object']['_isSessionStorage'] = true;
        return $this->getResponse();
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
     * @param $field
     * @param $table (table, can be the default name or an alias name when you join multiple times the same table)
     * @param $fieldDependency (field dependency to add to select case field is found, because the change of the field
     *     name prevents the automatic dependency resolver)
     * @return mixed
     */
    static function empowerCriteriaByName($search, $field = 'name', $table = 'entity', $fieldDependency = 'entityObj') {
        if (isset($search['criteria']) && is_array($search['criteria'])) {
            // Search criteria for 'name' to change it.
            $criteriaIndex = null;
            foreach ($search['criteria'] as $tmpCriteriaIndex => $criteria) {
                if ($criteria['field'] == $field) {
                    $criteriaIndex = $tmpCriteriaIndex;
                    break;
                }
            }

            // If criteria for "name" is found, change it.
            if ($criteriaIndex !== null) {
                // Search in name and surname
                // SELECT * FROM `entity` WHERE CONCAT(entity.name, ' ', entity.surname) like '%name surname%'
                $search['criteria'][$criteriaIndex]['field'] = "CONCAT(".$table.".name, ' ', ".$table.".surname)";
                $search['criteria'][] = array( // Crosses
                    'field' => $table.'.legalName',
                    'method' => 'or',
                    'expr' => $search['criteria'][$criteriaIndex]['expr'],
                    'value' => $search['criteria'][$criteriaIndex]['value']
                );

                // Add field dependency to select
                if (!empty($fieldDependency) && !in_array($fieldDependency, $search['fields'])) { // Avoid to repeat fields
                    $search['fields'][] = $fieldDependency;
                }
            }
        }

        return $search;
    }

    /**
     * Save object to database
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @param $addToResponse (determines if object should be added to response)
     * @return $this
     */
    protected function saveObjectToDb(&$object, $hasFlush = true, $addToResponse = false)
    {
        // Generates code for Entity Object
        if ($object) {
            $entityObj = $object->getEntityObj();

            // Generates default data and code for Entity Object
            if ($entityObj && !$entityObj->getId()) {
                parent::setObjectDefaultValues_static($this, $entityObj);
                $this->get('app.service.code_generator')
                    ->generateCode(
                        $entityObj,
                        $this->getRepositoryService('Entity', 'EntitiesBundle', 'Bck'),
                        'BckEntitiesBundle:EntitySetting',
                        'BckEntitiesBundle:Entity',
                        array()
                    );
            }

            parent::saveObjectToDb($object, $hasFlush, $addToResponse);
        }

        return $this;
    }
}
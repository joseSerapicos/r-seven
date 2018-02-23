<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class BaseEntityTypeController
 * @package EntitiesBundle\Controller
 *
 * This is base class for entity types (client, supplier, entity).
 * The name of this class is not only "BaseEntityController" because this name is already in use
 */
abstract class BaseEntityTypeController extends BaseEntityController
{
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
}
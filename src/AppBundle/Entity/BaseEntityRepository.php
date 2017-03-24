<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityRepository;
use AppBundle\Service\HelperService;

/**
 * BaseEntityRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
abstract class BaseEntityRepository extends EntityRepository implements IBaseEntityRepository
{
    // Methods to use in where clause
    const whereMethods = array(
        'and',
        'or'
    );

    // Expression to use in where clause
    const whereExpressions = array(
        'eq', // =
        'neq', // <>
        'lt', // <
        'lte', // <=
        'gt', // >
        'gte', // >=
        'isNull',
        'isNotNull',
        'in',
        'notIn',
        'like',
        'llike', // like %[search]
        'rlike', // like [search]%
        'lrlike', // like %[search]%
        'between', // regular between (field between value1 and value2)
        'rbetween' // reverse between (value between field1 and field2)
    );

    /**
     * Get local metadata (it needs to be implemented by children to get static variable with local metadata from parent)
     * @return mixed
     */
    abstract protected function getLocalMetadata();

    /**
     * Process metadata for child static method
     * @param $metadata
     * @return mixed
     */
    static protected function processMetadata($metadata)
    {
        /*echo("in process...<pre>");
        print_r($metadata);
        echo("</pre>");*/

        // Process metadata
        if (!empty($metadata) && is_array($metadata)) {
            foreach ($metadata as $field => $fieldMetadata) {
                if ($fieldMetadata['type'] == 'object') {
                    // Set automatic attributes
                    $metadata[$field]['typeDetail']['Bundle'] =
                        HelperService::snakeCaseToCamelCase($fieldMetadata['typeDetail']['bundle']).'Bundle';
                    $metadata[$field]['typeDetail']['entity'] = ucfirst((substr($fieldMetadata['typeDetail']['table'], 0, 4) == 'app_')
                        ? substr($fieldMetadata['typeDetail']['table'], 4)
                        : $fieldMetadata['typeDetail']['table']
                    );
                    $metadata[$field]['typeDetail']['entityClass'] = ($metadata[$field]['typeDetail']['Bundle']
                        .'\Entity\\'
                        .$metadata[$field]['typeDetail']['entity']
                    );
                    $metadata[$field]['typeDetail']['formClass'] = ($metadata[$field]['typeDetail']['Bundle']
                        .'\Form\\'
                        .$metadata[$field]['typeDetail']['entity'].'Type'
                    );

                    // Merge foreign metadata into local metadata
                    if (!empty($fieldMetadata['typeDetail']['metadata'])) {
                        $joinRepository = $metadata[$field]['typeDetail']['entityClass'] . 'Repository';
                        $joinMetadata = $joinRepository::getMetadata();
                        $joinMetadata = (is_array($joinMetadata)
                            // Remove duplicated keys (like "id", "insertTime", etc.)
                            ? array_diff_key($joinMetadata, $metadata)
                            : array()
                        );

                        // Update foreign fields
                        $joinMetadata = array_map(
                            function($value) use ($field, $fieldMetadata) {
                                if ($fieldMetadata['typeDetail']['metadata']['method'] == 'join') {
                                    // Ignored by form (only for read)
                                    $value['acl'] = 'read';
                                } else { // Case of "merge"
                                    // Used by form (edit fields through foreign form)
                                    $value['parent'] = $field; // Parent field (used in form)
                                }

                                if (empty($value['table'])) {
                                    // Defines only if empty, otherwise can be a foreign field into the join entity
                                    $value['table'] = $fieldMetadata['typeDetail']['table'];
                                }
                                if (empty($value['dependency'])) {
                                    // Defines only if empty, otherwise can be a foreign field into the join entity
                                    $value['dependency'] = $field;
                                }

                                return $value;
                            },
                            $joinMetadata
                        );

                        // Slice original metadata array in two to insert the foreign metadata between them.
                        $sliceIndex = (empty($fieldMetadata['typeDetail']['metadata']['pushAfterField'])
                            ? count($metadata) // Last index
                            : (array_search($fieldMetadata['typeDetail']['metadata']['pushAfterField'], array_keys($metadata)) + 1) // Index of provided field
                        );

                        // Merge local metadata with foreign metadata
                        $metadata = array_merge(
                            array_slice($metadata, 0, $sliceIndex),
                            $joinMetadata,
                            array_slice($metadata, $sliceIndex)
                        );
                    }
                }
            }
        }

        return $metadata;
    }

    /**
     * Get local field metadata. Used to process an return data to static child method "getFieldMetadata".
     * (static methods do not allow override by child)
     * @param $field
     * @param $attribute
     * @param $metadata (metadata from child, it is need because metadata is defined as static in child entity)
     * @param $context ('view'|'form')
     * @return null
     */
    static protected function getLocalFieldMetadata($field, $attribute, $metadata, $context = null)
    {
        $fieldMetadata = (empty($metadata[$field]) ? null : $metadata[$field]);

        if (!$attribute || !$fieldMetadata) {
            return null;
        }

        switch ($attribute) {
            case 'type':
                if (in_array($context, array('view', 'form'))) {
                    // Specific type for context
                    if (isset($fieldMetadata[$context]) && isset($fieldMetadata[$context]['type'])) {
                        return $fieldMetadata[$context]['type'];
                    }
                    // Subtype in case of complex types like 'object' and 'enum'
                    if (isset($fieldMetadata['typeDetail']) && isset($fieldMetadata['typeDetail']['type'])) {
                        return $fieldMetadata['typeDetail']['type'];
                    }
                }
                // Regular type
                return $fieldMetadata['type'];
            case 'parentTable': // Parent table of foreign field)
                return (($fieldMetadata['type'] == 'object')
                    ? (empty($fieldMetadata['typeDetail']['tableAlias'])
                        ? $fieldMetadata['typeDetail']['table']
                        : $fieldMetadata['typeDetail']['tableAlias'])
                    : null);
            case 'field':
                return (empty($fieldMetadata['field']) ? $field : $fieldMetadata['field']);
            case 'choicesValue':
                return ((!empty($fieldMetadata['typeDetail'])
                    && !empty($fieldMetadata['typeDetail']['choices'])
                    && !empty($fieldMetadata['typeDetail']['choices']['value']))
                        ? $fieldMetadata['typeDetail']['choices']['value']
                        : null
                );
            case 'fieldInView':
            case 'Bundle': // Object (foreign field) data
            case 'entity':
            case 'entityClass':
            case 'formClass':
                return ((isset($fieldMetadata['typeDetail']) && isset($fieldMetadata['typeDetail'][$attribute]))
                    ? $fieldMetadata['typeDetail'][$attribute]
                    : null
                );
            case 'query': // Choices data
            case 'autoRefresh':
                return ((isset($fieldMetadata['typeDetail'])
                    && isset($fieldMetadata['typeDetail']['choices'])
                    && isset($fieldMetadata['typeDetail']['choices'][$attribute]))
                        ? $fieldMetadata['typeDetail']['choices'][$attribute]
                        : null
                );
            case 'isMapped':
                // Form context
                return ((isset($fieldMetadata['form']) && isset($fieldMetadata['form'][$attribute]))
                    ? $fieldMetadata['form'][$attribute]
                    : null
                );
            case 'typeDetail': // Mandatory attribute into context (no default)
                if (!$context && isset($fieldMetadata[$attribute])) {
                    // General context (context is not defined)
                    return $fieldMetadata[$attribute];
                }
                if ($context && isset($fieldMetadata[$context]) && isset($fieldMetadata[$context][$attribute])) {
                    // Specific context
                    return $fieldMetadata[$context][$attribute];
                }
                return null;
            default: // Optional attribute into context (general as default)
                if ($context && isset($fieldMetadata[$context]) && isset($fieldMetadata[$context][$attribute])) {
                    // Specific context
                    return $fieldMetadata[$context][$attribute];
                }
                // General context
                return (isset($fieldMetadata[$attribute]) ? $fieldMetadata[$attribute] : null);
        }
    }

    /**
     * Process get field table
     * @param $field
     * @return mixed|null
     */
    public function getFieldTable($field) {
        $metadata = $this->getLocalMetadata();

        if (isset($metadata[$field])) {
            if (isset($metadata[$field]['table'])) {
                // Specified table
                return $metadata[$field]['table'];
            }
            // Local table
            return $this->getLocalTable();
        }

        // No table
        return null;
    }

    /**
     * Get local table
     * @return mixed
     */
    public function getLocalTable() {
        return $this->getClassMetadata()->getTableName();
    }

    /**
     * Get Query Builder
     * @return mixed
     */
    public function getQueryBuilder() {
        return $this->createQueryBuilder(
            $this->getClassMetadata()->getTableName()
        );
    }

    /**
     * Execute Query Build
     * @param $queryBuilder
     * @param string $method
     * @return mixed
     */
    public function executeQueryBuilder($queryBuilder, $method = 'getScalarResult') {
        $queryBuilderMethods = array(
            'getResult',
            'getSingleResult',
            'getOneOrNullResult',
            'getArrayResult',
            'getScalarResult',
            'getSingleScalarResult'
        );

        $method = in_array($method, $queryBuilderMethods) ? $method : 'getScalarResult';

        return $queryBuilder->getQuery()
            ->$method();
    }

    /**
     * Query Build
     * @param $options (array with search format plus "conf" => array("hasFields" => true))
     * @param $hasExecute
     * @param $executeMethod
     * @return mixed
     */
    public function queryBuilder($options = array(), $hasExecute = true, $executeMethod = 'getScalarResult')
    {
        // Set metadata
        $metadata = $this->getLocalMetadata();

        // Merge to standard options
        $options = array_merge(
            array(
                'fields' => null,
                'criteria' => null,
                'orderBy' => null,
                'limit' => null,
                'offset' => null
            ),
            $options
        );
        $qb = $this->getQueryBuilder();

        // SELECT
        if (is_array($options['fields'])) {
            // Determines if fields should be added to select or are used only for join
            $hasFields = (isset($options['conf']) && isset($options['conf']['hasFields'])
                ? $options['conf']['hasFields']
                : true
            );

            $select = array();
            foreach ($options['fields'] as $field) {
                $this->queryBuilderAddSelect($qb, $field, $select, $options['fields'], $hasFields);
            }
            if ($hasFields) { $qb->select($select); }
        }

        // WHERE
        if (is_array($options['criteria'])) {
            $parameter = 0;
            foreach ($options['criteria'] as $criteria) {
                $field = $criteria['field'];
                $field2 = null; // Used only in 'rbetween'
                $whereMethod = (empty($criteria['method']) ? 'and' : $criteria['method']);
                $expression = (empty($criteria['expr']) ? 'eq' : $criteria['expr']);
                $value = $criteria['value'];

                // Determines where method according with option
                switch ($whereMethod) {
                    case 'or':
                        $whereMethod = 'orWhere';
                        break;
                    default:
                        $whereMethod = 'andWhere';
                }

                // Exception for some $expression, update variables according with.
                switch ($expression) {
                    case 'lrlike':
                        $expression = 'like';
                        $value = '%'.$value.'%';
                        break;
                    case 'rlike':
                        $expression = 'like';
                        $value = $value.'%';
                        break;
                    case 'llike':
                        $expression = 'like';
                        $value = '%'.$value;
                        break;
                    case 'rbetween':
                        $expression = 'between';
                        $field = $criteria['value'][0];
                        $field2 = $criteria['value'][1];
                        $value = $criteria['field'];
                        break;
                }

                // Full file name (table.field)
                $table = $this->getFieldTable($field);
                if ($table) {
                    $field = ($table . '.' . $this->getLocalFieldMetadata($field, 'field', $metadata));
                    if (!empty($field2)) {
                        $field2 = ($table . '.' . $this->getLocalFieldMetadata($field2, 'field', $metadata));
                    }
                }

                // Add expression according the $expression
                switch ($expression) {
                    case 'isNull':
                    case 'isNotNull':
                        $qb->$whereMethod($qb->expr()->$expression($field));
                        break;
                    case 'between':
                        if (empty($field2)) {
                            $parameter += 2;
                            $qb->$whereMethod($qb->expr()->$expression($field, '?' . ($parameter - 2), '?' . ($parameter - 1)));
                            $qb->setParameter(($parameter - 2), $value[0]);
                            $qb->setParameter(($parameter - 1), $value[1]);
                        } else { // 'rbetween'
                            $parameter ++;
                            $qb->$whereMethod($qb->expr()->$expression('?' . $parameter, $field, $field2));
                            $qb->setParameter($parameter, $value);
                        }
                        break;
                    default:
                        $parameter++;
                        $qb->$whereMethod($qb->expr()->$expression($field, '?' . $parameter));
                        $qb->setParameter($parameter, $value);
                }
            }
        }

        // ORDER BY
        if (is_array($options['orderBy'])) {
            foreach ($options['orderBy'] as $orderBy) {
                if (in_array($orderBy['value'], array('ASC', 'DESC'))) {
                    $table = $this->getFieldTable($orderBy['field']);
                    if ($table) {
                        $qb->addOrderBy(
                            $table . '.' . $this->getLocalFieldMetadata($orderBy['field'], 'field', $metadata),
                            $orderBy['value']
                        );
                    } elseif (!empty($orderBy['field'])) {
                        // No metadata, need to be in the format "table.field"
                        $qb->addOrderBy($orderBy['field'], $orderBy['value']);
                    }
                }
            }
        }

        // LIMIT
        $limit = (empty($options['limit']) ? 1 : ($options['limit'] - 1));
        if (!empty($options['limit'])) {
            $qb->setMaxResults($options['limit']);
        }

        // OFFSET
        if (!empty($options['offset'])) {
            $qb->setFirstResult($options['offset']);
        }

        // Execute and return result
        if($hasExecute) {
            return $this->executeQueryBuilder($qb, $executeMethod);
        }

        // Don't execute and return query builder
        return $qb;
    }

    /**
     * Query Builder Add Select (recursive function to resolve dependencies)
     * @param $queryBuilder
     * @param $field
     * @param $select (array of select sentences, needs to be updated due to recursion)
     * @param $addedFields (all added fields, needs to be updated after each "add" to avoid duplication for dependencies)
     * @param $hasFields (determines if fields should be added to select or are used only for join)
     * @return $this
     */
    protected function queryBuilderAddSelect($queryBuilder, $field, &$select, &$addedFields, $hasFields = true)
    {
        $metadata = $this->getLocalMetadata();

        // Resolve dependency (recursive)
        $dependency = $this->getLocalFieldMetadata($field, 'dependency', $metadata);
        if (!empty($dependency)) {
            if (!in_array($dependency, $addedFields)) { // Avoid to repeat fields
                $addedFields[] = $dependency;
                $this->queryBuilderAddSelect($queryBuilder, $dependency, $select, $addedFields, $hasFields);
            }
        }

        // Add field
        switch ($this->getLocalFieldMetadata($field, 'type', $metadata)) {
            case 'object':
                $fieldObjectMetadata = $this->getLocalFieldMetadata($field, 'typeDetail', $metadata);
                // Table alias for join
                $tableAlias = $this->getLocalFieldMetadata($field, 'parentTable', $metadata);
                // Resolve table fields with self reference adding the prefix 'sr_'
                if ($tableAlias == $this->getLocalTable()) {
                    $tableAlias = ('sr_'.$tableAlias);
                }

                if ($fieldObjectMetadata && !empty($fieldObjectMetadata['reverseJoin'])) {
                    // Reverse join (join from child database)
                    $localTable = $this->getLocalTable();
                    $reverseField = ((substr($localTable, 0, 4) == 'app_')
                        ? lcfirst(HelperService::snakeCaseToCamelCase($localTable))
                        : $localTable
                    );
                    $reverseField .= 'Obj';

                    $queryBuilder->leftJoin(
                        $fieldObjectMetadata['entityClass'],
                        $tableAlias,
                        'WITH',
                        ($tableAlias.'.'.$reverseField.' = '.$localTable.'.id')
                    );
                } else {
                    $table = $this->getFieldTable($field);
                    $queryBuilder->leftJoin(
                        $table . '.' . $this->getLocalFieldMetadata($field, 'field', $metadata),
                        $tableAlias
                    );
                    // Used to get object with custom fields (don't returns an object but an array)
                    if ($hasFields) { $select[] = ($tableAlias . '.id AS ' . $field); }
                }
                break;
            default:
                if ($hasFields) {
                    $dbField = $this->getLocalFieldMetadata($field, 'field', $metadata); // Database field
                    if (empty($dbField)) { $dbField = $field; } // For fields without metadata like "COUNT(...) AS total"

                    $table = $this->getFieldTable($field);
                    if ($table) {
                        // Add table (if table is not defined, field needs to be in format "table.field")
                        $dbField = ($table . '.' . $dbField);
                    }

                    if ($dbField != $field) {
                        $dbField = ($dbField . ' AS ' . $field);
                    }

                    $select[] = $dbField;
                }
        }

        return $this;
    }

    /**
     * Get choices. Get objects to use as choices, like select, radio, etc.
     * @param bool $hasExecute
     * @param string $executeMethod
     * @param $options (array with queryBuilder options format)
     * @return mixed
     */
    public function getChoices($hasExecute = true, $executeMethod = 'getResult', $options = array())
    {
        $criteria = array(
            array(
                'field' => 'isEnabled',
                'expr' => 'eq',
                'value' => true
            )
        );

        $options['criteria'] = (empty($options['criteria'])
            ? $criteria
            : array_merge(
                $options['criteria'],
                $criteria
            )
        );

        $qb = $this->queryBuilder($options, false);

        if ($hasExecute) {
            $result = $this->executeQueryBuilder($qb, $executeMethod);

            if (!is_array($result)) {
                $result = array($result);
            }

            return $result;
        }

        return $qb;
    }

    /**
     * Count objects.
     * @param $options (array with queryBuilder options format)
     * @return mixed
     */
    public function count($options = null)
    {
        $table = $this->getLocalTable();

        $options = array(
            'fields' => array('COUNT('.$table.'.id) AS total'),
            'criteria' => (($options && isset($options['criteria'])) ? $options['criteria'] : array())
        );

        $result = $this->queryBuilder($options);

        return ((is_array($result) && isset(reset($result)['total'])) ? reset($result)['total'] : 0);
    }

    /**
     * Get objects (regular method to retrieve objects correctly).
     * @param $options (array with queryBuilder options format)
     * @return mixed
     */
    public function getObjects($options)
    {
        return $this->queryBuilder($options);
    }

    /**
     * Debug query builder
     * @param $queryBuilder
     * @return $this
     */
    public function debug($queryBuilder)
    {
        echo($queryBuilder->getQuery()->getSql());
        echo("<pre>");
        print_r($queryBuilder->getQuery()->getParameters());
        echo("</pre>");

        return $this;
    }
}
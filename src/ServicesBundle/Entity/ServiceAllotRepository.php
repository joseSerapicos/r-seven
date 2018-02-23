<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;
use BookingBundle\Entity\BookingServicePriceRepository;

/**
 * ServiceAllotRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ServiceAllotRepository extends BaseEntityRepository {
    static protected $metadata = null;

    /**
     * Get field metadata
     * @param $field
     * @param $attribute
     * @param $metadata (uses this metadata instead of local metadata)
     * @param $context ('view'|'form'|'none')
     * @return null
     */
    static public function getFieldMetadata($field, $attribute, $metadata = null, $context = 'none')
    {
        if (!$metadata) {
            $metadata = self::getMetadata();
        }
        return self::getLocalFieldMetadata($field, $attribute, $metadata, $context);
    }

    /**
     * Get local metadata (it needs to be implemented by children to get static variable with local metadata from parent)
     * @return mixed
     */
    protected function getLocalMetadata()
    {
        return $this->getMetadata();
    }

    /**
     * Get entity metadata
     * @return mixed
     */
    static function getMetadata()
    {
        // Process metadata only once
        if (self::$metadata) {
            return self::$metadata;
        }
        return self::$metadata = self::processMetadata(array(
            'id' => array('label' => 'Id', 'type' => 'number', 'acl' => 'read'),
            'serviceObj' => array('label' => 'Service', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'service', 'bundle' => 'services', 'type' => 'none')),
            'description' => array('label' => 'Description', 'type' => 'text', 'acl' => 'edit'),
            'allot' => array('label' => 'Allot', 'type' => 'number', 'acl' => 'edit'),
            'startDate' => array('label' => 'Start Date', 'type' => 'date', 'acl' => 'edit', 'view' => array(
                'typeDetail' => array('rules' => array(array('expr' => 'max', 'value' => 'endDate')))
            )),
            'endDate' => array('label' => 'End Date', 'type' => 'date', 'acl' => 'edit', 'view' => array(
                'typeDetail' => array('rules' => array(array('expr' => 'min', 'value' => 'startDate')))
            )),
            'targetServiceObj' => array('label' => 'Target', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'service', 'tableAlias' => 'service_target', 'bundle' => 'services', 'type' => 'none',
                    'fieldInView' => 'targetService_name', 'choices' => array('query' => 'getChoicesForServicePrice')),
                'isRequired' => false,
                'form' => array('type' => 'html-select')
            ),
            'targetService_name' => array('table' => 'service_target', 'field' => 'name', 'label' => 'Target',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'targetServiceObj', 'form' => array('type' => 'none')),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true)
        ));
    }

    /**
     * Get allot by date
     * @param $serviceObj (object)
     * @param $date
     * @param $allotTargetServiceObj (target service object, to get allot of specific service (like packages))
     * @return mixed
     */
    public function getAllotByDate($serviceObj, $date, $allotTargetServiceObj = null)
    {
        $localTable = $this->getLocalTable();

        // Fields
        $options['fields'] = array(
            "SUM(".$localTable.".allot) AS total"
        );

        // Criteria
        $options['criteria'] = array(
            array('field' => 'isEnabled', 'expr' => 'eq', 'value' => 1),
            array('field' => 'serviceObj', 'expr' => 'eq', 'value' => $serviceObj),
            array('field' => $date, 'expr' => 'rbetween', 'value' => array('startDate', 'endDate'))
        );
        if ($allotTargetServiceObj) {
            // Specific allot for $targetServiceObj
            $options['criteria'][] = array('field' => 'targetServiceObj', 'expr' => 'eq', 'value' => $allotTargetServiceObj);
        } else {
            // Regular allot
            $options['criteria'][] = array('field' => 'targetServiceObj', 'expr' => 'isNull', 'value' => null);
        }

        // Get query builder
        $totalAllot = $this->queryBuilder($options);
        $totalAllot = reset($totalAllot); // Get first element
        return (empty($totalAllot['total']) ? 0 : $totalAllot['total']);
    }
}
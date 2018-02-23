<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BasePriceExceptionRepository;
use AppBundle\Service\HelperService;

/**
 * ServicePriceExceptionRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ServicePriceExceptionRepository extends BasePriceExceptionRepository
{
    /**
     * Overrides parent
     * @return mixed
     */
    static function getMetadata()
    {
        // Process metadata only once
        if (self::$metadata) {
            return self::$metadata;
        }

        $parentMetadata = parent::getMetadata();

        $localMetadata = self::$metadata = self::processMetadata(array(
            'serviceObj' => array('label' => 'Service', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'service', 'bundle' => 'services', 'type' => 'none')),
            'description' => array('label' => 'Description', 'type' => 'text', 'acl' => 'edit'),
            'startDate' => array('label' => 'Start Date', 'type' => 'date', 'acl' => 'edit', 'view' => array(
                'typeDetail' => array('rules' => array(array('expr' => 'max', 'value' => 'endDate')))
            )),
            'endDate' => array('label' => 'End Date', 'type' => 'date', 'acl' => 'edit', 'view' => array(
                'typeDetail' => array('rules' => array(array('expr' => 'min', 'value' => 'startDate')))
            )),
            // Fields to determine VAT percentage
            'vatCodeObj' => array('table' => 'service', 'label' => 'VAT Code', 'type' => 'object',
                'acl' => 'read', 'dependency' => 'serviceObj',
                'typeDetail' => array(
                    'table' => 'vatCode', 'bundle' => 'accounting', 'type' => 'none'
                )
            ),
            'vatCode_percentage' => array('table' => 'vatCode', 'field' => 'percentage', 'label' => '', 'type' => 'hidden',
                'acl' => 'read', 'dependency' => 'vatCodeObj', 'form' => array('type' => 'none')),
            'targetServiceObj' => array('label' => 'Target', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'service', 'tableAlias' => 'service_target', 'bundle' => 'services', 'type' => 'none',
                    'fieldInView' => 'targetService_name', 'choices' => array('query' => 'getChoicesForServicePrice')),
                'isRequired' => false,
                'form' => array('type' => 'html-select')
            ),
            'targetService_name' => array('table' => 'service_target', 'field' => 'name', 'label' => 'Target',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'targetServiceObj', 'form' => array('type' => 'none'))
        ));

        return self::$metadata = HelperService::pushIntoArray($parentMetadata, $localMetadata, 'id');
    }

    /**
     * Get all objects by date (date inside of interval [startDate, endDate])
     * @param $serviceObj
     * @param $date
     * @param $options (array with queryBuilder options format)
     * @param $priceTargetServiceObj (target service object, to get price of specific service (like packages))
     * @return mixed
     */
    public function getCurrentPriceExceptionByDate($serviceObj, $date, $options = array(), $priceTargetServiceObj = null)
    {
        $options = array_merge_recursive(
            $options,
            array(
                'criteria' => array (
                    array('field' => 'isEnabled', 'expr' => 'eq', 'value' => 1),
                    array('field' => 'serviceObj', 'expr' => 'eq', 'value' => $serviceObj),
                    array('field' => $date, 'expr' => 'rbetween', 'value' => array('startDate', 'endDate'))
                ),
                'orderBy' => array(
                    array('field' => 'insertTime', 'value' => 'DESC')
                )
            )
        );
        if ($priceTargetServiceObj) {
            // Specific allot for $targetServiceObj
            $options['criteria'][] = array('field' => 'targetServiceObj', 'expr' => 'eq', 'value' => $priceTargetServiceObj);
        } else {
            // Regular allot
            $options['criteria'][] = array('field' => 'targetServiceObj', 'expr' => 'isNull', 'value' => null);
        }

        return $this->queryBuilder($options);
    }
}
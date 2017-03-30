<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * ServicePriceExceptionRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ServicePriceExceptionRepository extends BaseEntityRepository {
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
            // Not used (is automatically determined)
            'postingType' => array('label' => 'Posting Type', 'type' => 'none', 'acl' => 'read'),
            /*'postingType' => array('label' => 'Posting Type', 'type' => 'enum', 'acl' => 'read',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Debit' => 'DEBIT', 'Credit' => 'CREDIT'
                        )
                    )),
                'form' => array('type' => 'select')
            ),*/
            'costBaseValue' => array('label' => 'Cost Base Value', 'type' => 'enum', 'acl' => 'edit', 'isRequired' => false,
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            '' => '', 'Base Cost as Base' => 'BASE_COST'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'costMethod' => array('label' => 'Cost', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Percentage' => 'PERCENT', 'Fixed' => 'FIXED'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'costValue' => array('label' => 'Cost Value', 'type' => 'number', 'acl' => 'edit'),
            'marginBaseValue' => array('label' => 'Margin Base Value', 'type' => 'enum', 'acl' => 'edit', 'isRequired' => false,
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            '' => '', 'Cost as Base' => 'COST', 'Base sell as Base' => 'BASE_SELL'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'marginMethod' => array('label' => 'Margin', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Margin' => 'MARGIN', 'Markup' => 'MARKUP', 'Fixed' => 'FIXED', 'Percentage' => 'PERCENT'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'marginValue' => array('label' => 'Margin Value', 'type' => 'number', 'acl' => 'edit'),
            'startDate' => array('label' => 'Start Date', 'type' => 'date', 'acl' => 'edit', 'view' => array(
                'typeDetail' => array('rules' => array(array('expr' => 'max', 'value' => 'endDate')))
            )),
            'endDate' => array('label' => 'End Date', 'type' => 'date', 'acl' => 'edit', 'view' => array(
                'typeDetail' => array('rules' => array(array('expr' => 'min', 'value' => 'startDate')))
            )),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true)
        ));
    }

    /**
     * Get all objects by date (date inside of interval [startDate, endDate])
     * @param $serviceObj
     * @param $date
     * @param $options (array with queryBuilder options format)
     * @return mixed
     */
    public function getCurrentPriceExceptionByDate($serviceObj, $date, $options = array())
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

        return $this->queryBuilder($options);
    }
}
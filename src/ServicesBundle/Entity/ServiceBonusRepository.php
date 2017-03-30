<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * ServiceBonusRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ServiceBonusRepository extends BaseEntityRepository {
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
            'rule' => array('label' => 'Rule', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Pax' => 'PAX', 'Days' => 'DAYS'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'ruleExpr' => array('label' => 'Rule Expression', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            '>' => '>', '<' => '<', '=' => '='
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'ruleValue' => array('label' => 'Rule Value', 'type' => 'number', 'acl' => 'edit'),
            'bonusServiceObj' => array('label' => 'Bonus Service', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'service', 'fieldInView' => 'bonusService', 'bundle' => 'services', 'type' => 'none'),
                'form' => array('type' => 'html-select')
            ),
            'bonusService' => array('table' => 'service', 'field' => 'name', 'label' => 'Bonus Service', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'bonusServiceObj', 'form' => array('type' => 'none')),
            'bonusType' => array('label' => 'Bonus Type', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Percentage' => 'PERCENTAGE', 'Fixed' => 'FIXED'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'bonusValue' => array('label' => 'Bonus Value', 'type' => 'number', 'acl' => 'edit'),
            'paxToApplyType' => array('label' => 'Pax to Apply', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'All' => 'ALL', 'Fixed' => 'FIXED', 'After' => 'AFTER'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'paxToApplyValue' => array('label' => 'Pax to Apply Value', 'type' => 'number', 'acl' => 'edit'),
            'daysToApplyType' => array('label' => 'Days to Apply', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'All' => 'ALL', 'Fixed' => 'FIXED', 'After' => 'AFTER'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'daysToApplyValue' => array('label' => 'Days to Apply Value', 'type' => 'number', 'acl' => 'edit'),
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
}
<?php

namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * EntitySettingRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class EntitySettingRepository extends BaseEntityRepository
{
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
            'storeObj' => array('label' => 'Store', 'type' => 'object', 'acl' => 'edit', 'typeDetail' => array(
                'table' => 'store', 'bundle' => 'admin', 'type' => 'none'), 'isRequired' => false,
                'form' => array('type' => 'select')
            ),
            'store_name' => array('table' => 'store', 'field' => 'name', 'label' => 'Store', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'storeObj', 'form' => array('type' => 'none')),
            'seriesPrefix' => array('label' => 'Series Prefix', 'type' => 'text', 'acl' => 'edit'),
            'seriesNumber' => array('label' => 'Series Number', 'type' => 'number', 'acl' => 'edit'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'none', 'acl' => 'edit', 'default' => true)
        ));
    }
}
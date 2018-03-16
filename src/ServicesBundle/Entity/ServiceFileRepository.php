<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * ServiceFileRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ServiceFileRepository extends BaseEntityRepository
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
            'serviceObj' => array('label' => 'Service', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'service', 'bundle' => 'services', 'type' => 'none')),
            'name' => array('label' => 'Name', 'type' => 'text', 'acl' => 'read'),
            'path' => array('label' => 'File Path', 'type' => 'file', 'acl' => 'edit'),
            'extension' => array('label' => 'Extension', 'type' => 'text', 'acl' => 'read'),
            'size' => array('label' => 'Size', 'type' => 'number', 'acl' => 'read'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true,
                'view' => array('keepOriginalNormalizer' => true)
            )
        ));
    }
}
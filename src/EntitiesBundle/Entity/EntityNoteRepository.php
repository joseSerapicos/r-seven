<?php

namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * EntityNoteRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class EntityNoteRepository extends BaseEntityRepository
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
            'entityObj' => array('label' => 'Entity', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'entity', 'bundle' => 'entities', 'type' => 'none')),
            'name' => array('label' => 'Name/Title', 'type' => 'text', 'acl' => 'edit'),
            'description' => array('label' => 'Description', 'type' => 'textarea', 'acl' => 'edit', 'attr' => array('rows' => '3')),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true)
        ));
    }
}
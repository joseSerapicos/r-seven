<?php

namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * EntityGroupEntityRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class EntityGroupEntityRepository extends BaseEntityRepository
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
            'id' => array('label' => 'Id', 'type' => 'number', 'acl' => 'read',
                'form' => array('type' => 'none')
            ),
            'entityGroupObj' => array('label' => 'Entity Group', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'entityGroup', 'bundle' => 'entities', 'type' => 'none')),
            'entityObj' => array('label' => 'Entity', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'entity', 'bundle' => 'entities', 'type' => 'number'
                ),
                'form' => array('type' => 'auto-complete')
            ),
            'insertTime' => array('label' => 'Insert Time', 'acl' => 'read', 'type' => 'datetime',
                'form' => array('type' => 'none')
            ),
            'insertUser' => array('label' => 'Insert User', 'acl' => 'read', 'type' => 'text',
                'form' => array('type' => 'none')
            ),
            'isEnabled' => array('label' => 'Enabled', 'acl' => 'read', 'type' => 'boolean', 'default' => true,
                'form' => array('type' => 'none')
            ),

            // Foreign fields, used to get the name of the entity to list registers
            // Table is not defined, because field already have the table defined
            'name' => array('table' => '', 'label' => 'Name', 'type' => 'text', 'acl' => 'read',
                'field' => "CONCAT(entity.name, ' ', entity.surname)",
                'dependency' => 'entityObj', 'form' => array('type' => 'none'),
                'normalizer' => array('method' => '__toString')
            )
        ));
    }
}
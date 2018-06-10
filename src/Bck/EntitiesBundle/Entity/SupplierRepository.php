<?php

namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * EntityEmailRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SupplierRepository extends BaseEntityRepository
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

        $localTable = lcfirst(substr(strrchr(get_called_class(), '\\'), 1, -10));

        return self::$metadata = self::processMetadata(array(
            'id' => array('label' => 'Id', 'type' => 'none', 'acl' => 'read'),
            'code' => array('label' => 'Code', 'field' => 'CONCAT('.$localTable.'.codePrefix, '.$localTable.'.codeNumber)',
                'table' => '', 'type' => 'code', 'acl' => 'read',
                'normalizer' => array('method' => 'getCode')
            ),
            // Used in auto-complete (used the fake field "selectEntityObj")
            'selectEntityObj' => array('field' => 'selectEntityObj', 'label' => 'Entity', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'entity', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none', 'fieldInView' => 'name'
                ),
                'attr' => array(
                    '(onChange)' => 'onEntityChange($event)',
                    '[placeholder]' => "'Entity'"
                ),
                'form' => array('type' => 'auto-complete'), 'isRequired' => false
            ),
            'entityObj' => array('field' => 'entityObj', 'label' => 'Entity', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'entity', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none',
                    'metadata' => array('method' => 'merge', 'persist' => false, 'pushAfterField' => 'selectEntityObj')
                ),
                'form' => array('type' => 'embed', 'typeClass' => 'EntityNoCode')
            ),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read', 'form' => array('type' => 'none')),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read', 'form' => array('type' => 'none')),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true,
                'view' => array('keepOriginalNormalizer' => true)
            )
        ));
    }
}
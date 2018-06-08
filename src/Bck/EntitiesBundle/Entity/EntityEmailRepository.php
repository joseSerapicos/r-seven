<?php

namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * EntityEmailRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class EntityEmailRepository extends BaseEntityRepository
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
                'table' => 'entity', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none')),
            'name' => array('label' => 'Name / Description', 'type' => 'text', 'acl' => 'edit'),
            'email' => array('label' => 'Email', 'type' => 'text', 'acl' => 'edit'),
            'isDefault' => array('label' => 'Default Email', 'type' => 'boolean', 'acl' => 'edit'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read', 'form' => array('type' => 'none')),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read', 'form' => array('type' => 'none')),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true,
                'view' => array('keepOriginalNormalizer' => true)
            )
        ));
    }

    /**
     * Get default email by entity
     * @param $entity
     * @param $returnEmail (return only the email string)
     * @return string
     */
    public function getDefaultEmailByEntity($entity, $returnEmail = false)
    {
        $options = array(
            'criteria' => array(
                array('field' => 'isEnabled', 'expr' => 'eq', 'value' => 1),
                array('field' => 'entityObj', 'expr' => 'eq', 'value' => $entity)
            ),
            'orderBy' => array(
                array('field' => 'isDefault', 'value' => 'DESC')
            )
        );

        if ($returnEmail) {
            $options['fields'] = array(
                'email'
            );
        }

        $objects = $this->queryBuilder(
            $options,
            true,
            ($returnEmail ? null : 'getResult') // To return object
        );

        if (is_array($objects) && (count($objects) > 0)) {
            if ($returnEmail) {
                return reset($objects)['email'];
            }

            return reset($objects);
        }

        if ($returnEmail) {
            return '';
        }

        return null;
    }
}
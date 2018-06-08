<?php

namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * EntityContactsRepository
 */
class EntityContactsRepository extends BaseEntityRepository
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
            'entityObj' => array('label' => 'Entity', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'entity', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none')
            ),
            'entityAddressObj' => array('label' => 'Address', 'type' => 'object', 'acl' => 'edit',
                'attr' => array(
                    '(onChange)' => 'onEntityAddressChange($event)',
                    '[placeholder]' => 'Address'
                ),
                'typeDetail' => array(
                    'table' => 'entityAddress', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none',
                    'fieldInView' => 'entityAddress_label'),
                'form' => array('type' => 'auto-complete', 'isMapped' => false), 'isRequired' => true
            ),
            'entityAddress_label' => array('table' => 'entityAddress', 'field' => 'street1', 'label' => 'Address',
                'type' => 'text', 'acl' => 'read', 'isDefault' => true, 'dependency' => 'entityAddressObj',
                'form' => array('type' => 'none')),
            'entityPhoneObj' => array('label' => 'Phone', 'type' => 'object', 'acl' => 'edit',
                'attr' => array(
                    '(onChange)' => 'onEntityPhoneChange($event)',
                    '[placeholder]' => 'Phone'
                ),
                'typeDetail' => array(
                    'table' => 'entityPhone', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none',
                    'fieldInView' => 'entityPhone_label'),
                'form' => array('type' => 'auto-complete', 'isMapped' => false), 'isRequired' => true
            ),
            'entityPhone_label' => array('table' => 'entityPhone', 'field' => 'phone', 'label' => 'Phone',
                'type' => 'text', 'acl' => 'read', 'isDefault' => true, 'dependency' => 'entityPhoneObj',
                'form' => array('type' => 'none')),
            'entityEmailObj' => array('label' => 'Email', 'type' => 'object', 'acl' => 'edit',
                'attr' => array(
                    '(onChange)' => 'onEntityEmailChange($event)',
                    '[placeholder]' => 'Email'
                ),
                'typeDetail' => array(
                    'table' => 'entityEmail', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none',
                    'fieldInView' => 'entityEmail_label'),
                'form' => array('type' => 'auto-complete', 'isMapped' => false), 'isRequired' => true
            ),
            'entityEmail_label' => array('table' => 'entityEmail', 'field' => 'email', 'label' => 'Email',
                'type' => 'text', 'acl' => 'read', 'isDefault' => true, 'dependency' => 'entityEmailObj',
                'form' => array('type' => 'none'))
        ));
    }
}
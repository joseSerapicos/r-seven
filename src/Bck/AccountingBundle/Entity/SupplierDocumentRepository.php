<?php

namespace Bck\AccountingBundle\Entity;

use AppBundle\Service\HelperService;

/**
 * SupplierDocumentRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SupplierDocumentRepository extends BaseDocumentRepository
{
    static protected $metadata = null;

    /**
     * Defines parent method
     * @return string
     */
    protected function getLocalEntityContext()
    {
        return 'supplier';
    }

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
     * Get entity metadata
     * @return mixed
     */
    static function getMetadata()
    {
        // Process metadata only once
        if (self::$metadata) {
            return self::$metadata;
        }

        $parentMetadata = parent::getMetadata();

        $localMetadata = self::processMetadata(array(
            'supplierDocumentTypeObj' => array('label' => 'Document Type', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array('table' => 'supplierDocumentType', 'bundlePrefix' => 'bck', 'bundle' => 'accounting', 'type' => 'none'),
                'form' => array('type' => 'select')
            ),
            // Foreign fields (is not used the entity type prefix (supplier),
            // to make fields compatibles with all entity types (supplier, entity, etc.), except in "Obj" fields)
            'documentType_name' => array('table' => 'supplierDocumentType', 'field' => 'name', 'label' => 'Doc. Name',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'supplierDocumentTypeObj',
                'form' => array('type' => 'none')
            ),
            'documentType_type' => array('table' => 'supplierDocumentType', 'field' => 'type', 'label' => 'Doc. Type',
                'type' => 'hidden', 'acl' => 'read', 'dependency' => 'supplierDocumentTypeObj',
                'form' => array('type' => 'none')
            ),
            'documentType_operation' => array('table' => 'supplierDocumentType', 'field' => 'operation', 'label' => 'Doc. Operation',
                'type' => 'hidden', 'acl' => 'read', 'dependency' => 'supplierDocumentTypeObj',
                'form' => array('type' => 'none')
            ),
            'supplierObj' => array('label' => 'Supplier', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'supplier', 'fieldInView' => 'entity_name', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none'),
                'form' => array('type' => 'auto-complete')
            ),
            'entityObj' => array('table' => 'supplier', 'field' => 'entityObj', 'label' => 'nd',
                'type' => 'object', 'acl' => 'read', 'dependency' => 'supplierObj', 'typeDetail' => array(
                    'table' => 'entity', 'tableAlias' => 'entity', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none')
            ),
            'entity_avatar' => array('table' => 'entity', 'field' => 'avatar', 'label' => 'Supplier',
                'type' => 'avatar', 'acl' => 'read', 'dependency' => 'entityObj', 'form' => array('type' => 'none')),
            'entity_name' => array('table' => 'entity', 'field' => 'name', 'label' => 'Supplier Name',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'entityObj', 'form' => array('type' => 'none')),
            'entityAddressObj' => array('label' => 'Address', 'type' => 'object', 'acl' => 'edit',
                'attr' => array(
                    '(onChange)' => 'onEntityAddressChange($event)',
                    '[placeholder]' => "'Address'"
                ),
                'typeDetail' => array(
                    'table' => 'entityAddress', 'bundlePrefix' => 'bck', 'bundle' => 'entities', 'type' => 'none'),
                'form' => array('type' => 'auto-complete', 'isMapped' => false), 'isRequired' => false
            )
        ));

        return self::$metadata = HelperService::pushIntoArray($parentMetadata, $localMetadata, 'id');
    }
}
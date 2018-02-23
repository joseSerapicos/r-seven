<?php

namespace AccountingBundle\Entity;

use AppBundle\Service\HelperService;

/**
 * SupplierDocumentTypeSettingRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SupplierDocumentTypeSettingRepository extends BaseDocumentTypeSettingRepository
{
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
                'typeDetail' => array(
                    'table' => 'supplierDocumentType', 'bundle' => 'accounting', 'type' => 'none'
                ),
                'form' => array('type' => 'select')
            ),
            'documentType_name' => array('field' => 'name', 'table' => 'supplierDocumentType', 'label' => 'Document Type',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'supplierDocumentTypeObj',
                'form' => array('type' => 'none')
            )
        ));

        return self::$metadata = HelperService::pushIntoArray($parentMetadata, $localMetadata, 'id');
    }
}
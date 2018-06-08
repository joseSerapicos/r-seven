<?php

namespace Bck\AccountingBundle\Entity;

use AppBundle\Service\HelperService;

/**
 * ClientDocumentReceiptPaymentRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ClientDocumentReceiptPaymentRepository extends BaseDocumentReceiptPaymentRepository
{
    static protected $metadata = null;

    /**
     * Defines parent method
     * @return string
     */
    protected function getLocalEntityContext()
    {
        return 'client';
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
            'clientDocumentObj' => array('label' => 'Client Current Account', 'type' => 'object', 'acl' => 'read',
                'typeDetail' => array('table' => 'clientDocument', 'bundlePrefix' => 'bck', 'bundle' => 'accounting', 'type' => 'none')),
            'clientPaymentRequestObj' => array('label' => '', 'type' => 'object', 'acl' => 'read',
                'typeDetail' => array('table' => 'clientPaymentRequest', 'bundlePrefix' => 'bck', 'bundle' => 'accounting', 'type' => 'none'))
        ));

        return self::$metadata = HelperService::pushIntoArray($parentMetadata, $localMetadata, 'id');
    }

    /**
     * Client Payment Request Object
     * @param $clientPaymentRequestObj
     * @return mixed
     */
    public function setRemainReceiptEmission($clientPaymentRequestObj)
    {
        // Entities names
        $localTable = $this->getLocalTable();

        $options = array(
            'fields' => array(
                "SUM(" . $localTable . ".value) AS total"
            ),
            'criteria' => array (
                array(
                    'field' => ('clientPaymentRequestObj'),
                    'expr' => 'eq',
                    'value' => $clientPaymentRequestObj->getId()
                )
            )
        );

        // Get query builder
        $qb = $this->queryBuilder($options, false);

        // Get document
        $qb->innerJoin($localTable.'.clientDocumentObj',
            'document',
            'WITH',
            'document.isEnabled = 1'
        );

        $total = $this->executeQueryBuilder($qb);
        $total = reset($total); // First element of array

        $clientPaymentRequestObj->setRemainReceiptEmission($clientPaymentRequestObj->getValue() - $total['total']);

        return $clientPaymentRequestObj;
    }
}
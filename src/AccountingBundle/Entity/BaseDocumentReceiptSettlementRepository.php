<?php

namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;
use AppBundle\Service\HelperService;

/**
 * BaseDocumentReceiptSettlementRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
abstract class BaseDocumentReceiptSettlementRepository extends BaseEntityRepository
{
    /**
     * Get context (it needs to be implemented by children to get the correct context <client, supplier, entity>)
     * @return string
     */
    abstract protected function getContext();

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
        return self::processMetadata(array(
            'id' => array('label' => 'Id', 'type' => 'none', 'acl' => 'read'),
            'value' => array('label' => 'Value', 'type' => 'number', 'acl' => 'edit',
                'attr' => array(
                    '(input)' => 'onValueEnterKey($event.target.value)',
                    '(focusout)' => 'onValueEnterKey($event.target.value)'
                )
            ),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read', 'form' => array('type' => 'none')),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read', 'form' => array('type' => 'none')),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'none', 'acl' => 'edit', 'default' => true)
        ));
    }

    /**
     * Get document remain settlement
     * @param $documentObject
     * @return mixed
     */
    public function getDocumentRemainSettlement($documentObject)
    {
        // Validate context
        $context = $this->getContext();
        if (!in_array($context, array('client', 'supplier', 'entity'))) {
            return array();
        }

        // Entities names
        $localTable = $this->getLocalTable();

        $options = array(
            'fields' => array(
                "SUM(" . $localTable . ".value) AS totalSettlement",
            ),
            'criteria' => array (
                array(
                    'field' => ('invoice' . ucfirst($context) . 'DocumentObj'),
                    'expr' => 'eq',
                    'value' => $documentObject->getId()
                ),
                array(
                    'field' => 'isEnabled',
                    'expr' => 'eq',
                    'value' => 1
                )
            )
        );

        $totalSettlement = $this->queryBuilder($options);
        $totalSettlement = reset($totalSettlement); // First element of array

        return ($documentObject->getTotal() - $totalSettlement['totalSettlement']);
    }

    /**
     * Set document remain settlement
     * @param $documentObject
     * @return mixed
     */
    public function setDocumentRemainSettlement($documentObject)
    {
        $documentObject->setRemainSettlement($this->getDocumentRemainSettlement($documentObject));

        return $documentObject;
    }
}
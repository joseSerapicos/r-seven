<?php

namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;
use AppBundle\Service\HelperService;

/**
 * BaseDocumentReceiptPaymentRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
abstract class BaseDocumentReceiptPaymentRepository extends BaseEntityRepository
{
    /**
     * Get Local Entity Context.
     * @return mixed (lowerCamelCase)
     */
    abstract protected function getLocalEntityContext();

    /**
     * Get entity context (it needs to be implemented by children to get the correct context <client, supplier, entity>)
     * @param $isUpperCase
     * @return mixed (lowerCamelCase)
     */
    public function getEntityContext($isUpperCase = false) {
        return ($isUpperCase ? ucfirst($this->getLocalEntityContext()) : $this->getLocalEntityContext());
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
        return self::processMetadata(array(
            'id' => array('label' => 'Id', 'type' => 'none', 'acl' => 'read'),
            'paymentType' => array('label' => 'Payment Type', 'type' => 'text', 'acl' => 'edit'),
            'reference' => array('label' => 'Reference', 'type' => 'text', 'acl' => 'edit'),
            'description' => array('label' => 'Description', 'type' => 'text', 'acl' => 'edit'),
            'value' => array('label' => 'Value', 'type' => 'number', 'acl' => 'edit'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read', 'form' => array('type' => 'none')),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read', 'form' => array('type' => 'none')),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'none', 'acl' => 'edit', 'default' => true)
        ));
    }

    /**
     * Set document totals
     * @param $documentObj
     * @return mixed
     */
    public function setDocumentTotals($documentObj)
    {
        $localTable = $this->getLocalTable();
        $entityContext = $this->getEntityContext();

        $options = array(
            'fields' => array(
                "SUM(". $localTable . ".value) AS total"
            ),
            'criteria' => array (
                array(
                    'field' => ($entityContext . 'DocumentObj'),
                    'expr' => 'eq',
                    'value' => $documentObj
                )
            )
        );

        $total = $this->queryBuilder($options);
        $total = reset($total); // First element of array
        $documentObj->setSubTotal($total['total']);

        return $documentObj;
    }
}
<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;

class ClientDocumentInvoiceDetailType extends BaseType
{
    /**
     * Initialization of variables.
     * @return mixed
     */
    protected function init()
    {
        // Initialize only once
        if(!empty($this->entityClass)) {
            return $this;
        }

        $this->entityClass = 'AccountingBundle\Entity\ClientDocumentInvoiceDetail';
        $this->entityRepositoryClass = 'AccountingBundle\Entity\ClientDocumentInvoiceDetailRepository';

        return $this;
    }
}
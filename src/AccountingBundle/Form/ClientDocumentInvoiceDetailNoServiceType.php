<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;

class ClientDocumentInvoiceDetailNoServiceType extends BaseType
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

        // Define fields
        $repositoryClass = $this->entityRepositoryClass;
        $this->entityMetadata = $repositoryClass::getMetadata();
        unset($this->entityMetadata['serviceObj']);

        return $this;
    }
}
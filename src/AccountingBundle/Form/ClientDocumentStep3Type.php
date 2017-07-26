<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ClientDocumentStep3Type
 * @package AccountingBundle\Form
 * This form is separated by steps for wizard
 * Used for receipt
 */
class ClientDocumentStep3Type extends BaseType
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

        $this->entityClass = 'AccountingBundle\Entity\ClientDocument';
        $this->entityRepositoryClass = 'AccountingBundle\Entity\ClientDocumentRepository';

        // Define fields
        $repositoryClass = $this->entityRepositoryClass;
        $this->entityMetadata = $repositoryClass::getMetadata();
        unset($this->entityMetadata['clientDocumentTypeObj'], $this->entityMetadata['clientObj'],
            $this->entityMetadata['dueDate'],
            $this->entityMetadata['subTotal'], $this->entityMetadata['totalVat'], $this->entityMetadata['total']
        );

        return $this;
    }
}
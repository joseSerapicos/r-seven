<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class ClientDocumentStep1Type
 * @package AccountingBundle\Form
 * This form is separated by steps for wizard
 */
class ClientDocumentStep1Type extends BaseType
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
        $this->entityDatabase = 'local_database';

        // Define fields
        $repositoryClass = $this->entityRepositoryClass;
        $this->entityMetadata = $repositoryClass::getMetadata();
        $this->entityMetadata = array(
            'clientDocumentTypeObj' => $this->entityMetadata['clientDocumentTypeObj'],
            'clientObj' => $this->entityMetadata['clientObj']
        );

        return $this;
    }
}
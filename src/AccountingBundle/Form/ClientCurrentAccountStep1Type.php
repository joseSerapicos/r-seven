<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class ClientCurrentAccountStep1Type
 * @package AccountingBundle\Form
 * This form is separated by steps for wizard
 */
class ClientCurrentAccountStep1Type extends BaseType
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

        $this->entityClass = 'AccountingBundle\Entity\ClientCurrentAccount';
        $this->entityRepositoryClass = 'AccountingBundle\Entity\ClientCurrentAccountRepository';
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
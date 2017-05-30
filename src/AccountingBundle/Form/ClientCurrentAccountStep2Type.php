<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ClientCurrentAccountStep2Type
 * @package AccountingBundle\Form
 * This form is separated by steps for wizard
 */
class ClientCurrentAccountStep2Type extends BaseType
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

        // Define fields
        $repositoryClass = $this->entityRepositoryClass;
        $this->entityMetadata = $repositoryClass::getMetadata();
        unset($this->entityMetadata['clientDocumentTypeObj'], $this->entityMetadata['clientObj']);

        return $this;
    }
}
<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;

class ClientCurrentAccountDetailType extends BaseType
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

        $this->entityClass = 'AccountingBundle\Entity\ClientCurrentAccountDetail';
        $this->entityRepositoryClass = 'AccountingBundle\Entity\ClientCurrentAccountDetailRepository';

        return $this;
    }
}
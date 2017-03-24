<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;

class StoreAddressType extends BaseType
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

        $this->entityClass = 'AdminBundle\Entity\StoreAddress';
        $this->entityRepositoryClass = 'AdminBundle\Entity\StoreAddressRepository';

        return $this;
    }
}
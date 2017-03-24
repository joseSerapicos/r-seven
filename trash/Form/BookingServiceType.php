<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;

class BookingServiceType extends BaseType
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

        $this->entityClass = 'BookingBundle\Entity\BookingService';
        $this->entityRepositoryClass = 'BookingBundle\Entity\BookingServiceRepository';
        $this->entityDatabase = 'local_database';

        return $this;
    }
}
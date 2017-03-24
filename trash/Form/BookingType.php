<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;

class BookingType extends BaseType
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

        $this->entityClass = 'BookingBundle\Entity\Booking';
        $this->entityRepositoryClass = 'BookingBundle\Entity\BookingRepository';
        $this->entityDatabase = 'local_database';

        return $this;
    }
}
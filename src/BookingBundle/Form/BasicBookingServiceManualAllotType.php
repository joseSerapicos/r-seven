<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class BasicBookingServiceManualAllotType extends BaseType
{
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'BookingBundle\Entity\BasicBookingService';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');

        return $this;
    }

    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        // Redefine fields
        $this->entityMetadata = array(
            'bookingServiceObj' => $this->entityMetadata['bookingServiceObj'],
            'isEnabled' => $this->entityMetadata['isEnabled']
        );
        $this->entityMetadata['bookingServiceObj']['typeDetail']['formClass'] = 'BookingBundle\Form\BookingServiceManualAllotType';


        return $this;
    }
}
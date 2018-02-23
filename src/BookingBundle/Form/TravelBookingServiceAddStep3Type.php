<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class TravelBookingServiceAddStep3Type extends BaseType
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

        $this->conf['entityClass'] = 'BookingBundle\Entity\TravelBookingService';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';

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
            'placeObj' => $this->entityMetadata['placeObj'],
            'placeToObj' => $this->entityMetadata['placeToObj']
        );
        $this->entityMetadata['bookingServiceObj']['typeDetail']['formClass'] = 'BookingBundle\Form\BookingServiceAddStep3Type';

        return $this;
    }
}
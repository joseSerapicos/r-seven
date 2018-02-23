<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class BasicBookingServiceType extends BaseType
{
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
        $this->entityMetadata['bookingServiceObj']['typeDetail']['formClass'] = 'BookingBundle\Form\BookingServiceType';


        return $this;
    }
}
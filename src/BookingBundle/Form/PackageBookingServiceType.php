<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class PackageBookingServiceType extends BaseType
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
            'placeObj' => $this->entityMetadata['placeObj'],
            'placeToObj' => $this->entityMetadata['placeToObj'],
            'isEnabled' => $this->entityMetadata['isEnabled']
        );
        $this->entityMetadata['bookingServiceObj']['typeDetail']['formClass'] = 'BookingBundle\Form\BookingServiceType';


        return $this;
    }
}
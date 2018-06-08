<?php
namespace Bck\BookingBundle\Form;

use AppBundle\Form\BaseType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;

class PackageBookingAddStep1Type extends BaseType
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

        $this->conf['entityClass'] = 'Bck\BookingBundle\Entity\PackageBooking';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'wizard';

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
        $this->entityMetadata = array('bookingObj' => $this->entityMetadata['bookingObj']);
        $this->entityMetadata['bookingObj']['typeDetail']['formClass'] = 'Bck\BookingBundle\Form\BookingAddStep1Type';

        return $this;
    }
}
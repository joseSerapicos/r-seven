<?php
namespace Bck\BookingBundle\Form;

use AppBundle\Form\BaseType;

class BookingAddStep1Type extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'Bck\BookingBundle\Entity\Booking';
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
            'userObj' => $this->entityMetadata['userObj'],
            'clientObj' => $this->entityMetadata['clientObj'],
            'clientIsPax' => $this->entityMetadata['clientIsPax']
        );

        return $this;
    }
}
<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class BookingServiceAddStep1Type extends BaseType
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

        $this->conf['entityClass'] = 'BookingBundle\Entity\BookingService';
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
        $this->entityMetadata = array('serviceObj' => $this->entityMetadata['serviceObj']);

        return $this;
    }
}
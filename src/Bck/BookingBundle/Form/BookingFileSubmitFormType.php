<?php
namespace Bck\BookingBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class BookingFileSubmitFormType
 * Configure form to be handle with submitted data
 * @package BckBookingBundle\Form
 */
class BookingFileSubmitFormType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\BookingBundle\Entity\BookingFile';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
<?php
namespace Bck\BookingBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class BookingFileRenderFlatFormType
 * Configure form to be rendered in view
 * @package BckBookingBundle\Form
 */
class BookingFileRenderFlatFormType extends BaseType
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
        $this->conf['class'] = 'm-t-md dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class BookingFileSubmitFlatFormType
 * Configure form to be handle with submitted data
 * @package BookingBundle\Form
 */
class BookingFileSubmitFlatFormType extends BaseType
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

        $this->conf['entityClass'] = 'BookingBundle\Entity\BookingFile';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'm-t-md dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
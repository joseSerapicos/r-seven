<?php
namespace Bck\ServicesBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ServiceFileSubmitFlatFormType
 * Configure form to be handle with submitted data
 * @package BckBookingBundle\Form
 */
class ServiceFileSubmitFlatFormType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\ServicesBundle\Entity\ServiceFile';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'm-t-md dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
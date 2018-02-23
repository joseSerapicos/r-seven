<?php
namespace ServicesBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ServiceFileSubmitFlatFormType
 * Configure form to be handle with submitted data
 * @package BookingBundle\Form
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

        $this->conf['entityClass'] = 'ServicesBundle\Entity\ServiceFile';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'm-t-md dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
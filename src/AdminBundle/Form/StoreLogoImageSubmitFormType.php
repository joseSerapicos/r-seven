<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class StoreLogoImageSubmitFormType
 * Configure form to be handle with submitted data
 * @package BookingBundle\Form
 */
class StoreLogoImageSubmitFormType extends BaseType
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

        $this->conf['entityClass'] = 'AdminBundle\Entity\StoreLogoImage';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
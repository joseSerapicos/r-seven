<?php
namespace EntitiesBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class EntityFileRenderFlatFormType
 * Configure form to be rendered in view
 * @package BookingBundle\Form
 */
class EntityFileRenderFlatFormType extends BaseType
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

        $this->conf['entityClass'] = 'EntitiesBundle\Entity\EntityFile';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'm-t-md dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
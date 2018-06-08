<?php
namespace Bck\EntitiesBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class EntityFileRenderFormType
 * Configure form to be rendered in view
 * @package BckBookingBundle\Form
 */
class EntityFileRenderFormType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\EntitiesBundle\Entity\EntityFile';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
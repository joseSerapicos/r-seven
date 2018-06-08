<?php
namespace Bck\ServicesBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ServiceVideoSubmitFileSourceFormType
 * Configure form to be handle with submitted data
 * @package BckEntitiesBundle\Form
 */
class ServiceVideoSubmitFileSourceFormType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\ServicesBundle\Entity\ServiceVideo';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
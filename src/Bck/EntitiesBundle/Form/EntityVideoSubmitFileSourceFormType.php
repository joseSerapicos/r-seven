<?php
namespace Bck\EntitiesBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class EntityVideoSubmitFileSourceFormType
 * Configure form to be handle with submitted data
 * @package BckEntitiesBundle\Form
 */
class EntityVideoSubmitFileSourceFormType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\EntitiesBundle\Entity\EntityVideo';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;

        return $this;
    }
}
<?php
namespace EntitiesBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class EntityVideoRenderFileSourceFormType
 * Configure form to be rendered in view
 * @package EntitiesBundle\Form
 */
class EntityVideoRenderFileSourceFormType extends BaseType
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

        $this->conf['entityClass'] = 'EntitiesBundle\Entity\EntityVideo';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'dropzone';
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
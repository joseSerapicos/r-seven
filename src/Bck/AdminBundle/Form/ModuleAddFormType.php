<?php
namespace Bck\AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ModuleAddFormType
 * @package BckAdminBundle\Form
 */
class ModuleAddFormType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\AdminBundle\Entity\Module';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'wizard';

        return $this;
    }
}
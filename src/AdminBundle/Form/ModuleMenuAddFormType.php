<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ModuleMenuAddFormType
 * @package AdminBundle\Form
 */
class ModuleMenuAddFormType extends BaseType
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

        $this->conf['entityClass'] = 'AdminBundle\Entity\ModuleMenu';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'wizard';

        return $this;
    }
}
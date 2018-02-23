<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class UserAddNoAdminType
 * Form to add user for no admin users
 * @package AdminBundle\Form
 */
class UserAddNoAdminType extends BaseType
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

        $this->conf['entityClass'] = 'AdminBundle\Entity\User';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'wizard';

        return $this;
    }

    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        // Redefine fields
        unset($this->entityMetadata['password'], $this->entityMetadata['role']);

        return $this;
    }
}
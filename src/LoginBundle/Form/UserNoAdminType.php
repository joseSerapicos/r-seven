<?php
namespace LoginBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class UserNoAdminType
 * User form for no admin users
 * @package BckAdminBundle\Form
 */
class UserNoAdminType extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'LoginBundle\Entity\User';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');

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
        unset($this->entityMetadata['role']);

        return $this;
    }
}
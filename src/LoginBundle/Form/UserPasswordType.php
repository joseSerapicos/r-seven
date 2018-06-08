<?php
namespace LoginBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class UserPasswordType
 * @package BckAdminBundle\Form
 * This form is only to edit the user password
 */
class UserPasswordType extends BaseType
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

        $this->conf['entityClass'] = 'LoginBundle\Entity\User';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';

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
        $this->entityMetadata = array('password' => $this->entityMetadata['password']);

        return $this;
    }
}
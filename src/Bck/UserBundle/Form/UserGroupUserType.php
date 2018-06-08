<?php
namespace Bck\UserBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class UserGroupUserType
 * @package BckUserBundle\Form
 * This form is only to edit the user password
 */
class UserGroupUserType extends BaseType
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

        $this->conf['buttons'] = 'none';

        return $this;
    }
}
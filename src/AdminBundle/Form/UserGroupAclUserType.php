<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class UserGroupAclUserType
 * @package AdminBundle\Form
 */
class UserGroupAclUserType extends BaseType
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
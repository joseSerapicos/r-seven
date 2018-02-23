<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class UserGroupAclMenuType
 * @package AdminBundle\Form
 */
class UserGroupAclMenuType extends BaseType
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

        $this->conf['buttons'] = 'form';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
<?php
namespace Bck\AdminBundle\Form;

use AppBundle\Form\BaseType;

class FrtSettingType extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['class'] = 'm-3';
        $this->conf['buttons'] = 'form';

        return $this;
    }
}
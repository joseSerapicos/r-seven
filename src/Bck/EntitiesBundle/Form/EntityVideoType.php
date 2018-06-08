<?php
namespace Bck\EntitiesBundle\Form;

use AppBundle\Form\BaseType;

class EntityVideoType extends BaseType
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

    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        $this->entityMetadata['path']['type'] = 'text';

        return $this;
    }
}
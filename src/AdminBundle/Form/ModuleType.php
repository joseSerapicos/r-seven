<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ModuleType
 * @package AdminBundle\Form
 */
class ModuleType extends BaseType
{
    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        // Redefine fields
        unset($this->entityMetadata['appModuleObj']);

        return $this;
    }
}
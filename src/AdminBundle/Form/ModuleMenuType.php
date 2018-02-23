<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ModuleMenuType
 * @package AdminBundle\Form
 */
class ModuleMenuType extends BaseType
{
    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        // Redefine fields
        unset($this->entityMetadata['appModuleMenuObj']);

        return $this;
    }
}
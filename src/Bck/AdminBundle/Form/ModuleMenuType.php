<?php
namespace Bck\AdminBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class ModuleMenuType
 * @package BckAdminBundle\Form
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
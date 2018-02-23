<?php
namespace EntitiesBundle\Form;

use AppBundle\Form\BaseType;


/**
 * Class EntityNoCodeType
 * Remove code field (used by User to embed this form)
 * @package EntitiesBundle\Form
 */
class EntityNoCodeType extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'EntitiesBundle\Entity\Entity';
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
        unset($this->entityMetadata['code']);

        return $this;
    }
}
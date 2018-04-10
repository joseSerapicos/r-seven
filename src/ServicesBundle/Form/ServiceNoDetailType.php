<?php
namespace ServicesBundle\Form;

use AppBundle\Form\BaseType;

class ServiceNoDetailType extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'ServicesBundle\Entity\Service';
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
        unset(
            $this->entityMetadata['thumbnail'],
            $this->entityMetadata['isEnabledAvailability'],
            $this->entityMetadata['isEnabledAllot'],
            $this->entityMetadata['isEnabledPrice']
        );

        return $this;
    }
}
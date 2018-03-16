<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class BookingServiceAddStep3Type extends BaseType
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

        $this->conf['entityClass'] = 'BookingBundle\Entity\BookingService';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
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

        // Redefine fields
        $this->entityMetadata = array(
            'icon' => $this->entityMetadata['icon'],
            'name' => $this->entityMetadata['name'],
            'description' => $this->entityMetadata['description'],
            'supplierObj' => $this->entityMetadata['supplierObj'],
            'reference' => $this->entityMetadata['reference'],
            'placeObj' => $this->entityMetadata['placeObj'],
            'placeToObj' => $this->entityMetadata['placeToObj']
        );

        return $this;
    }
}
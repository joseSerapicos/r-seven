<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class BookingServiceManualAllotType extends BaseType
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
            'startDate' => $this->entityMetadata['startDate'],
            'endDate' => $this->entityMetadata['endDate'],
            'quantity' => $this->entityMetadata['quantity'],
            'confirmationStatus' => $this->entityMetadata['confirmationStatus'],
            'quantityManual' => $this->entityMetadata['quantityManual'],
            'confirmationStatusManual' => $this->entityMetadata['confirmationStatusManual'],
            'isEnabled' => $this->entityMetadata['isEnabled']
        );

        return $this;
    }
}
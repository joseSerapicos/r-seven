<?php
namespace BookingBundle\Form;

use AppBundle\Form\BaseType;


class BookingServiceType extends BaseType
{
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
            'isEnabled' => $this->entityMetadata['isEnabled']
        );

        return $this;
    }
}
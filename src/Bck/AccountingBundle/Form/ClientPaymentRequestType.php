<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;


class ClientPaymentRequestType extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        // Redefine fields
        $this->entityMetadata = array(
            'clientDocumentObj' => $this->entityMetadata['clientDocumentObj'],
            'reference' => $this->entityMetadata['reference'],
            'description' => $this->entityMetadata['description'],
            'value' => $this->entityMetadata['value'],
            'paymentMethodObj' => $this->entityMetadata['paymentMethodObj'],
            'paymentStatus' => $this->entityMetadata['paymentStatus']
        );

        return $this;
    }
}
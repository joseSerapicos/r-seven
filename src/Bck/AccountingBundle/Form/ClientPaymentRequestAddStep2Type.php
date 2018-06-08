<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;


class ClientPaymentRequestAddStep2Type extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'Bck\AccountingBundle\Entity\ClientPaymentRequest';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'wizard';

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
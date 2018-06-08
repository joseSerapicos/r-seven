<?php
namespace Frt\AccountingBundle\Form;

use AppBundle\Form\BaseType;


class ClientPaymentRequestType extends BaseType {
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
            'paymentMethodObj' => $this->entityMetadata['paymentMethodObj']
        );
        // Add change event
        $this->entityMetadata['paymentMethodObj']['attr'] = array('(click)' => 'onPaymentMethodChange($event.target.value)');

        return $this;
    }
}
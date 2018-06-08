<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;


class ClientPaymentRequestAddStep1Type extends BaseType {
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
            'clientObj' => $this->entityMetadata['clientObj']
        );

        return $this;
    }
}
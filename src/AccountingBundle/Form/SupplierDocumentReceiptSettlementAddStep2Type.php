<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;

class SupplierDocumentReceiptSettlementAddStep2Type extends BaseType
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

        $this->conf['entityClass'] = 'AccountingBundle\Entity\SupplierDocumentReceiptSettlement';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';

        return $this;
    }
}
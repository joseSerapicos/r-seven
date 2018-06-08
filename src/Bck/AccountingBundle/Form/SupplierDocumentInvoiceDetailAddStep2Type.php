<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;

class SupplierDocumentInvoiceDetailAddStep2Type extends BaseType
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

        $this->conf['entityClass'] = 'Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';

        return $this;
    }
}
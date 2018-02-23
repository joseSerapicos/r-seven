<?php
namespace AccountingBundle\Form;


/**
 * Class SupplierDocumentAddStep3ReceiptType
 * @package AccountingBundle\Form
 * This form belongs to the steps of add wizard
 * Used for invoice
 */
class SupplierDocumentAddStep3ReceiptType extends SupplierDocumentReceiptType
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

        $this->conf['buttons'] = 'none';

        return $this;
    }
}
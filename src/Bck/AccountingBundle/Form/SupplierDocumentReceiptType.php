<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;


class SupplierDocumentReceiptType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\AccountingBundle\Entity\SupplierDocument';
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
        unset($this->entityMetadata['supplierDocumentTypeObj'], $this->entityMetadata['supplierObj'],
            $this->entityMetadata['dueDate'],
            $this->entityMetadata['subTotal'], $this->entityMetadata['totalVat'], $this->entityMetadata['total']
        );

        return $this;
    }
}
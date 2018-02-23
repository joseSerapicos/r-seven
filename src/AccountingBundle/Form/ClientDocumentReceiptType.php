<?php
namespace AccountingBundle\Form;

use AppBundle\Form\BaseType;


class ClientDocumentReceiptType extends BaseType
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

        $this->conf['entityClass'] = 'AccountingBundle\Entity\ClientDocument';
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
        unset($this->entityMetadata['clientDocumentTypeObj'], $this->entityMetadata['clientObj'],
            $this->entityMetadata['dueDate'],
            $this->entityMetadata['subTotal'], $this->entityMetadata['totalVat'], $this->entityMetadata['total']
        );

        return $this;
    }
}
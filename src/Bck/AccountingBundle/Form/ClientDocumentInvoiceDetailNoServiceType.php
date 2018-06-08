<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;

class ClientDocumentInvoiceDetailNoServiceType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail';
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
        // Remove service for invoice rectification (service is the same that the original invoice)
        unset($this->entityMetadata['serviceObj']);

        return $this;
    }
}
<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class SupplierDocumentAddStep1Type
 * @package BckAccountingBundle\Form
 * This form belongs to the steps of add wizard
 */
class SupplierDocumentAddStep1Type extends BaseType
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
            'supplierDocumentTypeObj' => $this->entityMetadata['supplierDocumentTypeObj'],
            'supplierObj' => $this->entityMetadata['supplierObj']
        );

        return $this;
    }
}
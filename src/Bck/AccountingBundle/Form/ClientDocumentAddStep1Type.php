<?php
namespace Bck\AccountingBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class ClientDocumentAddStep1Type
 * @package BckAccountingBundle\Form
 * This form belongs to the steps of add wizard
 */
class ClientDocumentAddStep1Type extends BaseType
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

        $this->conf['entityClass'] = 'Bck\AccountingBundle\Entity\ClientDocument';
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
            'clientDocumentTypeObj' => $this->entityMetadata['clientDocumentTypeObj'],
            'clientObj' => $this->entityMetadata['clientObj']
        );

        return $this;
    }
}
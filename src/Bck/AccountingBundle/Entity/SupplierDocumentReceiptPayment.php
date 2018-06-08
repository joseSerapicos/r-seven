<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\SupplierDocumentReceiptPaymentRepository")
 * @ORM\Table(name="supplierDocumentReceiptPayment")
 */
class SupplierDocumentReceiptPayment extends BaseDocumentReceiptPayment {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\SupplierDocument")
     * @ORM\JoinColumn(name="fk_supplierDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $supplierDocumentObj;


    /**
     * Set supplierDocumentObj
     * @param \Bck\AccountingBundle\Entity\SupplierDocument $supplierDocumentObj
     * @return $this
     */
    public function setSupplierDocumentObj(\Bck\AccountingBundle\Entity\SupplierDocument $supplierDocumentObj)
    {
        $this->supplierDocumentObj = $supplierDocumentObj;
        return $this;
    }

    /**
     * Get supplierDocumentObj
     * @return \Bck\AccountingBundle\Entity\SupplierDocument
     */
    public function getSupplierDocumentObj()
    {
        return $this->supplierDocumentObj;
    }
}
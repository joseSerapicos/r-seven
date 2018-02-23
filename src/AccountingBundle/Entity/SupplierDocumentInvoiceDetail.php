<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\SupplierDocumentInvoiceDetailRepository")
 * @ORM\Table(name="supplierDocumentInvoiceDetail")
 */
class SupplierDocumentInvoiceDetail extends BaseDocumentInvoiceDetail {
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\SupplierDocument")
     * @ORM\JoinColumn(name="fk_supplierDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $supplierDocumentObj;


    /**
     * Set supplierDocumentObj
     * @param \AccountingBundle\Entity\SupplierDocument $supplierDocumentObj
     * @return $this
     */
    public function setSupplierDocumentObj(\AccountingBundle\Entity\SupplierDocument $supplierDocumentObj)
    {
        $this->supplierDocumentObj = $supplierDocumentObj;
        return $this;
    }

    /**
     * Get supplierDocumentObj
     * @return \AccountingBundle\Entity\SupplierDocument
     */
    public function getSupplierDocumentObj()
    {
        return $this->supplierDocumentObj;
    }
}
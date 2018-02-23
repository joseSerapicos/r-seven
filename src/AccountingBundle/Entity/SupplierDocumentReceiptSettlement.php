<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\SupplierDocumentReceiptSettlementRepository")
 * @ORM\Table(name="supplierDocumentReceiptSettlement")
 */
class SupplierDocumentReceiptSettlement extends BaseDocumentReceiptSettlement {
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\SupplierDocument")
     * @ORM\JoinColumn(name="fk_supplierDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $supplierDocumentObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\SupplierDocument")
     * @ORM\JoinColumn(name="fk_settlementSupplierDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $settlementSupplierDocumentObj;


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

    /**
     * Set settlementSupplierDocumentObj
     * @param \AccountingBundle\Entity\SupplierDocument $settlementSupplierDocumentObj
     * @return $this
     */
    public function setSettlementSupplierDocumentObj(\AccountingBundle\Entity\SupplierDocument $settlementSupplierDocumentObj)
    {
        $this->settlementSupplierDocumentObj = $settlementSupplierDocumentObj;
        return $this;
    }

    /**
     * Get settlementSupplierDocumentObj
     * @return \AccountingBundle\Entity\SupplierDocument
     */
    public function getSettlementSupplierDocumentObj()
    {
        return $this->settlementSupplierDocumentObj;
    }
}
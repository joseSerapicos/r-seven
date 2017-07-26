<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\SupplierDocumentRepository")
 * @ORM\Table(name="supplierDocument",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_supplierDocument_code", columns={"fk_supplierDocumentType", "codePrefix", "codeNumber"})
 *     }
 * )
 */
class SupplierDocument extends BaseDocument {
    /**
     * @ORM\ManyToOne(targetEntity="SupplierDocumentType")
     * @ORM\JoinColumn(name="fk_supplierDocumentType", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $supplierDocumentTypeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Supplier")
     * @ORM\JoinColumn(name="fk_supplier", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $supplierObj;


    /**
     * Set supplierDocumentTypeObj
     * @param \AccountingBundle\Entity\SupplierDocumentType $supplierDocumentTypeObj
     * @return $this
     */
    public function setSupplierDocumentTypeObj(\AccountingBundle\Entity\SupplierDocumentType $supplierDocumentTypeObj)
    {
        $this->supplierDocumentTypeObj = $supplierDocumentTypeObj;
        return $this;
    }

    /**
     * Get supplierDocumentTypeObj
     * @return \AccountingBundle\Entity\SupplierDocumentType
     */
    public function getSupplierDocumentTypeObj()
    {
        return $this->supplierDocumentTypeObj;
    }

    /**
     * Set supplierObj
     *
     * @param \EntitiesBundle\Entity\Supplier $supplierObj
     * @return $this
     */
    public function setSupplierObj(\EntitiesBundle\Entity\Supplier $supplierObj)
    {
        $this->supplierObj = $supplierObj;

        return $this;
    }

    /**
     * Get supplierObj
     * @return \EntitiesBundle\Entity\Supplier
     */
    public function getSupplierObj()
    {
        return $this->supplierObj;
    }
}
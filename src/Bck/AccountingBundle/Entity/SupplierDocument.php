<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\SupplierDocumentRepository")
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
     * @ORM\ManyToOne(targetEntity="Bck\EntitiesBundle\Entity\Supplier")
     * @ORM\JoinColumn(name="fk_supplier", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $supplierObj;


    /**
     * Set supplierDocumentTypeObj
     * @param \Bck\AccountingBundle\Entity\SupplierDocumentType $supplierDocumentTypeObj
     * @return $this
     */
    public function setSupplierDocumentTypeObj(\Bck\AccountingBundle\Entity\SupplierDocumentType $supplierDocumentTypeObj)
    {
        $this->supplierDocumentTypeObj = $supplierDocumentTypeObj;
        return $this;
    }

    /**
     * Get supplierDocumentTypeObj
     * @return \Bck\AccountingBundle\Entity\SupplierDocumentType
     */
    public function getSupplierDocumentTypeObj()
    {
        return $this->supplierDocumentTypeObj;
    }

    /**
     * Set supplierObj
     *
     * @param \Bck\EntitiesBundle\Entity\Supplier $supplierObj
     * @return $this
     */
    public function setSupplierObj(\Bck\EntitiesBundle\Entity\Supplier $supplierObj)
    {
        $this->supplierObj = $supplierObj;

        return $this;
    }

    /**
     * Get supplierObj
     * @return \Bck\EntitiesBundle\Entity\Supplier
     */
    public function getSupplierObj()
    {
        return $this->supplierObj;
    }

    /**
     * Representation of object for dropdown (name/label for object)
     * @return mixed
     */
    public function __toString()
    {
        return (
            $this->getSupplierDocumentTypeObj()->getName()
            . ' (' . $this->getCode()
            . ' @ ' . $this->getRemainSettlement() . ')'
        );
    }
}

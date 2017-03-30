<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\SupplierDocumentTypeSettingRepository")
 * @ORM\Table(name="supplierDocumentTypeSetting",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_supplierDocumentTypeSetting", columns={"fk_store", "fk_supplierDocumentType"})
 *     }
 * )
 */
class SupplierDocumentTypeSetting extends BaseDocumentTypeSetting {
    /**
     * @ORM\ManyToOne(targetEntity="SupplierDocumentType")
     * @ORM\JoinColumn(name="fk_supplierDocumentType", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $supplierDocumentTypeObj;


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
}
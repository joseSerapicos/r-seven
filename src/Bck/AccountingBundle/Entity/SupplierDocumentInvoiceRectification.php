<?php
namespace Bck\AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\SupplierDocumentInvoiceRectificationRepository")
 * @ORM\Table(name="supplierDocumentInvoiceRectification")
 * This table links the document rectification detail to the original document detail
 */
class SupplierDocumentInvoiceRectification extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail", cascade={"all"})
     * @ORM\JoinColumn(name="fk_supplierDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $supplierDocumentInvoiceDetailObj; // rectification supplier document invoice detail object

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail")
     * @ORM\JoinColumn(name="fk_rectificationSupplierDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $rectificationSupplierDocumentInvoiceDetailObj; // original supplier document invoice detail object


    /**
     * Set supplierDocumentInvoiceDetailObj
     * @param \Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail $supplierDocumentInvoiceDetailObj
     * @return $this
     */
    public function setSupplierDocumentInvoiceDetailObj(\Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail $supplierDocumentInvoiceDetailObj)
    {
        $this->supplierDocumentInvoiceDetailObj = $supplierDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get supplierDocumentInvoiceDetailObj
     * @return \Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail
     */
    public function getSupplierDocumentInvoiceDetailObj()
    {
        return $this->supplierDocumentInvoiceDetailObj;
    }

    /**
     * Set rectificationSupplierDocumentInvoiceDetailObj
     * @param \Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail $rectificationSupplierDocumentInvoiceDetailObj
     * @return $this
     */
    public function setRectificationSupplierDocumentInvoiceDetailObj(\Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail $rectificationSupplierDocumentInvoiceDetailObj)
    {
        $this->rectificationSupplierDocumentInvoiceDetailObj = $rectificationSupplierDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get rectificationSupplierDocumentInvoiceDetailObj
     * @return \Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail
     */
    public function getRectificationSupplierDocumentInvoiceDetailObj()
    {
        return $this->rectificationSupplierDocumentInvoiceDetailObj;
    }
}
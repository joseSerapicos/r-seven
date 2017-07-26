<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentInvoiceRectificationRepository")
 * @ORM\Table(name="clientDocumentInvoiceRectification")
 * This table links the document rectification detail to the original document detail
 */
class ClientDocumentInvoiceRectification extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocumentInvoiceDetail", cascade={"all"})
     * @ORM\JoinColumn(name="fk_clientDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $clientDocumentInvoiceDetailObj; // rectification client document invoice detail object

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocumentInvoiceDetail")
     * @ORM\JoinColumn(name="fk_originalClientDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $originalClientDocumentInvoiceDetailObj; // original client document invoice detail object


    /**
     * Set clientDocumentInvoiceDetailObj
     * @param \AccountingBundle\Entity\ClientDocumentInvoiceDetail $clientDocumentInvoiceDetailObj
     * @return $this
     */
    public function setClientDocumentInvoiceDetailObj(\AccountingBundle\Entity\ClientDocumentInvoiceDetail $clientDocumentInvoiceDetailObj)
    {
        $this->clientDocumentInvoiceDetailObj = $clientDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get clientDocumentInvoiceDetailObj
     * @return \AccountingBundle\Entity\ClientDocumentInvoiceDetail
     */
    public function getClientDocumentInvoiceDetailObj()
    {
        return $this->clientDocumentInvoiceDetailObj;
    }

    /**
     * Set originalClientDocumentInvoiceDetailObj
     * @param \AccountingBundle\Entity\ClientDocumentInvoiceDetail $originalClientDocumentInvoiceDetailObj
     * @return $this
     */
    public function setOriginalClientDocumentInvoiceDetailObj(\AccountingBundle\Entity\ClientDocumentInvoiceDetail $originalClientDocumentInvoiceDetailObj)
    {
        $this->originalClientDocumentInvoiceDetailObj = $originalClientDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get originalClientDocumentInvoiceDetailObj
     * @return \AccountingBundle\Entity\ClientDocumentInvoiceDetail
     */
    public function getOriginalClientDocumentInvoiceDetailObj()
    {
        return $this->originalClientDocumentInvoiceDetailObj;
    }
}
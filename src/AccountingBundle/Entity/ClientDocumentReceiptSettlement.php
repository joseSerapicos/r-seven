<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentReceiptSettlementRepository")
 * @ORM\Table(name="clientDocumentReceiptSettlement")
 */
class ClientDocumentReceiptSettlement extends BaseDocumentReceiptSettlement {
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientDocumentObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_invoiceClientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $invoiceClientDocumentObj;


    /**
     * Set clientDocumentObj
     * @param \AccountingBundle\Entity\ClientDocument $clientDocumentObj
     * @return $this
     */
    public function setClientDocumentObj(\AccountingBundle\Entity\ClientDocument $clientDocumentObj)
    {
        $this->clientDocumentObj = $clientDocumentObj;
        return $this;
    }

    /**
     * Get clientDocumentObj
     * @return \AccountingBundle\Entity\ClientDocument
     */
    public function getClientDocumentObj()
    {
        return $this->clientDocumentObj;
    }

    /**
     * Set invoiceClientDocumentObj
     * @param \AccountingBundle\Entity\ClientDocument $invoiceClientDocumentObj
     * @return $this
     */
    public function setInvoiceClientDocumentObj(\AccountingBundle\Entity\ClientDocument $invoiceClientDocumentObj)
    {
        $this->invoiceClientDocumentObj = $invoiceClientDocumentObj;
        return $this;
    }

    /**
     * Get invoiceClientDocumentObj
     * @return \AccountingBundle\Entity\ClientDocument
     */
    public function getInvoiceClientDocumentObj()
    {
        return $this->invoiceClientDocumentObj;
    }
}
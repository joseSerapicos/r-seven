<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentReceiptPaymentRepository")
 * @ORM\Table(name="clientDocumentReceiptPayment")
 */
class ClientDocumentReceiptPayment extends BaseDocumentReceiptPayment {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientDocumentObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientPaymentRequest")
     * @ORM\JoinColumn(name="fk_clientPaymentRequest", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * To calculate the "remainReceiptEmission" in ClientPaymentRequest
     */
    protected $clientPaymentRequestObj;


    /**
     * Set clientDocumentObj
     * @param \Bck\AccountingBundle\Entity\ClientDocument $clientDocumentObj
     * @return $this
     */
    public function setClientDocumentObj(\Bck\AccountingBundle\Entity\ClientDocument $clientDocumentObj)
    {
        $this->clientDocumentObj = $clientDocumentObj;
        return $this;
    }

    /**
     * Get clientDocumentObj
     * @return \Bck\AccountingBundle\Entity\ClientDocument
     */
    public function getClientDocumentObj()
    {
        return $this->clientDocumentObj;
    }

    /**
     * Set clientPaymentRequestObj
     * @param \Bck\AccountingBundle\Entity\ClientPaymentRequest $clientPaymentRequestObj
     * @return $this
     */
    public function setClientPaymentRequestObj(\Bck\AccountingBundle\Entity\ClientPaymentRequest $clientPaymentRequestObj = null)
    {
        $this->clientPaymentRequestObj = $clientPaymentRequestObj;
        return $this;
    }

    /**
     * Get clientPaymentRequestObj
     * @return \Bck\AccountingBundle\Entity\ClientPaymentRequest
     */
    public function getClientPaymentRequestObj()
    {
        return $this->clientPaymentRequestObj;
    }
}
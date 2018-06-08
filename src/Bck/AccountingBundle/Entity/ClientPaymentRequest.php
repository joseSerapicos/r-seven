<?php

namespace Bck\AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientPaymentRequestRepository")
 * @ORM\Table(name="clientPaymentRequest")
 */
class ClientPaymentRequest extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\EntitiesBundle\Entity\Client")
     * @ORM\JoinColumn(name="fk_client", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * Client document can be null in case of payment advances, or in case of document has not been generated yet
     */
    protected $clientDocumentObj;

    /**
     * @ORM\Column(name="reference", type="string", length=64, nullable=true, unique=false, options={"comment":"Reference"})
     */
    protected $reference;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=false, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="value", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Value"})
     */
    protected $value;

    /**
     * @ORM\ManyToOne(targetEntity="PaymentMethod")
     * @ORM\JoinColumn(name="fk_paymentMethod", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     *
     * Payment method can be null when you select "All" (client is free to choice the payment that he want)
     */
    protected $paymentMethodObj;

    /**
     * @ORM\Column(name="paymentStatus", type="string", length=3, nullable=false, unique=false, options={"default":"NO", "comment":"Payment status"})
     */
    protected $paymentStatus; // [NO, YES]

    /**
     * @ORM\Column(name="remainReceiptEmission", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Remain receipt emission"})
     */
    protected $remainReceiptEmission;

    /**
     * @ORM\Column(name="isSent", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if the document was sent (sent the PDF file)"})
     */
    protected $isSent;


    /**
     * Set clientObj
     *
     * @param \Bck\EntitiesBundle\Entity\Client $clientObj
     * @return $this
     */
    public function setClientObj(\Bck\EntitiesBundle\Entity\Client $clientObj = null)
    {
        $this->clientObj = $clientObj;

        return $this;
    }

    /**
     * Get clientObj
     * @return \Bck\EntitiesBundle\Entity\Client
     */
    public function getClientObj()
    {
        return $this->clientObj;
    }

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
     * Set reference
     *
     * @param string $reference
     *
     * @return $this
     */
    public function setReference($reference)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference
     * @return string
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set value
     * @param string $value
     * @return $this
     */
    public function setValue($value)
    {
        $this->value = $value;
        return $this;
    }

    /**
     * Get value
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Set paymentMethodObj
     * @param integer $paymentMethodObj
     * @return object
     */
    public function setPaymentMethodObj($paymentMethodObj = null)
    {
        $this->paymentMethodObj = $paymentMethodObj;
        return $this;
    }

    /**
     * Get paymentMethodObj
     * @return integer
     */
    public function getPaymentMethodObj()
    {
        return $this->paymentMethodObj;
    }

    /**
     * Set paymentStatus
     *
     * @param string $paymentStatus
     *
     * @return $this
     */
    public function setPaymentStatus($paymentStatus)
    {
        if (!empty($paymentStatus) && !in_array($paymentStatus, array("NO", "YES"))) {
            throw new \InvalidArgumentException("Invalid payment status");
        }
        $this->paymentStatus = $paymentStatus;

        return $this;
    }

    /**
     * Get paymentStatus
     *
     * @return string
     */
    public function getPaymentStatus()
    {
        return $this->paymentStatus;
    }

    /**
     * Get receiptEmissionStatus
     * @return string
     */
    public function getReceiptEmissionStatus()
    {
        // Fake field to determines the status of the settlement
        if ($this->getRemainReceiptEmission() == 0) { return 'YES'; }
        if ($this->getRemainReceiptEmission() == $this->getValue()) { return 'NO'; }
        return 'PARTIAL';
    }

    /**
     * Set remainReceiptEmission
     * @param string $remainReceiptEmission
     * @return $this
     */
    public function setRemainReceiptEmission($remainReceiptEmission)
    {
        $this->remainReceiptEmission = $remainReceiptEmission;
        return $this;
    }

    /**
     * Get remainReceiptEmission
     * @return string
     */
    public function getRemainReceiptEmission()
    {
        return $this->remainReceiptEmission;
    }

    /**
     * Set isSent
     * @param boolean $isSent
     * @return $this
     */
    public function setIsSent($isSent)
    {
        $this->isSent = $isSent;
        return $this;
    }

    /**
     * Get isSent
     * @return boolean
     */
    public function getIsSent()
    {
        return $this->isSent;
    }
}
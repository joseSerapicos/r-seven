<?php

namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\BaseEntity;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseDocumentReceiptPaymentRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseDocumentReceiptPayment extends BaseEntity
{
    /**
     * @ORM\Column(name="paymentType", type="string", length=16, nullable=false, unique=false, options={"comment":"Payment type"})
     */
    protected $paymentType;

    /**
     * @ORM\Column(name="reference", type="string", length=32, nullable=true, unique=false, options={"comment":"Reference"})
     */
    protected $reference;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="value", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Value"})
     */
    protected $value;


    /**
     * Set paymentType
     *
     * @param string $paymentType
     *
     * @return $this
     */
    public function setPaymentType($paymentType)
    {
        $this->paymentType = $paymentType;

        return $this;
    }

    /**
     * Get paymentType
     * @return string
     */
    public function getPaymentType()
    {
        return $this->paymentType;
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
}
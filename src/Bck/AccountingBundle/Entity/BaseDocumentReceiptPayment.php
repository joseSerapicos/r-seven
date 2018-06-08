<?php

namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\BaseEntity;


/**
 * @ORM\MappedSuperclass(repositoryClass="Bck\AccountingBundle\Entity\BaseDocumentReceiptPaymentRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseDocumentReceiptPayment extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\PaymentMethod")
     * @ORM\JoinColumn(name="fk_paymentMethod", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $paymentMethodObj;

    /**
     * @ORM\Column(name="reference", type="string", length=64, nullable=true, unique=false, options={"comment":"Reference"})
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
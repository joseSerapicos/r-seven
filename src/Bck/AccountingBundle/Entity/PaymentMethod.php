<?php
// src/BckAccountingBundle/Entity/PaymentMethod.php

namespace Bck\AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\PaymentMethodRepository")
 * @ORM\Table(name="paymentMethod")
 */
class PaymentMethod extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\PaymentMethod")
     * @ORM\JoinColumn(name="fkApp_paymentMethod", referencedColumnName="id", nullable=true, unique=true, onDelete="CASCADE")
     *
     * App Payment Method can be null, so the user can add your own custom payment methods
     */
    protected $appPaymentMethodObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=512, nullable=false, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="forOnlinePayment", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if the payment can be used online"})
     */
    protected $forOnlinePayment;


    /**
     * Set appPaymentMethodObj
     * @param integer $appPaymentMethodObj
     * @return PaymentMethod
     */
    public function setAppPaymentMethodObj($appPaymentMethodObj)
    {
        $this->appPaymentMethodObj = $appPaymentMethodObj;
        return $this;
    }

    /**
     * Get appPaymentMethodObj
     * @return integer
     */
    public function getAppPaymentMethodObj()
    {
        return $this->appPaymentMethodObj;
    }

    /**
     * Set name
     * @param string $name
     * @return object
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get name
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     * @param string $description
     * @return object
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
     * Set forOnlinePayment
     * @param boolean $forOnlinePayment
     * @return $this
     */
    public function setForOnlinePayment($forOnlinePayment)
    {
        $this->forOnlinePayment = $forOnlinePayment;
        return $this;
    }

    /**
     * Get forOnlinePayment
     * @return boolean
     */
    public function getForOnlinePayment()
    {
        return $this->forOnlinePayment;
    }

    /**
     * Get app payment method name
     * Used to send this information in choices, so we can determine some specific payment methods like paypal
     * @return boolean
     */
    public function getAppPaymentMethod_name()
    {
        if ($this->getAppPaymentMethodObj()) {
            return $this->getAppPaymentMethodObj()->getName();
        }

        return '';
    }

    /**
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        $appPaymentMethodObj = $this->getAppPaymentMethodObj();
        return (
            (($appPaymentMethodObj && $appPaymentMethodObj->getAppIconObj()) ? ('<i class="fa ' . $appPaymentMethodObj->getAppIconObj()->getIcon() . '"></i> ') : '')
            . $this->getName()
        );
    }
}
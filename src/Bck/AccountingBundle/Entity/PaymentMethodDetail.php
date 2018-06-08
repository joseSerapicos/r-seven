<?php
// src/BckAccountingBundle/Entity/PaymentMethodDetail.php

namespace Bck\AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\PaymentMethodDetailRepository")
 * @ORM\Table(name="paymentMethodDetail"
 * )
 */
class PaymentMethodDetail extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\PaymentMethodDetail")
     * @ORM\JoinColumn(name="fkApp_paymentMethodDetail", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     */
    protected $appPaymentMethodDetailObj;

    /**
     * @ORM\ManyToOne(targetEntity="PaymentMethod")
     * @ORM\JoinColumn(name="fk_paymentMethod", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $paymentMethodObj;

    /**
     * @ORM\Column(name="value", type="string", length=128, nullable=false, unique=false, options={"comment":"Value for field"})
     */
    protected $value;


    /**
     * Set appPaymentMethodDetailObj
     * @param integer $appPaymentMethodDetailObj
     * @return object
     */
    public function setAppPaymentMethodDetailObj($appPaymentMethodDetailObj)
    {
        $this->appPaymentMethodDetailObj = $appPaymentMethodDetailObj;
        return $this;
    }

    /**
     * Get appPaymentMethodDetailObj
     * @return integer
     */
    public function getAppPaymentMethodDetailObj()
    {
        return $this->appPaymentMethodDetailObj;
    }

    /**
     * Set paymentMethodObj
     * @param integer $paymentMethodObj
     * @return object
     */
    public function setPaymentMethodObj($paymentMethodObj)
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
     * Set value
     * @param string $value
     * @return object
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
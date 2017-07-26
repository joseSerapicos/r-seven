<?php

namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\BaseEntity;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseDocumentInvoiceDetailRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseDocumentInvoiceDetail extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="\ServicesBundle\Entity\Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     * By default inherit from "BookingServicePrice" (if applicable).
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=false, unique=false, options={"comment":"Description"})
     * By default inherit from "BookingServicePrice" (if applicable) or "Service".
     */
    protected $description;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\VatCode")
     * @ORM\JoinColumn(name="fk_vatCode", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * By default inherit from "Service".
     * VAT code needs to be saved on create this object,
     * because VAT code is referent at one determined period (object creation time) and does not be changed any more,
     * even if service VAT code change, because this VAT code stay frozen in time with the object!
     */
    protected $vatCodeObj;

    /**
     * @ORM\Column(name="quantity", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Quantity"})
     *
     * By default inherit from "BookingServicePrice" (if applicable).
     */
    protected $quantity;

    /**
     * @ORM\Column(name="value", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Value"})
     * By default inherit from "BookingServicePrice" (if applicable).
     */
    protected $value;

    /**
     * @ORM\Column(name="vatValue", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"VAT value"})
     */
    protected $vatValue;

    /**
     * @ORM\Column(name="subTotal", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total value without VAT"})
     * Determines the real value after rounding (2 decimals is enough, this value is not used to make calculus, but only informative)
     */
    protected $subTotal;

    /**
     * @ORM\Column(name="totalVat", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total VAT"})
     * Determines the real value after rounding (2 decimals is enough, this value is not used to make calculus, but only informative)
     */
    protected $totalVat;


    /**
     * Set serviceObj
     * @param \ServicesBundle\Entity\Service $serviceObj
     * @return $this
     */
    public function setServiceObj(\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;
        return $this;
    }

    /**
     * Get serviceObj
     *
     * @return \ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
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
     * Set vatCodeObj
     * @param \AccountingBundle\Entity\VatCode $vatCodeObj
     * @return $this
     */
    public function setVatCodeObj(\AccountingBundle\Entity\VatCode $vatCodeObj)
    {
        $this->vatCodeObj = $vatCodeObj;
        return $this;
    }

    /**
     * Get vatCodeObj
     *
     * @return \AccountingBundle\Entity\VatCode
     */
    public function getVatCodeObj()
    {
        return $this->vatCodeObj;
    }
    
    /**
     * Set quantity
     * @param integer $quantity
     * @return $this
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
        return $this;
    }

    /**
     * Get quantity
     * @return integer
     */
    public function getQuantity()
    {
        return $this->quantity;
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
     * Set vatValue
     * @param string $vatValue
     * @return $this
     */
    public function setVatValue($vatValue)
    {
        $this->vatValue = $vatValue;
        return $this;
    }

    /**
     * Get vatValue
     * @return string
     */
    public function getVatValue()
    {
        return $this->vatValue;
    }

    /**
     * Set subTotal
     * @param string $subTotal
     * @return $this
     */
    public function setSubTotal($subTotal)
    {
        $this->subTotal = $subTotal;
        return $this;
    }

    /**
     * Get subTotal
     * @return mixed
     */
    public function getSubTotal()
    {
        return $this->subTotal;
    }

    /**
     * Set totalVat
     * @param string $totalVat
     * @return $this
     */
    public function setTotalVat($totalVat)
    {
        $this->totalVat = $totalVat;
        return $this;
    }

    /**
     * Get totalVat
     * @return mixed
     */
    public function getTotalVat()
    {
        return $this->totalVat;
    }

    /**
     * Get total
     * @return float
     */
    public function getTotalUnit()
    {
        // For direct queries use "SUM()"
        return round($this->value + $this->vatValue, 2);
    }

    /**
     * Get total
     * @return float
     */
    public function getTotal()
    {
        // For direct queries use "SUM()"
        return round($this->subTotal + $this->totalVat, 2);
    }

    ////////
    // Fake methods to keep default values
    ////////////////////////////////

    /**
     * Get isVatIncluded
     * @return boolean
     */
    public function getIsVatIncluded()
    {
        return true;
    }

    /**
     * Get user_value
     * @return float
     */
    public function getUser_value()
    {
        return $this->getTotalUnit();
    }

}
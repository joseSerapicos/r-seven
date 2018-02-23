<?php

namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\BaseEntity;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseDocumentInvoiceDetailRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 * This class saves the VAT values, because the correct document VAT it's always the service VAT when the document
 * was made, so we need to save this values to keep the inquiry of document independent of service VAT changes in time.
 */
abstract class BaseDocumentInvoiceDetail extends BaseEntity
{
    /**
     * PUT HERE THE DOCUMENT INVOICE DETAIL FOREIGN KEY
     */

    /**
     * @ORM\ManyToOne(targetEntity="\BookingBundle\Entity\BookingServicePrice")
     * @ORM\JoinColumn(name="fk_bookingServicePrice", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     * Links the invoice detail to the booking service price, to use the booking as base of invoicing.
     */
    protected $bookingServicePriceObj;

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
     * @ORM\Column(name="isVatIncluded", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Controls how to return the fake fields user_..."})
     */
    protected $isVatIncluded;

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
     * Set bookingServicePriceObj
     * @param \BookingBundle\Entity\BookingServicePrice $bookingServicePriceObj
     * @return $this
     */
    public function setBookingServicePriceObj(\BookingBundle\Entity\BookingServicePrice $bookingServicePriceObj = null)
    {
        $this->bookingServicePriceObj = $bookingServicePriceObj;
        return $this;
    }

    /**
     * Get bookingServicePriceObj
     *
     * @return \BookingBundle\Entity\BookingServicePrice
     */
    public function getBookingServicePriceObj()
    {
        return $this->bookingServicePriceObj;
    }

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
     * Set isVatIncluded
     * @param $isVatIncluded
     * @return $this
     */
    public function setIsVatIncluded($isVatIncluded)
    {
        $this->isVatIncluded = $isVatIncluded;
        return $this;
    }

    /**
     * Get isVatIncluded
     * @return \DateTime
     */
    public function getIsVatIncluded()
    {
        return $this->isVatIncluded;
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
     * Get user_value
     * @return float
     */
    public function getUser_value()
    {
        // Value, according with the "getIsVatIncluded" returned value
        if ($this->getIsVatIncluded()) {
            return $this->getTotalUnit();
        }

        return $this->getValue();
    }

}
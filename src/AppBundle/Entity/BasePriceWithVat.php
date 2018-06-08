<?php

namespace AppBundle\Entity;

use AppBundle\Service\PriceService;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BasePriceWithVatRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BasePriceWithVat extends BasePrice
{
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\VatCode")
     * @ORM\JoinColumn(name="fk_vatCode", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * VAT code needs to be saved on create this object,
     * because VAT code is referent at one determined period (object creation time) and does not be changed any more,
     * even if service VAT code change, because this VAT code stay frozen in time with the object!
     */
    protected $vatCodeObj;

    /**
     * @ORM\Column(name="vatValueCost", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Cost VAT value"})
     */
    protected $vatValueCost;

    /**
     * @ORM\Column(name="vatValueSell", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Sell VAT value"})
     */
    protected $vatValueSell;

    /**
     * @ORM\Column(name="subTotalCost", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Cost sub total"})
     */
    protected $subTotalCost;

    /**
     * @ORM\Column(name="subTotalSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Sell sub total"})
     */
    protected $subTotalSell;

    /**
     * @ORM\Column(name="totalVatCost", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total VAT of cost value"})
     */
    protected $totalVatCost;

    /**
     * @ORM\Column(name="totalVatSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total VAT of sell value"})
     */
    protected $totalVatSell;

    /**
     * @ORM\Column(name="quantity", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Quantity"})
     */
    protected $quantity;


    /**
     * Set vatCodeObj
     * @param \Bck\AccountingBundle\Entity\VatCode $vatCodeObj
     * @return $this
     */
    public function setVatCodeObj(\Bck\AccountingBundle\Entity\VatCode $vatCodeObj)
    {
        $this->vatCodeObj = $vatCodeObj;
        return $this;
    }

    /**
     * Get vatCodeObj
     *
     * @return \Bck\AccountingBundle\Entity\VatCode
     */
    public function getVatCodeObj()
    {
        return $this->vatCodeObj;
    }

    /**
     * Set vatValueCost
     *
     * @param string $vatValueCost
     *
     * @return $this
     */
    public function setVatValueCost($vatValueCost)
    {
        $this->vatValueCost = $vatValueCost;

        return $this;
    }

    /**
     * Get vatValueCost
     *
     * @return string
     */
    public function getVatValueCost()
    {
        return $this->vatValueCost;
    }

    /**
     * Set sellValue
     *
     * @param string $vatValueSell
     *
     * @return $this
     */
    public function setVatValueSell($vatValueSell)
    {
        $this->vatValueSell = $vatValueSell;

        return $this;
    }

    /**
     * Get vatValueSell
     *
     * @return string
     */
    public function getVatValueSell()
    {
        return $this->vatValueSell;
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
     * Set subTotalCost
     * @param string $subTotalCost
     * @return $this
     */
    public function setSubTotalCost($subTotalCost)
    {
        $this->subTotalCost = $subTotalCost;
        return $this;
    }

    /**
     * Get subTotalCost
     * @return string
     */
    public function getSubTotalCost()
    {
        return $this->subTotalCost;
    }

    /**
     * Set subTotalSell
     * @param string $subTotalSell
     * @return $this
     */
    public function setSubTotalSell($subTotalSell)
    {
        $this->subTotalSell = $subTotalSell;
        return $this;
    }

    /**
     * Get subTotalSell
     * @return string
     */
    public function getSubTotalSell()
    {
        return $this->subTotalSell;
    }

    /**
     * Set totalVatCost
     * @param string $totalVatCost
     * @return $this
     */
    public function setTotalVatCost($totalVatCost)
    {
        $this->totalVatCost = $totalVatCost;
        return $this;
    }

    /**
     * Get totalVatCost
     * @return string
     */
    public function getTotalVatCost()
    {
        return $this->totalVatCost;
    }

    /**
     * Set totalVatSell
     * @param string $totalVatSell
     * @return $this
     */
    public function setTotalVatSell($totalVatSell)
    {
        $this->totalVatSell = $totalVatSell;
        return $this;
    }

    /**
     * Get totalVatSell
     * @return string
     */
    public function getTotalVatSell()
    {
        return $this->totalVatSell;
    }

    /**
     * Get total unit cost
     * @return string
     */
    public function getTotalUnitCost()
    {
        return round($this->costValue + $this->vatValueCost, 2);
    }

    /**
     * Get total unit sell
     * @return string
     */
    public function getTotalUnitSell()
    {
        return round($this->sellValue + $this->vatValueSell, 2);
    }

    /**
     * Get total cost
     * @return string
     */
    public function getTotalCost()
    {
        // For direct queries use "SUM()"
        return round($this->subTotalCost + $this->totalVatCost, 2);
    }

    /**
     * Get total sell
     * @return string
     */
    public function getTotalSell()
    {
        // For direct queries use "SUM()"
        return round($this->subTotalSell + $this->totalVatSell, 2);
    }


    ////////
    // Fake methods to keep default values
    ////////////////////////////////

    /**
     * Get user_costValue
     * @return float
     */
    public function getUser_costValue()
    {
        // Value, according with the "getIsVatIncluded" returned value
        if ($this->getIsVatIncluded()) {
            return $this->getTotalUnitCost();
        }

        return $this->getCostValue();
    }

    /**
     * Get user_sellValue
     * @return float
     */
    public function getUserSellValue()
    {
        // Value, according with the "getIsVatIncluded" returned value
        if ($this->getIsVatIncluded()) {
            return $this->getTotalUnitSell();
        }

        return $this->getSellValue();
    }
}
<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Service\PriceService;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseCostWithVatRepository")
 */
class BaseCostWithVat extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\VatCode")
     * @ORM\JoinColumn(name="fk_vatCode", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * VAT code needs to be defined, because fixed costs can be related to services with VAT codes completely different
     * of the parent serviceObj, so each fixed cost has your onw VAT code associated.
     */
    protected $vatCodeObj;

    /**
     * @ORM\Column(name="isVatIncluded", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Controls how to return the fake fields user_..."})
     */
    protected $isVatIncluded;

    /**
     * @ORM\Column(name="costValue", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Cost value"})
     * Note: Value without VAT
     */
    protected $costValue;

    /**
     * @ORM\Column(name="vatValueCost", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Cost VAT value"})
     */
    protected $vatValueCost;


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
     * Set costValue
     *
     * @param string $costValue
     *
     * @return $this
     */
    public function setCostValue($costValue)
    {
        $this->costValue = $costValue;

        return $this;
    }

    /**
     * Get costValue
     *
     * @return string
     */
    public function getCostValue()
    {
        return $this->costValue;
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
     * Get total cost
     * @return string
     */
    public function getTotalCost()
    {
        // For direct queries use "SUM()"
        return round($this->costValue + $this->vatValueCost, 2);
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
            $splitPrice = PriceService::getTotalUnitDetail(
                $this->getCostValue(),
                $this->getVatCodeObj()->getPercentage(),
                false
            );

            return ($splitPrice['totalUnit']);
        }

        return $this->getCostValue();
    }
}
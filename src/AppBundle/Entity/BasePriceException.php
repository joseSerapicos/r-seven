<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BasePriceExceptionRepository")
 *
 * It's used to modify the default (base) price (to add a discount or a supplement over the original price by date)
 */
class BasePriceException extends BaseEntity
{
    /**
     * @ORM\Column(name="postingType", type="string", length=8, nullable=false, unique=false, options={"comment":"Type of posting"})
     */
    protected $postingType; // [CREDIT (for margin/discount), DEBIT]

    /**
     * @ORM\Column(name="isVatIncluded", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Controls how to show the fake field user_..."})
     */
    protected $isVatIncluded;


    ////////
    // Cost
    ////////////////////////////////

    /**
     * @ORM\Column(name="costBaseValue", type="string", length=10, nullable=true, unique=false, options={"comment":"Determines the base value to apply the cost"})
     */
    protected $costBaseValue; // [BASE_COST]

    /**
     * @ORM\Column(name="costMethod", type="string", length=8, nullable=false, unique=false, options={"comment":"Method to use to determinate the cost"})
     */
    protected $costMethod; // [PERCENT (value = value * (1 + percent/100)), FIXED]

    /**
     * @ORM\Column(name="costValue", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Cost value"})
     */
    protected $costValue;


    ////////
    // Sell
    ////////////////////////////////

    /**
     * @ORM\Column(name="marginBaseValue", type="string", length=10, nullable=true, unique=false, options={"comment":"Determines the base value to apply the margin"})
     */
    protected $marginBaseValue; // [COST, BASE_SELL]

    /**
     * @ORM\Column(name="marginMethod", type="string", length=8, nullable=false, unique=false, options={"comment":"Margin method to use to determinate the sell"})
     *
     * Use [FIXED, MARGIN or MARKUP] when $marginBaseValue = 'COST', use [FIXED or PERCENT] when $marginBaseValue = 'BASE_SELL',
     */
    protected $marginMethod; // [MARGIN (over sell price), MARKUP (over cost price), FIXED, PERCENT (value = value* (1 + percent/100))]

    /**
     * @ORM\Column(name="marginValue", type="decimal", scale=4, nullable=false, unique=false, options={"comment":"Margin value"})
     */
    protected $marginValue;


    /**
     * Set postingType
     *
     * @param string $postingType
     *
     * @return $this
     */
    public function setPostingType($postingType)
    {
        if (!empty($postingType) && !in_array($postingType, array("CREDIT", "DEBIT"))) {
            throw new \InvalidArgumentException("Invalid posting type");
        }
        $this->postingType = $postingType;

        return $this;
    }

    /**
     * Get postingType
     *
     * @return string
     */
    public function getPostingType()
    {
        return $this->postingType;
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
     * Set costBaseValue
     *
     * @param string $costBaseValue
     *
     * @return $this
     */
    public function setCostBaseValue($costBaseValue)
    {
        if (!empty($costBaseValue) && !in_array($costBaseValue, array("BASE_COST"))) {
            throw new \InvalidArgumentException("Invalid sell base value");
        }
        $this->costBaseValue = $costBaseValue;

        return $this;
    }

    /**
     * Get costBaseValue
     *
     * @return string
     */
    public function getCostBaseValue()
    {
        return $this->costBaseValue;
    }

    /**
     * Set costMethod
     *
     * @param string $costMethod
     *
     * @return $this
     */
    public function setCostMethod($costMethod)
    {
        if (!empty($costMethod) && !in_array($costMethod, array("FIXED", "PERCENT"))) {
            throw new \InvalidArgumentException("Invalid cost method");
        }
        $this->costMethod = $costMethod;

        return $this;
    }

    /**
     * Get costMethod
     *
     * @return string
     */
    public function getCostMethod()
    {
        return $this->costMethod;
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
     * Set marginBaseValue
     *
     * @param string $marginBaseValue
     *
     * @return $this
     */
    public function setMarginBaseValue($marginBaseValue)
    {
        if (!empty($marginBaseValue) && !in_array($marginBaseValue, array("COST", "BASE_SELL"))) {
            throw new \InvalidArgumentException("Invalid sell base value");
        }
        $this->marginBaseValue = $marginBaseValue;

        return $this;
    }

    /**
     * Get marginBaseValue
     *
     * @return string
     */
    public function getMarginBaseValue()
    {
        return $this->marginBaseValue;
    }

    /**
     * Set marginMethod
     *
     * @param string $marginMethod
     *
     * @return $this
     */
    public function setMarginMethod($marginMethod)
    {
        if (!empty($marginMethod) && !in_array($marginMethod, array("FIXED", "MARGIN", "MARKUP", "PERCENT"))) {
            throw new \InvalidArgumentException("Invalid sell method");
        }
        $this->marginMethod = $marginMethod;

        return $this;
    }

    /**
     * Get marginMethod
     *
     * @return string
     */
    public function getMarginMethod()
    {
        return $this->marginMethod;
    }

    /**
     * Set marginValue
     *
     * @param string $marginValue
     *
     * @return $this
     */
    public function setMarginValue($marginValue)
    {
        $this->marginValue = $marginValue;

        return $this;
    }

    /**
     * Get marginValue
     *
     * @return string
     */
    public function getMarginValue()
    {
        return $this->marginValue;
    }
}

<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BasePriceRepository")
 */
class BasePrice extends BaseEntity
{
    /**
     * @ORM\Column(name="isVatIncluded", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Controls how to return the fake fields user_..."})
     */
    protected $isVatIncluded;

    /**
     * @ORM\Column(name="costValue", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Cost value"})
     */
    protected $costValue;

    /**
     * @ORM\Column(name="marginMethod", type="string", length=8, nullable=true, unique=false, options={"comment":"Method to use to determinate the value"})
     * check here the concept: https://en.wikipedia.org/wiki/Markup_(business)
     */
    protected $marginMethod; // [MARGIN (over sell price), MARKUP (over cost price), FIXED]

    /**
     * @ORM\Column(name="marginValue", type="decimal", scale=4, nullable=true, unique=false, options={"default":"0", "comment":"Margin value"})
     */
    protected $marginValue;

    /**
     * @ORM\Column(name="sellValue", type="decimal", scale=4, nullable=false, unique=false, options={"default":"0", "comment":"Sell value"})
     */
    protected $sellValue;

    /**
     * @ORM\Column(name="userFieldTyped", type="string", length=6, nullable=false, unique=false, options={"comment":"Field typed by user (COST or SELL)"})
     *
     * Field typed by user in form, it's necessary to be able to validate calc in back-office (remaking the same calc)
     * and save in database if there is a need for an audit.
     */
    protected $userFieldTyped; // [COST, SELL]


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
     * Set marginMethod
     *
     * @param string $marginMethod
     *
     * @return $this
     */
    public function setMarginMethod($marginMethod)
    {
        if (!empty($marginMethod) && !in_array($marginMethod, array("FIXED", "MARGIN", "MARKUP"))) {
            throw new \InvalidArgumentException("Invalid margin type");
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

    /**
     * Set sellValue
     *
     * @param string $sellValue
     *
     * @return $this
     */
    public function setSellValue($sellValue)
    {
        $this->sellValue = $sellValue;
        return $this;
    }

    /**
     * Get sellValue
     *
     * @return float
     */
    public function getSellValue()
    {
        return $this->sellValue;
    }

    /**
     * Set userFieldTyped
     *
     * @param string $userFieldTyped
     *
     * @return $this
     */
    public function setUserFieldTyped($userFieldTyped)
    {
        if (!in_array($userFieldTyped, array("COST", "SELL"))) {
            throw new \InvalidArgumentException("Invalid user field typed");
        }
        $this->userFieldTyped = $userFieldTyped;

        return $this;
    }

    /**
     * Get userFieldTyped
     *
     * @return string
     */
    public function getUserFieldTyped()
    {
        return $this->userFieldTyped;
    }
}
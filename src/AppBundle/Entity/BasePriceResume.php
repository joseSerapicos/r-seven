<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BasePriceResumeRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 * Calculated fields are used to increase performance in queries.
 */
class BasePriceResume extends BaseEntity
{
    /**
     * @ORM\Column(name="subTotalCost", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Cost sub total"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $subTotalCost;

    /**
     * @ORM\Column(name="subTotalSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Sell sub total"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $subTotalSell;

    /**
     * @ORM\Column(name="totalVatCost", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total VAT of cost value"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $totalVatCost;

    /**
     * @ORM\Column(name="totalVatSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total VAT of sell value"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $totalVatSell;

    /**
     * @ORM\Column(name="totalMargin", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total margin"})
     * Determines the real value after rounding (2 decimals is enough, this value is not used to make calculus, but only informative)
     */
    protected $totalMargin;

    /**
     * @ORM\Column(name="totalMarkup", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total markup"})
     * Determines the real value after rounding (2 decimals is enough, this value is not used to make calculus, but only informative)
     */
    protected $totalMarkup;

    /**
     * @ORM\Column(name="totalProfit", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total profit"})
     * Determines the real value after rounding (2 decimals is enough, this value is not used to make calculus, but only informative)
     */
    protected $totalProfit;


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


    ////////
    // This fields could be fake fields and have only a getter that calculates the value at runtime base on costSubTotal
    // and totalValue, but search doesn't uses the object getters nor the normalizer, get values directly from database,
    // so values need to be available on database for best performance.
    //
    // This fields determine the real value after rounding (2 decimals is enough,
    // this value is not used to make calculus, but only informative)
    ////////////////////////////////

    /**
     * Set totalMargin
     * @param string $totalMargin
     * @return $this
     */
    public function setTotalMargin($totalMargin)
    {
        $this->totalMargin = $totalMargin;
        return $this;
    }

    /**
     * Get totalMargin
     * @return string
     */
    public function getTotalMargin()
    {
        return $this->totalMargin;
    }

    /**
     * Set totalMarkup
     * @param string $totalMarkup
     * @return $this
     */
    public function setTotalMarkup($totalMarkup)
    {
        $this->totalMarkup = $totalMarkup;
        return $this;
    }

    /**
     * Get totalMarkup
     * @return string
     */
    public function getTotalMarkup()
    {
        return $this->totalMarkup;
    }

    /**
     * Set totalProfit
     * @param string $totalProfit
     * @return $this
     */
    public function setTotalProfit($totalProfit)
    {
        $this->totalProfit = $totalProfit;
        return $this;
    }

    /**
     * Get totalProfit
     * @return string
     */
    public function getTotalProfit()
    {
        return $this->totalProfit;
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

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     *
     * Pre upload
     * @return $this
     */
    public function preUpload()
    {
        $sellValue = $this->getSubTotalSell();
        $costValue = $this->getSubTotalCost();

        $this->totalProfit = round($sellValue - $costValue, 2);
        if ($this->totalProfit <= 0) { // No profit => margin and markup is 0% or negative (avoid division by 0)
            $this->totalMargin = $this->totalMarkup = '0.00';
        } else if ($costValue == 0) { // No cost => margin and markup is 100% (avoid division by 0)
            $this->totalMargin = $this->totalMarkup = '100.00';
        } else {
            $this->totalMargin = round(($this->totalProfit / $sellValue) * 100, 2);
            $this->totalMarkup = round(($this->totalProfit / $costValue) * 100, 2);
        }

        return $this;
    }
}
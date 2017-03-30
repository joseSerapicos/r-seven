<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BasePriceRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 * Defines totals for price.
 * Calculated fields are used to increase performance in queries.
 */
class BasePriceTotals extends BaseEntity
{
    /**
     * @ORM\Column(name="totalCost", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total cost value"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $totalCost;

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
     * @ORM\Column(name="totalSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total sell value"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $totalSell;


    /**
     * Set totalCost
     * @param string $totalCost
     * @return $this
     */
    public function setTotalCost($totalCost)
    {
        $this->totalCost = $totalCost;
        return $this;
    }

    /**
     * Get totalCost
     * @return string
     */
    public function getTotalCost()
    {
        return $this->totalCost;
    }

    /**
     * Set totalSell
     * @param string $totalSell
     * @return $this
     */
    public function setTotalSell($totalSell)
    {
        $this->totalSell = $totalSell;
        return $this;
    }

    /**
     * Get totalSell
     * @return string
     */
    public function getTotalSell()
    {
        return $this->totalSell;
    }


    ////////
    // This fields could be fake fields and have only a getter that calculates the value at runtime base on totalCost
    // and totalValue, but search doesn't uses the object getters nor the normalizer, get values directly from database,
    // so values need to be available on database.
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
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     *
     * Pre upload
     * @return $this
     */
    public function preUpload()
    {
        $this->totalProfit = round($this->totalSell - $this->totalCost, 2);
        if ($this->totalProfit <= 0) { // No profit => margin and markup is 0% or negative (avoid division by 0)
            $this->totalMargin = $this->totalMarkup = '0.00';
        } else if ($this->totalCost == 0) { // No cost => margin and markup is 100% (avoid division by 0)
            $this->totalMargin = $this->totalMarkup = '100.00';
        } else {
            $this->totalMargin = round(($this->totalProfit / $this->totalSell) * 100, 2);
            $this->totalMarkup = round(($this->totalProfit / $this->totalCost) * 100, 2);
        }

        return $this;
    }
}
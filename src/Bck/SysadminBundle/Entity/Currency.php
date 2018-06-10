<?php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\CurrencyRepository")
 * @ORM\Table(name="tt_app.app_currency")
 */
class Currency extends BaseEntity
{
    /**
     * @ORM\Column(name="code", type="string", length=3, nullable=false, unique=true, options={"comment":"Code"})
     *
     * Used by Paypal
     */
    protected $code;

    /**
     * @ORM\Column(name="symbol", type="string", length=3, nullable=false, unique=false, options={"comment":"Symbol"})
     */
    protected $symbol;

    /**
     * @ORM\Column(name="name_pt", type="string", length=32, nullable=false, unique=true, options={"comment":"Name"})
     *
     * Portuguese
     */
    protected $name_pt;

    /**
     * @ORM\Column(name="name_es", type="string", length=32, nullable=false, unique=true, options={"comment":"Name"})
     *
     * Spanish
     */
    protected $name_es;

    /**
     * @ORM\Column(name="name_en", type="string", length=32, nullable=false, unique=true, options={"comment":"Name"})
     *
     * English
     */
    protected $name_en;


    /**
     * Set code
     * @param string $code
     * @return object
     */
    public function setCode($code)
    {
        $this->code = $code;
        return $this;
    }

    /**
     * Get code
     * @return string 
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set symbol
     * @param string $symbol
     * @return object
     */
    public function setSymbol($symbol)
    {
        $this->symbol = $symbol;
        return $this;
    }

    /**
     * Get symbol
     * @return string
     */
    public function getSymbol()
    {
        return $this->symbol;
    }

    /**
     * Set name_pt
     * @param string $name_pt
     * @return object
     */
    public function setNamePt($name_pt)
    {
        $this->name_pt = $name_pt;
        return $this;
    }

    /**
     * Get name_pt
     * @return string
     */
    public function getNamePt()
    {
        return $this->name_pt;
    }

    /**
     * Set name_es
     * @param string $name_es
     * @return object
     */
    public function setNameEs($name_es)
    {
        $this->name_es = $name_es;
        return $this;
    }

    /**
     * Get name_es
     * @return string
     */
    public function getNameEs()
    {
        return $this->name_es;
    }

    /**
     * Set name_en
     * @param string $name_en
     * @return object
     */
    public function setNameEn($name_en)
    {
        $this->name_en = $name_en;
        return $this;
    }

    /**
     * Get name_en
     * @return string
     */
    public function getNameEn()
    {
        return $this->name_en;
    }
}
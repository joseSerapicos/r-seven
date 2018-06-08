<?php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\CountryRepository")
 * @ORM\Table(name="wo_app.app_country")
 */
class Country extends BaseEntity
{
    /**
     * @ORM\Column(name="alpha2Code", type="string", length=2, nullable=false, unique=true, options={"comment":"Alpha2 code"})
     *
     * Country alpha2 code
     */
    protected $alpha2Code;

    /**
     * @ORM\Column(name="alpha3Code", type="string", length=3, nullable=false, unique=true, options={"comment":"Alpha3 code"})
     *
     * Country alpha3 code
     */
    protected $alpha3Code;

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
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\Icon")
     * @ORM\JoinColumn(name="fkApp_icon", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Icon country flag
     */
    protected $appIconObj;


    /**
     * Set alpha2Code
     * @param string $alpha2Code
     * @return object
     */
    public function setAlpha2Code($alpha2Code)
    {
        $this->alpha2Code = $alpha2Code;
        return $this;
    }

    /**
     * Get alpha2Code
     * @return string
     */
    public function getAlpha2Code()
    {
        return $this->alpha2Code;
    }

    /**
     * Set alpha3Code
     * @param string $alpha3Code
     * @return object
     */
    public function setAlpha3Code($alpha3Code)
    {
        $this->alpha3Code = $alpha3Code;
        return $this;
    }

    /**
     * Get alpha3Code
     * @return string
     */
    public function getAlpha3Code()
    {
        return $this->alpha3Code;
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

    /**
     * Set appIconObj
     * @param integer $appIconObj
     * @return $this
     */
    public function setAppIconObj($appIconObj = null)
    {
        $this->appIconObj = $appIconObj;
        return $this;
    }

    /**
     * Get appIconObj
     * @return integer
     */
    public function getAppIconObj()
    {
        return $this->appIconObj;
    }
}
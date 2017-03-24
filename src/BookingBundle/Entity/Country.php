<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\CountryRepository")
 * @ORM\Table(name="country")
 */
class Country extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\SysadminBundle\Entity\Icon")
     * @ORM\JoinColumn(name="fkApp_icon", referencedColumnName="id", nullable=true, unique=true, onDelete="SET NULL")
     * 
     * Icon country flag
     */
    protected $appIconObj;
    
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="isoAlpha2Code", type="string", length=2, nullable=true, unique=true, options={"comment":"ISO alpha-2 code"})
     */
    protected $isoAlpha2Code;

    /**
     * @ORM\Column(name="isoAlpha3Code", type="string", length=3, nullable=true, unique=true, options={"comment":"ISO alpha-3 code"})
     */
    protected $isoAlpha3Code;

    /**
     * @ORM\Column(name="isoNumericCode", type="smallint", nullable=true, unique=true, options={"unsigned":true, "comment":"ISO numeric code"})
     */
    protected $isoNumericCode;

    /**
     * @ORM\Column(name="capital", type="string", length=64, nullable=true, unique=false, options={"comment":"Capital"})
     */
    protected $capital;

    /**
     * @ORM\Column(name="continent", type="string", length=16, nullable=true, unique=false, options={"comment":"Continent"})
     */
    protected $continent;

    /**
     * @ORM\Column(name="languages", type="string", length=32, nullable=true, unique=false, options={"comment":"Languages"})
     */
    protected $languages;

    /**
     * Set name
     *
     * @param string $name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set isoAlpha2Code
     *
     * @param string $isoAlpha2Code
     *
     * @return $this
     */
    public function setIsoAlpha2Code($isoAlpha2Code)
    {
        $this->isoAlpha2Code = $isoAlpha2Code;

        return $this;
    }

    /**
     * Get isoAlpha2Code
     *
     * @return string
     */
    public function getIsoAlpha2Code()
    {
        return $this->isoAlpha2Code;
    }

    /**
     * Set isoAlpha3Code
     *
     * @param string $isoAlpha3Code
     *
     * @return $this
     */
    public function setIsoAlpha3Code($isoAlpha3Code)
    {
        $this->isoAlpha3Code = $isoAlpha3Code;

        return $this;
    }

    /**
     * Get isoAlpha3Code
     *
     * @return string
     */
    public function getIsoAlpha3Code()
    {
        return $this->isoAlpha3Code;
    }

    /**
     * Set isoNumericCode
     *
     * @param \DateTime $isoNumericCode
     *
     * @return $this
     */
    public function setIsoNumericCode($isoNumericCode)
    {
        $this->isoNumericCode = $isoNumericCode;

        return $this;
    }

    /**
     * Get isoNumericCode
     *
     * @return \DateTime
     */
    public function getIsoNumericCode()
    {
        return $this->isoNumericCode;
    }

    /**
     * Set capital
     *
     * @param string $capital
     *
     * @return $this
     */
    public function setCapital($capital)
    {
        $this->capital = $capital;

        return $this;
    }

    /**
     * Get capital
     *
     * @return string
     */
    public function getCapital()
    {
        return $this->capital;
    }


    /**
     * Set continent
     *
     * @param string $continent
     *
     * @return $this
     */
    public function setContinent($continent)
    {
        $this->continent = $continent;

        return $this;
    }

    /**
     * Get continent
     *
     * @return string
     */
    public function getContinent()
    {
        return $this->continent;
    }


    /**
     * Set languages
     *
     * @param string $languages
     *
     * @return $this
     */
    public function setLanguages($languages)
    {
        $this->languages = $languages;

        return $this;
    }

    /**
     * Get languages
     *
     * @return string
     */
    public function getLanguages()
    {
        return $this->languages;
    }

    /**
     * Set appIconObj
     * @param integer $appIconObj
     * @return $this
     */
    public function setAppIconObj($appIconObj)
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
<?php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\LanguageRepository")
 * @ORM\Table(name="wo_app.app_language",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_language_country", columns={"languageCode", "fkApp_country"})}
 * )
 *
 * NOTE: appIconObj, languageCode and countryCode are not unique because we suppose that:
 *     - One country can have multiple languages (LU: fr, de)
 *     - One language can be used in multiple countries (pt: PT, BR, etc)
 */
class Language extends BaseEntity
{
    /**
     * @ORM\Column(name="systemPrefix", type="string", length=2, nullable=false, unique=true, options={"comment":"System prefix"})
     *
     * Prefix used in system (tables, language files, etc.)
     */
    protected $systemPrefix;

    /**
     * @ORM\Column(name="languageCode", type="string", length=2, nullable=false, unique=false, options={"comment":"Language code in ISO 639-1"})
     *
     * Languages code (ISO 639-1 code)
     */
    protected $languageCode;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\Country")
     * @ORM\JoinColumn(name="fkApp_country", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $appCountryObj;

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
     * Set systemPrefix
     * @param string $systemPrefix
     * @return object
     */
    public function setSystemPrefix($systemPrefix)
    {
        $this->systemPrefix = $systemPrefix;
        return $this;
    }

    /**
     * Get systemPrefix
     * @return string
     */
    public function getSystemPrefix()
    {
        return $this->systemPrefix;
    }

    /**
     * Set languageCode
     * @param string $languageCode
     * @return object
     */
    public function setLanguageCode($languageCode)
    {
        $this->languageCode = $languageCode;
        return $this;
    }

    /**
     * Get languageCode
     * @return string
     */
    public function getLanguageCode()
    {
        return $this->languageCode;
    }

    /**
     * Set appCountryObj
     * @param integer $appCountryObj
     * @return $this
     */
    public function setAppCountryObj($appCountryObj)
    {
        $this->appCountryObj = $appCountryObj;
        return $this;
    }

    /**
     * Get appCountryObj
     * @return integer
     */
    public function getAppCountryObj()
    {
        return $this->appCountryObj;
    }

    /**
     * Get lcCode. Return the language_country code (lcCode). In database queries use CONCAT.
     * It's the code used by Paypal
     * @return string
     */
    public function getLcCode()
    {
        // [ISO 639-1]_[ISO 3166-1 alfa-2]
        return ($this->languageCode . '_' . $this->appCountryObj->getAlpha2Code());
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
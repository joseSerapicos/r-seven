<?php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\ProvinceRepository")
 * @ORM\Table(name="tt_app.app_province")
 */
class Province extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\Country")
     * @ORM\JoinColumn(name="fkApp_country", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $appCountryObj;

    /**
     * @ORM\Column(name="code", type="string", length=8, nullable=false, unique=true, options={"comment":"Code"})
     */
    protected $code;

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
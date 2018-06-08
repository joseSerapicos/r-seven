<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\FrtSettingRepository")
 * @ORM\Table(name="frtSetting"
 * )
 */
class FrtSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_frtStore", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     */
    protected $frtStoreObj;

    /**
     * @ORM\Column(name="company", type="string", length=32, nullable=false, unique=true, options={"comment":"Company name"})
     */
    protected $company;

    /**
     * @ORM\Column(name="slogan", type="string", length=256, nullable=true, unique=false, options={"comment":"Slogan"})
     */
    protected $slogan;

    /**
     * @ORM\Column(name="headerBgColor", type="string", length=7, nullable=true, unique=false, options={"comment":"Header background color"})
     */
    protected $headerBgColor;

    /**
     * @ORM\Column(name="bgColor", type="string", length=7, nullable=true, unique=false, options={"comment":"Background color"})
     */
    protected $bgColor;

    /**
     * @ORM\Column(name="headerTxtColor", type="string", length=7, nullable=true, unique=false, options={"comment":"Header text color"})
     */
    protected $headerTxtColor;

    /**
     * @ORM\Column(name="txtColor", type="string", length=7, nullable=true, unique=false, options={"comment":"Text color"})
     */
    protected $txtColor;


    /**
     * Set frtStoreObj
     * @param \Bck\AdminBundle\Entity\Store $frtStoreObj
     * @return object
     */
    public function setFrtStoreObj(\Bck\AdminBundle\Entity\Store $frtStoreObj)
    {
        $this->frtStoreObj = $frtStoreObj;
        return $this;
    }

    /**
     * Get frtStoreObj
     * @return \Bck\AdminBundle\Entity\store
     */
    public function getFrtStoreObj()
    {
        return $this->frtStoreObj;
    }

    /**
     * Set company
     *
     * @param string $company
     *
     * @return $this
     */
    public function setCompany($company)
    {
        $this->company = $company;

        return $this;
    }

    /**
     * Get company
     *
     * @return string
     */
    public function getCompany()
    {
        return $this->company;
    }

    /**
     * Set slogan
     *
     * @param string $slogan
     *
     * @return $this
     */
    public function setSlogan($slogan)
    {
        $this->slogan = $slogan;

        return $this;
    }

    /**
     * Get slogan
     *
     * @return string
     */
    public function getSlogan()
    {
        return $this->slogan;
    }

    /**
     * Set headerBgColor
     *
     * @param string $headerBgColor
     *
     * @return $this
     */
    public function setHeaderBgColor($headerBgColor)
    {
        $this->headerBgColor = $headerBgColor;

        return $this;
    }

    /**
     * Get headerBgColor
     *
     * @return string
     */
    public function getHeaderBgColor()
    {
        return $this->headerBgColor;
    }

    /**
     * Set bgColor
     *
     * @param string $bgColor
     *
     * @return $this
     */
    public function setBgColor($bgColor)
    {
        $this->bgColor = $bgColor;

        return $this;
    }

    /**
     * Get bgColor
     *
     * @return string
     */
    public function getBgColor()
    {
        return $this->bgColor;
    }

    /**
     * Set headerTxtColor
     *
     * @param string $headerTxtColor
     *
     * @return $this
     */
    public function setHeaderTxtColor($headerTxtColor)
    {
        $this->headerTxtColor = $headerTxtColor;

        return $this;
    }

    /**
     * Get headerTxtColor
     *
     * @return string
     */
    public function getHeaderTxtColor()
    {
        return $this->headerTxtColor;
    }

    /**
     * Set txtColor
     *
     * @param string $txtColor
     *
     * @return $this
     */
    public function setTxtColor($txtColor)
    {
        $this->txtColor = $txtColor;

        return $this;
    }

    /**
     * Get txtColor
     *
     * @return string
     */
    public function getTxtColor()
    {
        return $this->txtColor;
    }
}
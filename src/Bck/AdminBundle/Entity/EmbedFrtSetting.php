<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\EmbedFrtSettingRepository")
 * @ORM\Table(name="embedFrtSetting"
 * )
 */
class EmbedFrtSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=true, onDelete="CASCADE")
     */
    protected $storeObj;

    /**
     * @ORM\Column(name="slogan", type="string", length=256, nullable=true, unique=false, options={"comment":"Slogan"})
     */
    protected $slogan;

    /**
     * @ORM\Column(name="baseUrl", type="string", length=256, nullable=true, unique=false, options={"comment":"Base url"})
     */
    protected $baseUrl;

    /**
     * @ORM\Column(name="hasHeader", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables header page"})
     */
    protected $hasHeader;

    /**
     * @ORM\Column(name="hasFooter", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables footer page"})
     */
    protected $hasFooter;

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
     * Set storeObj
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return object
     */
    public function setStoreObj(\Bck\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \Bck\AdminBundle\Entity\store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
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
     * Set baseUrl
     *
     * @param string $baseUrl
     *
     * @return $this
     */
    public function setBaseUrl($baseUrl)
    {
        $this->baseUrl = $baseUrl;

        return $this;
    }

    /**
     * Get baseUrl
     *
     * @return string
     */
    public function getBaseUrl()
    {
        return $this->baseUrl;
    }

    /**
     * Set hasHeader
     * @param $hasHeader
     * @return $this
     */
    public function setHasHeader($hasHeader)
    {
        $this->hasHeader = $hasHeader;
        return $this;
    }

    /**
     * Get hasHeader
     * @return \DateTime
     */
    public function getHasHeader()
    {
        return $this->hasHeader;
    }

    /**
     * Set hasFooter
     * @param $hasFooter
     * @return $this
     */
    public function setHasFooter($hasFooter)
    {
        $this->hasFooter = $hasFooter;
        return $this;
    }

    /**
     * Get hasFooter
     * @return \DateTime
     */
    public function getHasFooter()
    {
        return $this->hasFooter;
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
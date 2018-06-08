<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\SystemSettingRepository")
 * @ORM\Table(name="systemSetting"
 * )
 */
class SystemSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\Country")
     * @ORM\JoinColumn(name="fkApp_country", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     */
    protected $appCountryObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\Currency")
     * @ORM\JoinColumn(name="fkApp_currency", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     */
    protected $appCurrencyObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\Language")
     * @ORM\JoinColumn(name="fkApp_language", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     */
    protected $appLanguageObj;


    /**
     * Set appCountryObj
     * @param \Bck\SysadminBundle\Entity\Country $appCountryObj
     * @return object
     */
    public function setAppCountryObj(\Bck\SysadminBundle\Entity\Country $appCountryObj)
    {
        $this->appCountryObj = $appCountryObj;
        return $this;
    }

    /**
     * Get appCountryObj
     * @return \Bck\SysadminBundle\Entity\Country
     */
    public function getAppCountryObj()
    {
        return $this->appCountryObj;
    }

    /**
     * Set appCurrencyObj
     * @param \Bck\SysadminBundle\Entity\Currency $appCurrencyObj
     * @return object
     */
    public function setAppCurrencyObj(\Bck\SysadminBundle\Entity\Currency $appCurrencyObj)
    {
        $this->appCurrencyObj = $appCurrencyObj;
        return $this;
    }

    /**
     * Get appCurrencyObj
     * @return \Bck\SysadminBundle\Entity\Currency
     */
    public function getAppCurrencyObj()
    {
        return $this->appCurrencyObj;
    }

    /**
     * Set appLanguageObj
     * @param \Bck\SysadminBundle\Entity\Language $appLanguageObj
     * @return object
     */
    public function setAppLanguageObj(\Bck\SysadminBundle\Entity\Language $appLanguageObj)
    {
        $this->appLanguageObj = $appLanguageObj;
        return $this;
    }

    /**
     * Get appLanguageObj
     * @return \Bck\SysadminBundle\Entity\Language
     */
    public function getAppLanguageObj()
    {
        return $this->appLanguageObj;
    }
}
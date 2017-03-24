<?php
// src/AdminBundle/Entity/ModuleMenuSetting.php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\ModuleMenuSettingRepository")
 * @ORM\Table(name="moduleMenuSetting",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_moduleMenuSetting_value", columns={"fkApp_moduleMenuSetting", "fk_store", "fk_user"})},
 *     indexes={@ORM\Index(name="idx_module_menu_setting_value", columns={"fk_moduleMenu", "fk_store", "fk_user"})})
 */
class ModuleMenuSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\SysadminBundle\Entity\ModuleMenuSetting")
     * @ORM\JoinColumn(name="fkApp_moduleMenuSetting", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $appModuleMenuSettingObj;

    /**
     * @ORM\ManyToOne(targetEntity="ModuleMenu")
     * @ORM\JoinColumn(name="fk_moduleMenu", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $moduleMenuObj;

    /**
     * @ORM\ManyToOne(targetEntity="Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     */
    protected $storeObj;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     */
    protected $userObj;

    /**
     * @ORM\Column(name="value", type="string", length=256, nullable=false, unique=false, options={"comment":"Value for setting"})
     */
    protected $value;


    /**
     * Set appModuleMenuSettingObj
     * @param integer $appModuleMenuSettingObj
     * @return ModuleMenuSetting
     */
    public function setAppModuleMenuSettingObj($appModuleMenuSettingObj)
    {
        $this->appModuleMenuSettingObj = $appModuleMenuSettingObj;
        return $this;
    }

    /**
     * Get appModuleMenuSettingObj
     * @return integer
     */
    public function getAppModuleMenuSettingObj()
    {
        return $this->appModuleMenuSettingObj;
    }

    /**
     * Set moduleMenuObj
     * @param integer $moduleMenuObj
     * @return ModuleMenuSetting
     */
    public function setModuleMenuObj($moduleMenuObj)
    {
        $this->moduleMenuObj = $moduleMenuObj;
        return $this;
    }

    /**
     * Get moduleMenuObj
     * @return integer 
     */
    public function getModuleMenuObj()
    {
        return $this->moduleMenuObj;
    }

    /**
     * Set storeObj
     * @param integer $storeObj
     * @return ModuleMenuSetting
     */
    public function setStoreObj($storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return integer
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Set userObj
     * @param integer $userObj
     * @return ModuleMenuSetting
     */
    public function setUserObj($userObj)
    {
        $this->userObj = $userObj;
        return $this;
    }

    /**
     * Get userObj
     * @return integer
     */
    public function getUserObj()
    {
        return $this->userObj;
    }

    /**
     * Set value
     *
     * @param string $value
     * @return ModuleMenuSetting
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * Get value
     *
     * @return string 
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Get name
     * @return mixed|null
     */
    public function getName()
    {
        return null;
    }
}
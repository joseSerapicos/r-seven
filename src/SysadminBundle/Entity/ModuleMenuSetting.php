<?php
// src/SysadminBundle/Entity/ModuleMenuSetting.php

namespace SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="SysadminBundle\Entity\ModuleMenuSettingRepository")
 * @ORM\Table(name="wo_app.app_moduleMenuSetting",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_moduleMenuSetting_name", columns={"name", "fkApp_moduleMenu"})})
 */
class ModuleMenuSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="ModuleMenu")
     * @ORM\JoinColumn(name="fkApp_moduleMenu", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $appModuleMenuObj;

    /**
     * @ORM\Column(name="name", type="string", length=16, nullable=false, unique=false, options={"comment":"Name for setting"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description for menu"})
     */
    protected $description;

    /**
     * @ORM\Column(name="type", type="string", length=8, nullable=false, unique=false, options={"comment":"Type of setting. Allowed values: text; option"})
     */
    protected $type;

    /**
     * @ORM\Column(name="typeOptionRange", type="string", length=256, nullable=true, unique=false, options={"comment":"Range of values for type = option. The values are loaded of follows way: [option1]_;[option2]_;[optionN]"})
     */
    protected $typeOptionRange;

    /**
     * @ORM\Column(name="defaultValue", type="string", length=256, nullable=true, unique=false, options={"comment":"Default value for setting"})
     */
    protected $defaultValue;


    /**
     * Set appModuleMenuObj
     * @param integer $appModuleMenuObj
     * @return ModuleMenuSetting
     */
    public function setAppModuleMenuObj($appModuleMenuObj)
    {
        $this->appModuleMenuObj = $appModuleMenuObj;
        return $this;
    }

    /**
     * Get appModuleMenuObj
     * @return integer 
     */
    public function getAppModuleMenuObj()
    {
        return $this->appModuleMenuObj;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return ModuleMenuSetting
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
     * Set description
     *
     * @param string $description
     * @return ModuleMenuSetting
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set type
     * @param $type
     * @return ModuleMenuSetting
     */
    public function setType($type)
    {
        if(!in_array($type, array("text", "option"))) {
            throw new \InvalidArgumentException("Invalid type");
        }

        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set typeOptionRange
     *
     * @param string $typeOptionRange
     * @return ModuleMenuSetting
     */
    public function setTypeOptionRange($typeOptionRange)
    {
        $this->typeOptionRange = $typeOptionRange;

        return $this;
    }

    /**
     * Get typeOptionRange
     *
     * @return string 
     */
    public function getTypeOptionRange()
    {
        return $this->typeOptionRange;
    }

    /**
     * Set defaultValue
     *
     * @param string $defaultValue
     * @return ModuleMenuSetting
     */
    public function setDefaultValue($defaultValue)
    {
        $this->defaultValue = $defaultValue;

        return $this;
    }

    /**
     * Get defaultValue
     *
     * @return string 
     */
    public function getDefaultValue()
    {
        return $this->defaultValue;
    }
}
<?php
// src/BckSysadminBundle/Entity/ModuleMenu.php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\ModuleMenuRepository")
 * @ORM\Table(name="wo_app.app_moduleMenu",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_moduleMenu_name", columns={"name", "fkApp_module"})})
 */
class ModuleMenu extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Module")
     * @ORM\JoinColumn(name="fkApp_module", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $appModuleObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=false, options={"comment":"Name for menu"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description for menu"})
     */
    protected $description;

    /**
     * @ORM\Column(name="route", type="string", length=128, nullable=false, unique=false, options={"comment":"Route for menu"})
     */
    protected $route;

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority for menu. Determines the order in the menus list"})
     */
    protected $priority;

    /**
     * @ORM\Column(name="requiresAdminRole", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if the menu access requires admin role"})
     */
    protected $requiresAdminRole;


    /**
     * Set appModuleObj
     * @param integer $appModuleObj
     * @return ModuleMenu
     */
    public function setAppModuleObj($appModuleObj)
    {
        $this->appModuleObj = $appModuleObj;
        return $this;
    }

    /**
     * Get appModuleObj
     * @return integer 
     */
    public function getAppModuleObj()
    {
        return $this->appModuleObj;
    }

    /**
     * Set name
     * @param string $name
     * @return ModuleMenu
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get name
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     * @param string $description
     * @return ModuleMenu
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     * Get description
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set route
     * @param string $route
     * @return ModuleMenu
     */
    public function setRoute($route)
    {
        $this->route = $route;
        return $this;
    }

    /**
     * Get route
     * @return string 
     */
    public function getRoute()
    {
        return $this->route;
    }

    /**
     * Set priority
     * @param integer $priority
     * @return ModuleMenu
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;
        return $this;
    }

    /**
     * Get priority
     * @return integer 
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set requiresAdminRole
     * @param boolean $requiresAdminRole
     * @return ModuleMenu
     */
    public function setRequiresAdminRole($requiresAdminRole)
    {
        $this->requiresAdminRole = $requiresAdminRole;
        return $this;
    }

    /**
     * Get requiresAdminRole
     * @return boolean
     */
    public function getRequiresAdminRole()
    {
        return $this->requiresAdminRole;
    }
}
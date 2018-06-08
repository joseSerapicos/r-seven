<?php
// src/BckAdminBundle/Entity/ModuleMenu.php

namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\ModuleMenuRepository")
 * @ORM\Table(name="moduleMenu",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_moduleMenu_name", columns={"name", "fk_module"})
 *     }
 * )
 */
class ModuleMenu extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\SysadminBundle\Entity\ModuleMenu")
     * @ORM\JoinColumn(name="fkApp_moduleMenu", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     */
    protected $appModuleMenuObj;

    /**
     * @ORM\ManyToOne(targetEntity="Module")
     * @ORM\JoinColumn(name="fk_module", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $moduleObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=false, options={"comment":"Name for menu. Overwrites the parent in system database"})
     */
    protected $name;

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority for menu. Determines the order in the menus list. Overwrites the parent in system database"})
     */
    protected $priority;


    /**
     * Set appModuleMenuObj
     * @param integer $appModuleMenuObj
     * @return ModuleMenu
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
     * Set moduleObj
     * @param integer $moduleObj
     * @return ModuleMenu
     */
    public function setModuleObj($moduleObj)
    {
        $this->moduleObj = $moduleObj;
        return $this;
    }

    /**
     * Get moduleObj
     * @return integer 
     */
    public function getModuleObj()
    {
        return $this->moduleObj;
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
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        return ($this->getName());
    }
}
<?php
// src/SysadminBundle/Entity/Module.php

namespace SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="SysadminBundle\Entity\ModuleRepository")
 * @ORM\Table(name="wo_app.app_module")
 */
class Module extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Icon")
     * @ORM\JoinColumn(name="fkApp_icon", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $appIconObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name for module"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description for module"})
     */
    protected $description;

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority for menu. Determines the order in the modules list"})
     */
    protected $priority;

    /**
     * Set appIconObj
     * @param integer $appIconObj
     * @return Module
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

    /**
     * Set name
     * @param string $name
     * @return Module
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
     * @return Module
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
     * Set priority
     * @param integer $priority
     * @return Module
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
}
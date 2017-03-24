<?php
// src/AdminBundle/Entity/Module.php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\ModuleRepository")
 * @ORM\Table(name="module")
 */
class Module extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\SysadminBundle\Entity\Module")
     * @ORM\JoinColumn(name="fkApp_module", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     */
    protected $appModuleObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name for module. Overwrites the parent in system database"})
     */
    protected $name;

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority for menu. Determines the order in the modules list. Overwrites the parent in system database"})
     */
    protected $priority;


    /**
     * Set appModuleObj
     * @param integer $appModuleObj
     * @return Module
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
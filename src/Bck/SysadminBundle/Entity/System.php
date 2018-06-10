<?php
// src/BckSysadminBundle/Entity/System.php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\SystemRepository")
 * @ORM\Table(name="tt_app.app_system",
 *     indexes={@ORM\Index(name="idx_system_name", columns={"name"})})
 */
class System extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="dbHost", type="string", length=32, nullable=false, unique=false, options={"comment":"Database host"})
     */
    protected $dbHost;

    /**
     * @ORM\Column(name="dbName", type="string", length=32, nullable=false, unique=false, options={"comment":"Database name"})
     */
    protected $dbName;

    /**
     * @ORM\Column(name="dbUsername", type="string", length=32, nullable=false, unique=false, options={"comment":"Database username"})
     */
    protected $dbUsername;

    /**
     * @ORM\Column(name="dbPassword", type="string", length=32, nullable=false, unique=false, options={"comment":"Database password"})
     */
    protected $dbPassword;


    /**
     * Set name
     * @param string $name
     * @return System
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
     * Set dbHost
     * @param string $dbHost
     * @return System
     */
    public function setDbHost($dbHost)
    {
        $this->dbHost = $dbHost;
        return $this;
    }

    /**
     * Get dbHost
     * @return string 
     */
    public function getDbHost()
    {
        return $this->dbHost;
    }

    /**
     * Set dbName
     * @param string $dbName
     * @return System
     */
    public function setDbName($dbName)
    {
        $this->dbName = $dbName;
        return $this;
    }

    /**
     * Get dbName
     * @return string 
     */
    public function getDbName()
    {
        return $this->dbName;
    }

    /**
     * Set dbUsername
     * @param string $dbUsername
     * @return System
     */
    public function setDbUsername($dbUsername)
    {
        $this->dbUsername = $dbUsername;
        return $this;
    }

    /**
     * Get dbUsername
     * @return string 
     */
    public function getDbUsername()
    {
        return $this->dbUsername;
    }

    /**
     * Set dbPassword
     * @param string $dbPassword
     * @return System
     */
    public function setDbPassword($dbPassword)
    {
        // Set password only if was redefined, otherwise ignore
        if ($this->checkPasswordChanges($dbPassword, $this->dbPassword)) {
            $this->dbPassword = $dbPassword;
        }
        return $this;
    }

    /**
     * Get dbPassword
     * @return string 
     */
    public function getDbPassword()
    {
        return $this->dbPassword;
    }
}
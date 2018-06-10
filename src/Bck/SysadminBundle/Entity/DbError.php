<?php
// src/BckSysadminBundle/Entity/DbError.php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\DbErrorRepository")
 * @ORM\Table(name="tt_app.app_dbError")
 */
class DbError extends BaseEntity {
    /**
     * @ORM\Column(name="sqlError", type="string", length=1024, nullable=false, unique=false, options={"comment":"Sql error"})
     */
    protected $sqlError;

    /**
     * @ORM\Column(name="sql", type="string", length=1024, nullable=false, unique=false, options={"comment":"Sql statement"})
     */
    protected $sql;

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
     * Set sqlError
     *
     * @param string $sqlError
     * @return DbError
     */
    public function setSqlError($sqlError)
    {
        $this->sqlError = $sqlError;

        return $this;
    }

    /**
     * Get sqlError
     *
     * @return string 
     */
    public function getSqlError()
    {
        return $this->sqlError;
    }

    /**
     * Set sql
     *
     * @param string $sql
     * @return DbError
     */
    public function setSql($sql)
    {
        $this->sql = $sql;

        return $this;
    }

    /**
     * Get sql
     *
     * @return string 
     */
    public function getSql()
    {
        return $this->sql;
    }

    /**
     * Set dbHost
     *
     * @param string $dbHost
     * @return DbError
     */
    public function setDbHost($dbHost)
    {
        $this->dbHost = $dbHost;

        return $this;
    }

    /**
     * Get dbHost
     *
     * @return string 
     */
    public function getDbHost()
    {
        return $this->dbHost;
    }

    /**
     * Set dbName
     *
     * @param string $dbName
     * @return DbError
     */
    public function setDbName($dbName)
    {
        $this->dbName = $dbName;

        return $this;
    }

    /**
     * Get dbName
     *
     * @return string 
     */
    public function getDbName()
    {
        return $this->dbName;
    }

    /**
     * Set dbUsername
     *
     * @param string $dbUsername
     * @return DbError
     */
    public function setDbUsername($dbUsername)
    {
        $this->dbUsername = $dbUsername;

        return $this;
    }

    /**
     * Get dbUsername
     *
     * @return string 
     */
    public function getDbUsername()
    {
        return $this->dbUsername;
    }
}
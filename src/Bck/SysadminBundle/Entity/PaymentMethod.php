<?php
// src/BckSysadminBundle/Entity/PaymentMethod.php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\PaymentMethodRepository")
 * @ORM\Table(name="tt_app.app_paymentMethod")
 */
class PaymentMethod extends BaseEntity {

    /**
     * @ORM\ManyToOne(targetEntity="Icon")
     * @ORM\JoinColumn(name="fkApp_icon", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $appIconObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=512, nullable=false, unique=false, options={"comment":"Description"})
     */
    protected $description;


    /**
     * Set appIconObj
     * @param integer $appIconObj
     * @return object
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
     * @return object
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
     * @return object
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
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        return (
            ($this->getAppIconObj() ? ('<i class="fa ' . $this->getAppIconObj()->getIcon() . '"></i> ') : '')
            . $this->getName()
        );
    }
}
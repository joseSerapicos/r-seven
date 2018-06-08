<?php

namespace Bck\ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\ServicesBundle\Entity\RegularServiceRepository")
 * @ORM\Table(name="regularService")
 */
class RegularService extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Service", cascade={"all"})
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $serviceObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\EntitiesBundle\Entity\Supplier")
     * @ORM\JoinColumn(name="fk_supplier", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $supplierObj;

    /**
     * @ORM\Column(name="type", type="string", length=16, nullable=true, unique=false, options={"comment":"Type of service"})
     */
    protected $type; // [TRAVEL]


    /**
     * Set serviceObj
     * @param \Bck\ServicesBundle\Entity\Service $serviceObj
     * @return $this
     */
    public function setServiceObj(\Bck\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;
        return $this;
    }

    /**
     * Get serviceObj
     * @return \Bck\ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
    }

    /**
     * Set supplierObj
     *
     * @param \Bck\EntitiesBundle\Entity\Supplier $supplierObj
     *
     * @return $this
     */
    public function setSupplierObj(\Bck\EntitiesBundle\Entity\Supplier $supplierObj)
    {
        $this->supplierObj = $supplierObj;
        return $this;
    }

    /**
     * Get supplierObj
     *
     * @return \Bck\EntitiesBundle\Entity\Supplier
     */
    public function getSupplierObj()
    {
        return $this->supplierObj;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return $this
     */
    public function setType($type)
    {
        if (!empty($type) && !in_array($type, array("TRAVEL"))) {
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
}
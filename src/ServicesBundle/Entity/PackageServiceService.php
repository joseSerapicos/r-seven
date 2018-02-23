<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\PackageServiceServiceRepository")
 * @ORM\Table(name="packageServiceService",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_packageServiceService_service", columns={"fk_packageService", "fk_service"})})
 */
class PackageServiceService extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="PackageService")
     * @ORM\JoinColumn(name="fk_packageService", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $packageServiceObj;

    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description for module"})
     */
    protected $description;

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority for menu. Determines the order in the modules list"})
     */
    protected $priority;

    /**
     * @ORM\Column(name="durationStartDay", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Start day of service"})
     *
     * Start day of service
     */
    protected $durationStartDay;

    /**
     * @ORM\Column(name="durationDays", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Days of duration of service"})
     *
     * Days of duration of service
     */
    protected $durationDays;

    /**
     * @ORM\Column(name="isOptional", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Determines if the service is optional"})
     *
     * Determines if the service is optional
     */
    protected $isOptional;

    /**
     * @ORM\Column(name="availability", type="string", length=8, nullable=true, unique=false, options={"comment":"Availability control"})
     */
    protected $availability; // [NONE, PACKAGE, SERVICE]

    /**
     * @ORM\Column(name="price", type="string", length=8, nullable=true, unique=false, options={"comment":"Price control"})
     */
    protected $price; // [NONE, PACKAGE, SERVICE]

    /**
     * @ORM\Column(name="allot", type="string", length=8, nullable=true, unique=false, options={"comment":"Allot control"})
     */
    protected $allot; // [NONE, PACKAGE, SERVICE]


    /**
     * Set packageServiceObj
     * @param \ServicesBundle\Entity\PackageService $packageServiceObj
     * @return $this
     */
    public function setPackageServiceObj(\ServicesBundle\Entity\PackageService $packageServiceObj)
    {
        $this->packageServiceObj = $packageServiceObj;
        return $this;
    }

    /**
     * Get packageServiceObj
     * @return \ServicesBundle\Entity\PackageService
     */
    public function getPackageServiceObj()
    {
        return $this->packageServiceObj;
    }

    /**
     * Set serviceObj
     * @param \ServicesBundle\Entity\Service $serviceObj
     * @return $this
     */
    public function setServiceObj(\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;
        return $this;
    }

    /**
     * Get serviceObj
     * @return \ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
    }

    /**
     * Set description
     * @param string $description
     * @return $this
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
     * @return $this
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
     * Set durationStartDay
     * @param integer $durationStartDay
     * @return $this
     */
    public function setDurationStartDay($durationStartDay)
    {
        $this->durationStartDay = $durationStartDay;
        return $this;
    }

    /**
     * Get durationStartDay
     * @return integer
     */
    public function getDurationStartDay()
    {
        return $this->durationStartDay;
    }

    /**
     * Set durationDays
     * @param integer $durationDays
     * @return $this
     */
    public function setDurationDays($durationDays)
    {
        $this->durationDays = $durationDays;
        return $this;
    }

    /**
     * Get durationDays
     * @return integer
     */
    public function getDurationDays()
    {
        return $this->durationDays;
    }

    /**
     * Set isOptional
     * @param $isOptional
     * @return $this
     */
    public function setIsOptional($isOptional)
    {
        $this->isOptional = $isOptional;
        return $this;
    }

    /**
     * Get isOptional
     * @return \DateTime
     */
    public function getIsOptional()
    {
        return $this->isOptional;
    }

    /**
     * Set availability
     * @param $availability
     * @return $this
     */
    public function setAvailability($availability)
    {
        if(!empty($availability) && !in_array($availability, array("NONE", "PACKAGE", "SERVICE"))) {
            throw new \InvalidArgumentException("Invalid availability");
        }

        $this->availability = $availability;

        return $this;
    }

    /**
     * Get availability
     *
     * @return string
     */
    public function getAvailability()
    {
        return $this->availability;
    }

    /**
     * Set price
     * @param $price
     * @return $this
     */
    public function setPrice($price)
    {
        if(!empty($price) && !in_array($price, array("NONE", "PACKAGE", "SERVICE"))) {
            throw new \InvalidArgumentException("Invalid price");
        }

        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set allot
     * @param $allot
     * @return $this
     */
    public function setAllot($allot)
    {
        if(!empty($allot) && !in_array($allot, array("NONE", "PACKAGE", "SERVICE"))) {
            throw new \InvalidArgumentException("Invalid allot");
        }

        $this->allot = $allot;

        return $this;
    }

    /**
     * Get allot
     *
     * @return string
     */
    public function getAllot()
    {
        return $this->allot;
    }
}
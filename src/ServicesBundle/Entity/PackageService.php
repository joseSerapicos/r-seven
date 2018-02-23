<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\PackageServiceRepository")
 * @ORM\Table(name="packageService")
 */
class PackageService extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Service", cascade={"all"})
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="hasFixedDuration", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Enabled fixed duration for package"})
     *
     * Determines if the package has a fixed duration of days
     */
    protected $hasFixedDuration;

    /**
     * @ORM\Column(name="fixedDurationDays", type="smallint", nullable=true, unique=false, options={"unsigned":true, "default":0, "comment":"Number of duration days for hasFixedDuration"})
     *
     * Number of duration days for "hasFixedDuration"
     */
    protected $fixedDurationDays;


    ////////////////////////////////// MARKETING //////////////////////////////////

    /**
     * @ORM\Column(name="priceFrom", type="decimal", scale=2, nullable=true, unique=false, options={"default":"0", "comment":"Cheapest price of package"})
     *
     * Cheapest price of package
     */
    protected $priceFrom;


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
     * Set hasFixedDuration
     * @param $hasFixedDuration
     * @return $this
     */
    public function setHasFixedDuration($hasFixedDuration)
    {
        $this->hasFixedDuration = $hasFixedDuration;
        return $this;
    }

    /**
     * Get hasFixedDuration
     * @return \DateTime
     */
    public function getHasFixedDuration()
    {
        return $this->hasFixedDuration;
    }

    /**
     * Set fixedDurationDays
     * @param integer $fixedDurationDays
     * @return $this
     */
    public function setFixedDurationDays($fixedDurationDays)
    {
        $this->fixedDurationDays = $fixedDurationDays;
        return $this;
    }

    /**
     * Get fixedDurationDays
     * @return integer
     */
    public function getFixedDurationDays()
    {
        return $this->fixedDurationDays;
    }


    ////////////////////////////////// MARKETING //////////////////////////////////

    /**
     * Set priceFrom
     *
     * @param string $priceFrom
     * @return $this
     */
    public function setPriceFrom($priceFrom)
    {
        $this->priceFrom = $priceFrom;
        return $this;
    }

    /**
     * Get priceFrom
     *
     * @return string
     */
    public function getPriceFrom()
    {
        return $this->priceFrom;
    }
}
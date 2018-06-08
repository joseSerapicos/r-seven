<?php

namespace Bck\ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use AppBundle\Service\HelperService;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\ServicesBundle\Entity\PackageServiceRepository")
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

    /**
     * @ORM\Column(name="hasGroupingServices", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Enable grouping of services on booking"})
     *
     * Determines if the services of the package should be grouped on booking
     */
    protected $hasGroupingServices;

    ////////////////////////////////// MARKETING //////////////////////////////////

    /**
     * @ORM\Column(name="priceFrom", type="decimal", scale=2, nullable=true, unique=false, options={"default":"0", "comment":"Cheapest price of package"})
     *
     * Cheapest price of package
     */
    protected $priceFrom;


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

    /**
     * Set hasGroupingServices
     * @param $hasGroupingServices
     * @return $this
     */
    public function setHasGroupingServices($hasGroupingServices)
    {
        $this->hasGroupingServices = $hasGroupingServices;
        return $this;
    }

    /**
     * Get hasGroupingServices
     * @return \DateTime
     */
    public function getHasGroupingServices()
    {
        return $this->hasGroupingServices;
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


    ////////////////////////////////////////////////
    // EMBED URL
    ///////////////////////////////////////////////

    /**
     * Get embedServiceUrl
     * @return null|string
     */
    public function getEmbedServiceUrl()
    {
        if (!$this->getId()) {
            return null;
        }

        return (
            HelperService::getGlobalVar('baseUrl') . 'booking/package-booking/detail-embed/'
            . HelperService::getGlobalVar('systemName') . '/' . $this->getId()
        );
    }

    /**
     * Get embedBookingUrl
     * @return null|string
     */
    public function getEmbedBookingUrl()
    {
        if (!$this->getId()) {
            return null;
        }

        return (
            HelperService::getGlobalVar('baseUrl') . 'booking/package-booking/add-embed/'
            . HelperService::getGlobalVar('systemName') . '/' . $this->getId()
        );
    }
}
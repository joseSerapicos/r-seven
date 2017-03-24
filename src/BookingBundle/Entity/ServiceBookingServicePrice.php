<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\ServiceBookingServicePriceRepository")
 * @ORM\Table(name="serviceBookingServicePrice")
 */
class ServiceBookingServicePrice extends BaseBookingServicePrice {
    /**
     * @ORM\ManyToOne(targetEntity="ServiceBookingService")
     * @ORM\JoinColumn(name="fk_serviceBookingService", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceBookingServiceObj;
    

    /**
     * Set serviceBookingServiceObj
     * @param \BookingBundle\Entity\ServiceBookingService $serviceBookingServiceObj
     * @return ServiceBookingServicePrice
     */
    public function setServiceBookingServiceObj(\BookingBundle\Entity\ServiceBookingService $serviceBookingServiceObj)
    {
        $this->serviceBookingServiceObj = $serviceBookingServiceObj;
        return $this;
    }

    /**
     * Get serviceBookingServiceObj
     * @return \BookingBundle\Entity\ServiceBookingService
     */
    public function getServiceBookingServiceObj()
    {
        return $this->serviceBookingServiceObj;
    }
}
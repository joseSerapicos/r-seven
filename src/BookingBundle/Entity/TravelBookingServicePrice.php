<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingServicePriceRepository")
 * @ORM\Table(name="travelBookingServicePrice")
 */
class TravelBookingServicePrice extends BaseBookingServicePrice {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBookingService")
     * @ORM\JoinColumn(name="fk_travelBookingService", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $travelBookingServiceObj;


    /**
     * Set travelBookingServiceObj
     * @param \BookingBundle\Entity\TravelBookingService $travelBookingServiceObj
     * @return TravelBookingServicePrice
     */
    public function setTravelBookingServiceObj(\BookingBundle\Entity\TravelBookingService $travelBookingServiceObj)
    {
        $this->travelBookingServiceObj = $travelBookingServiceObj;
        return $this;
    }

    /**
     * Get travelBookingServiceObj
     * @return \BookingBundle\Entity\TravelBookingService
     */
    public function getTravelBookingServiceObj()
    {
        return $this->travelBookingServiceObj;
    }
}
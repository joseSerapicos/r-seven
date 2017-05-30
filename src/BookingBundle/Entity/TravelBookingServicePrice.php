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
     * Set bookingServiceObj
     * (alias to travelBookingServiceObj, used in base/abstract classes where bookingService type is not refined yet)
     * @param \BookingBundle\Entity\TravelBookingService $travelBookingServiceObj
     * @return TravelBookingServicePrice
     */
    public function setBookingServiceObj(\BookingBundle\Entity\TravelBookingService $travelBookingServiceObj)
    {
        return $this->setTravelBookingServiceObj($travelBookingServiceObj);
    }

    /**
     * Get travelBookingServiceObj
     * @return \BookingBundle\Entity\TravelBookingService
     */
    public function getTravelBookingServiceObj()
    {
        return $this->travelBookingServiceObj;
    }

    /**
     * Get bookingServiceObj
     * (alias to travelBookingServiceObj, used in base/abstract classes where bookingService type is not refined yet)
     * @return \BookingBundle\Entity\TravelBookingService
     */
    public function getBookingServiceObj()
    {
        return $this->getTravelBookingServiceObj();
    }
}
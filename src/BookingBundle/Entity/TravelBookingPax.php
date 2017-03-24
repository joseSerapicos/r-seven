<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingPaxRepository")
 * @ORM\Table(name="travelBookingPax")
 */
class TravelBookingPax extends BaseBookingPax {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBooking")
     * @ORM\JoinColumn(name="fk_travelBooking", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $travelBookingObj;


    /**
     * Set travelBookingObj
     * @param \BookingBundle\Entity\TravelBooking $travelBookingObj
     * @return $this
     */
    public function setTravelBookingObj(\BookingBundle\Entity\TravelBooking $travelBookingObj)
    {
        $this->travelBookingObj = $travelBookingObj;

        return $this;
    }

    /**
     * Get travelBookingObj
     * @return \BookingBundle\Entity\TravelBooking
     */
    public function getTravelBookingObj()
    {
        return $this->travelBookingObj;
    }
}
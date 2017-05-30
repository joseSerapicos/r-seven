<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingServiceRepository")
 * @ORM\Table(name="travelBookingService",
 *     indexes={@ORM\Index(name="idx_travelBookingService_date", columns={"startDate", "endDate"})}
 * )
 */
class TravelBookingService extends BaseBookingService {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBooking")
     * @ORM\JoinColumn(name="fk_travelBooking", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $travelBookingObj;

    /**
     * @ORM\ManyToOne(targetEntity="\BookingBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_place", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     */
    protected $placeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\BookingBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_placeTo", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * Only used in services of type "Travel" (and in this cases should not be null)
     */
    protected $placeToObj;
    
    
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

    /**
     * Get bookingObj (alias to getTravelBookingObj, used in base/abstract classes where booking type is not refined yet)
     * @return \BookingBundle\Entity\TravelBooking
     */
    public function getBookingObj()
    {
        return $this->getTravelBookingObj();
    }

    /**
     * Set placeObj
     *
     * @param \BookingBundle\Entity\Place $placeObj
     *
     * @return $this
     */
    public function setPlaceObj(\BookingBundle\Entity\Place $placeObj = null)
    {
        $this->placeObj = $placeObj;

        return $this;
    }

    /**
     * Get placeObj
     *
     * @return \BookingBundle\Entity\Place
     */
    public function getPlaceObj()
    {
        return $this->placeObj;
    }

    /**
     * Set placeToObj
     *
     * @param \BookingBundle\Entity\Place $placeToObj
     *
     * @return $this
     */
    public function setPlaceToObj(\BookingBundle\Entity\Place $placeToObj = null)
    {
        $this->placeToObj = $placeToObj;

        return $this;
    }

    /**
     * Get placeToObj
     *
     * @return \BookingBundle\Entity\Place
     */
    public function getPlaceToObj()
    {
        return $this->placeToObj;
    }
}
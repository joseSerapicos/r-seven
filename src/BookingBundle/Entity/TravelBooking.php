<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingRepository")
 * @ORM\Table(name="travelBooking")
 */
class TravelBooking extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Booking", cascade={"all"})
     * @ORM\JoinColumn(name="fk_booking", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $bookingObj;

    /**
     * @ORM\ManyToOne(targetEntity="\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_place", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determined automatically based on the place of the first service in "BookingService"
     */
    protected $placeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_placeTo", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determined automatically based on the place of the last service in "BookingService"
     */
    protected $placeToObj;


    /**
     * Set bookingObj
     * @param \BookingBundle\Entity\Booking $bookingObj
     * @return $this
     */
    public function setBookingObj(\BookingBundle\Entity\Booking $bookingObj)
    {
        $this->bookingObj = $bookingObj;
        return $this;
    }

    /**
     * Get bookingObj
     * @return \BookingBundle\Entity\Booking
     */
    public function getBookingObj()
    {
        return $this->bookingObj;
    }

    /**
     * Set placeObj
     *
     * @param \CommonBundle\Entity\Place $placeObj
     *
     * @return $this
     */
    public function setPlaceObj(\CommonBundle\Entity\Place $placeObj = null)
    {
        $this->placeObj = $placeObj;

        return $this;
    }

    /**
     * Get placeObj
     *
     * @return \CommonBundle\Entity\Place
     */
    public function getPlaceObj()
    {
        return $this->placeObj;
    }

    /**
     * Set placeToObj
     *
     * @param \CommonBundle\Entity\Place $placeToObj
     *
     * @return $this
     */
    public function setPlaceToObj(\CommonBundle\Entity\Place $placeToObj = null)
    {
        $this->placeToObj = $placeToObj;

        return $this;
    }

    /**
     * Get placeToObj
     *
     * @return \CommonBundle\Entity\Place
     */
    public function getPlaceToObj()
    {
        return $this->placeToObj;
    }
}
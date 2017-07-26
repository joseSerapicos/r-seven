<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingRepository")
 * @ORM\Table(name="travelBooking",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_travelBooking_code", columns={"codePrefix", "codeNumber"})})
 */
class TravelBooking extends BaseBooking {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBookingPax", cascade={"all"})
     * @ORM\JoinColumn(name="fk_travelBookingPax", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determines if the client is a pax. If this field is not null, then the pax was created automatically and should
     * be update automatically also. This field is handled by a flag "Client is pax?".
     */
    protected $travelBookingPaxObj;

    /**
     * @ORM\ManyToOne(targetEntity="\BookingBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_place", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determined automatically based on the place of the first service in "BookingService"
     */
    protected $placeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\BookingBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_placeTo", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determined automatically based on the place of the last service in "BookingService"
     */
    protected $placeToObj;

    /**
     * Set travelBookingPaxObj
     * @param \BookingBundle\Entity\TravelBookingPax $travelBookingPaxObj
     * @return $this
     */
    public function setTravelBookingPaxObj(\BookingBundle\Entity\TravelBookingPax $travelBookingPaxObj = null)
    {
        $this->travelBookingPaxObj = $travelBookingPaxObj;
        return $this;
    }

    /**
     * Get travelBookingPaxObj
     * @return \BookingBundle\Entity\TravelBookingPax
     */
    public function getTravelBookingPaxObj()
    {
        return $this->travelBookingPaxObj;
    }

    /**
     * Get client is pax.
     * Fake function to determines if the client is added as pax.
     * @return boolean
     */
    public function getClientIsPax()
    {
        return !empty($this->travelBookingPaxObj);
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
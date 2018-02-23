<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingServiceRepository")
 * @ORM\Table(name="travelBookingService")
 */
class TravelBookingService extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="BookingService", cascade={"all"})
     * @ORM\JoinColumn(name="fk_bookingService", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $bookingServiceObj;

    /**
     * @ORM\ManyToOne(targetEntity="\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_place", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     */
    protected $placeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_placeTo", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * Only used in services of type "Travel" (and in this cases should not be null)
     */
    protected $placeToObj;


    /**
     * Set bookingServiceObj
     * @param \BookingBundle\Entity\BookingService $bookingServiceObj
     * @return $this
     */
    public function setBookingServiceObj(\BookingBundle\Entity\BookingService $bookingServiceObj)
    {
        $this->bookingServiceObj = $bookingServiceObj;
        return $this;
    }

    /**
     * Get bookingServiceObj
     * @return \BookingBundle\Entity\BookingService
     */
    public function getBookingServiceObj()
    {
        return $this->bookingServiceObj;
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

    /**
     * Overrides parent method
     * @param boolean $isEnabled
     * @return $this
     */
    public function setIsEnabled($isEnabled)
    {
        $this->isEnabled = $isEnabled;

        // Update embed object
        if ($this->getBookingServiceObj()) {
            $this->getBookingServiceObj()->setIsEnabled($isEnabled);
        }

        return $this;
    }
}
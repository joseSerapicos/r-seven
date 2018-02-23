<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseFile;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\BookingFileRepository")
 * @ORM\Table(name="bookingFile")
 */
class BookingFile extends BaseFile {
    /**
     * @ORM\ManyToOne(targetEntity="Booking")
     * @ORM\JoinColumn(name="fk_booking", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $bookingObj;

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
}
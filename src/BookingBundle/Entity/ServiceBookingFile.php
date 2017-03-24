<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseFile;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\ServiceBookingFileRepository")
 * @ORM\Table(name="serviceBookingFile")
 */
class ServiceBookingFile extends BaseFile {
    /**
     * @ORM\ManyToOne(targetEntity="ServiceBooking")
     * @ORM\JoinColumn(name="fk_serviceBooking", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceBookingObj;

    /**
     * Set serviceBookingObj
     * @param \BookingBundle\Entity\ServiceBooking $serviceBookingObj
     * @return $this
     */
    public function setServiceBookingObj(\BookingBundle\Entity\ServiceBooking $serviceBookingObj)
    {
        $this->serviceBookingObj = $serviceBookingObj;
        return $this;
    }

    /**
     * Get serviceBookingObj
     * @return \BookingBundle\Entity\ServiceBooking
     */
    public function getServiceBookingObj()
    {
        return $this->serviceBookingObj;
    }
}
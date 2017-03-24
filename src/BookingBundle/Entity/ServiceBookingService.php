<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\ServiceBookingServiceRepository")
 * @ORM\Table(name="serviceBookingService",
 *     indexes={@ORM\Index(name="idx_serviceBookingService_date", columns={"startDate", "endDate"})}
 * )
 */
class ServiceBookingService extends BaseBookingService {
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
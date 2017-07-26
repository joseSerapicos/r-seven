<?php
namespace BookingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\ServiceBookingRepository")
 * @ORM\Table(name="serviceBooking",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_serviceBooking_code", columns={"codePrefix", "codeNumber"})})
 */
class ServiceBooking extends BaseBooking {
    /**
     * @ORM\ManyToOne(targetEntity="ServiceBookingPax", cascade={"all"})
     * @ORM\JoinColumn(name="fk_serviceBookingPax", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determines if the client is a pax. If this field is not null, then the pax was created automatically and should
     * be update automatically also. This field is handled by a flag "Client is pax?".
     */
    protected $serviceBookingPaxObj;
    

    /**
     * Set serviceBookingPaxObj
     * @param \BookingBundle\Entity\ServiceBookingPax $serviceBookingPaxObj
     * @return $this
     */
    public function setServiceBookingPaxObj(\BookingBundle\Entity\ServiceBookingPax $serviceBookingPaxObj = null)
    {
        $this->serviceBookingPaxObj = $serviceBookingPaxObj;
        return $this;
    }

    /**
     * Get serviceBookingPaxObj
     * @return \BookingBundle\Entity\ServiceBookingPax
     */
    public function getServiceBookingPaxObj()
    {
        return $this->serviceBookingPaxObj;
    }

    /**
     * Get client is pax.
     * Fake function to determines if the client is added as pax.
     * @return boolean
     */
    public function getClientIsPax()
    {
        return !empty($this->serviceBookingPaxObj);
    }
}
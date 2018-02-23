<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\BasicBookingServiceRepository")
 * @ORM\Table(name="basicBookingService")
 */
class BasicBookingService extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="BookingService", cascade={"all"})
     * @ORM\JoinColumn(name="fk_bookingService", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $bookingServiceObj;


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
}
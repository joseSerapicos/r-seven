<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\PackageBookingPaxRepository")
 * @ORM\Table(name="packageBookingPax")
 */
class PackageBookingPax extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="BookingPax", cascade={"all"})
     * @ORM\JoinColumn(name="fk_bookingPax", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $bookingPaxObj;


    /**
     * Set bookingPaxObj
     * @param \BookingBundle\Entity\BookingPax $bookingPaxObj
     * @return $this
     */
    public function setBookingPaxObj(\BookingBundle\Entity\BookingPax $bookingPaxObj)
    {
        $this->bookingPaxObj = $bookingPaxObj;
        return $this;
    }

    /**
     * Get bookingPaxObj
     * @return \BookingBundle\Entity\BookingPax
     */
    public function getBookingPaxObj()
    {
        return $this->bookingPaxObj;
    }
}
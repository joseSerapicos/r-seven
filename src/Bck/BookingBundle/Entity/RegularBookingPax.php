<?php
namespace Bck\BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\BookingBundle\Entity\RegularBookingPaxRepository")
 * @ORM\Table(name="regularBookingPax")
 */
class RegularBookingPax extends BaseEntity
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
     * @param \Bck\BookingBundle\Entity\BookingPax $bookingPaxObj
     * @return $this
     */
    public function setBookingPaxObj(\Bck\BookingBundle\Entity\BookingPax $bookingPaxObj)
    {
        $this->bookingPaxObj = $bookingPaxObj;
        return $this;
    }

    /**
     * Get bookingPaxObj
     * @return \Bck\BookingBundle\Entity\BookingPax
     */
    public function getBookingPaxObj()
    {
        return $this->bookingPaxObj;
    }
}
<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\PackageBookingRepository")
 * @ORM\Table(name="packageBooking")
 */
class PackageBooking extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Booking", cascade={"all"})
     * @ORM\JoinColumn(name="fk_booking", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $bookingObj;

    /**
     * @ORM\ManyToOne(targetEntity="\ServicesBundle\Entity\PackageService")
     * @ORM\JoinColumn(name="fk_packageService", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * Each booking needs to be related with a single package service
     */
    protected $packageServiceObj;


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
     * Set packageServiceObj
     *
     * @param \ServicesBundle\Entity\PackageService $packageServiceObj
     *
     * @return $this
     */
    public function setPackageServiceObj(\ServicesBundle\Entity\PackageService $packageServiceObj = null)
    {
        $this->packageServiceObj = $packageServiceObj;
        return $this;
    }

    /**
     * Get packageServiceObj
     *
     * @return \ServicesBundle\Entity\PackageService
     */
    public function getPackageServiceObj()
    {
        return $this->packageServiceObj;
    }
}
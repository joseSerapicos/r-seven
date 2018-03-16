<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\RegularBookingServiceRepository")
 * @ORM\Table(name="regularBookingService")
 */
class RegularBookingService extends BaseEntity
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
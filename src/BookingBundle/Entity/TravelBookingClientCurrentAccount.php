<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingClientCurrentAccountRepository")
 * @ORM\Table(name="travelBookingClientCurrentAccount")
 */
class TravelBookingClientCurrentAccount extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBooking")
     * @ORM\JoinColumn(name="fk_travelBooking", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $travelBookingObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientCurrentAccount", cascade={"all"})
     * @ORM\JoinColumn(name="fk_clientCurrentAccount", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     *
     * @Assert\Valid()
     */
    protected $clientCurrentAccountObj;
    

    /**
     * Set travelBookingObj
     * @param \BookingBundle\Entity\TravelBooking $travelBookingObj
     * @return $this
     */
    public function setTravelBookingObj(\BookingBundle\Entity\TravelBooking $travelBookingObj)
    {
        $this->travelBookingObj = $travelBookingObj;
        return $this;
    }

    /**
     * Get travelBookingObj
     * @return \BookingBundle\Entity\TravelBooking
     */
    public function getTravelBookingObj()
    {
        return $this->travelBookingObj;
    }

    /**
     * Get bookingObj (alias to getTravelBookingObj, used in base/abstract classes where booking type is not refined yet)
     * @return \BookingBundle\Entity\TravelBooking
     */
    public function getBookingObj()
    {
        return $this->getTravelBookingObj();
    }

    /**
     * Set clientCurrentAccountObj
     * @param \AccountingBundle\Entity\ClientCurrentAccount $clientCurrentAccountObj
     * @return $this
     */
    public function setClientCurrentAccountObj(\AccountingBundle\Entity\ClientCurrentAccount $clientCurrentAccountObj)
    {
        $this->clientCurrentAccountObj = $clientCurrentAccountObj;
        return $this;
    }

    /**
     * Get clientCurrentAccountObj
     * @return \AccountingBundle\Entity\ClientCurrentAccount
     */
    public function getClientCurrentAccountObj()
    {
        return $this->clientCurrentAccountObj;
    }
}
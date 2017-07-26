<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingClientDocumentRepository")
 * @ORM\Table(name="travelBookingClientDocument")
 */
class TravelBookingClientDocument extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBooking")
     * @ORM\JoinColumn(name="fk_travelBooking", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $travelBookingObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocument", cascade={"all"})
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     *
     * @Assert\Valid()
     */
    protected $clientDocumentObj;
    

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
     * Set clientDocumentObj
     * @param \AccountingBundle\Entity\ClientDocument $clientDocumentObj
     * @return $this
     */
    public function setClientDocumentObj(\AccountingBundle\Entity\ClientDocument $clientDocumentObj)
    {
        $this->clientDocumentObj = $clientDocumentObj;
        return $this;
    }

    /**
     * Get clientDocumentObj
     * @return \AccountingBundle\Entity\ClientDocument
     */
    public function getClientDocumentObj()
    {
        return $this->clientDocumentObj;
    }

    /**
     * Representation of object for dropdown (name/label for object)
     * @return mixed
     */
    public function __toString()
    {
        return (
            $this->getClientDocumentObj()->getCode()
            . ' (' . $this->getClientDocumentObj()->getClientDocumentTypeObj()->getName()
            . ': ' . $this->getClientDocumentObj()->getRemainSettlement() . ')'
        );
    }
}
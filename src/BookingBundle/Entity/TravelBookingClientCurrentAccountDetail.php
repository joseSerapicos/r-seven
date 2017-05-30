<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingClientCurrentAccountDetailRepository")
 * @ORM\Table(name="travelBookingClientCurrentAccountDetail")
 * Used to make reference to BookingServicePrice
 */
class TravelBookingClientCurrentAccountDetail extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBookingServicePrice")
     * @ORM\JoinColumn(name="fk_travelBookingServicePrice", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     */
    protected $travelBookingServicePriceObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientCurrentAccountDetail", cascade={"all"})
     * @ORM\JoinColumn(name="fk_clientCurrentAccountDetail", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     *
     * @Assert\Valid()
     */
    protected $clientCurrentAccountDetailObj;
    

    /**
     * Set travelBookingServicePriceObj
     * @param \BookingBundle\Entity\TravelBookingServicePrice $travelBookingServicePriceObj
     * @return $this
     */
    public function setTravelBookingServicePriceObj(\BookingBundle\Entity\TravelBookingServicePrice $travelBookingServicePriceObj)
    {
        $this->travelBookingServicePriceObj = $travelBookingServicePriceObj;
        return $this;
    }

    /**
     * Get travelBookingServicePriceObj
     * @return \BookingBundle\Entity\TravelBookingServicePrice
     */
    public function getTravelBookingServicePriceObj()
    {
        return $this->travelBookingServicePriceObj;
    }

    /**
     * Set clientCurrentAccountDetailObj
     * @param \AccountingBundle\Entity\ClientCurrentAccountDetail $clientCurrentAccountDetailObj
     * @return $this
     */
    public function setClientCurrentAccountDetailObj(\AccountingBundle\Entity\ClientCurrentAccountDetail $clientCurrentAccountDetailObj)
    {
        $this->clientCurrentAccountDetailObj = $clientCurrentAccountDetailObj;
        return $this;
    }

    /**
     * Get clientCurrentAccountDetailObj
     * @return \AccountingBundle\Entity\ClientCurrentAccountDetail
     */
    public function getClientCurrentAccountDetailObj()
    {
        return $this->clientCurrentAccountDetailObj;
    }

    ////////
    // Methods alias to be called by BaseEntityChildController to set and get the parent (ClientCurrentAccount)
    ////////////////////////////////

    /**
     * Set clientCurrentAccountObj (alias method)
     * @param \AccountingBundle\Entity\ClientCurrentAccount $clientCurrentAccountObj
     * @return $this
     */
    public function setClientCurrentAccountObj(\AccountingBundle\Entity\ClientCurrentAccount $clientCurrentAccountObj)
    {
        $this->clientCurrentAccountDetailObj->setClientCurrentAccountObj($clientCurrentAccountObj);
        return $this;
    }

    /**
     * Get clientCurrentAccountObj (alias method)
     * @return \AccountingBundle\Entity\ClientCurrentAccount
     */
    public function getClientCurrentAccountObj()
    {
        return $this->clientCurrentAccountDetailObj->getClientCurrentAccountObj();
    }
}
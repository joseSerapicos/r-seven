<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\TravelBookingClientDocumentInvoiceDetailRepository")
 * @ORM\Table(name="travelBookingClientDocumentInvoiceDetail")
 * Used to make reference to BookingServicePrice
 */
class TravelBookingClientDocumentInvoiceDetail extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="TravelBookingServicePrice")
     * @ORM\JoinColumn(name="fk_travelBookingServicePrice", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     */
    protected $travelBookingServicePriceObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocumentInvoiceDetail", cascade={"all"})
     * @ORM\JoinColumn(name="fk_clientDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     *
     * @Assert\Valid()
     */
    protected $clientDocumentInvoiceDetailObj;
    

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
     * Set clientDocumentInvoiceDetailObj
     * @param \AccountingBundle\Entity\ClientDocumentInvoiceDetail $clientDocumentInvoiceDetailObj
     * @return $this
     */
    public function setClientDocumentInvoiceDetailObj(\AccountingBundle\Entity\ClientDocumentInvoiceDetail $clientDocumentInvoiceDetailObj)
    {
        $this->clientDocumentInvoiceDetailObj = $clientDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get clientDocumentInvoiceDetailObj
     * @return \AccountingBundle\Entity\ClientDocumentInvoiceDetail
     */
    public function getClientDocumentInvoiceDetailObj()
    {
        return $this->clientDocumentInvoiceDetailObj;
    }


    ////////
    // Methods alias to be called by BaseEntityChildController to set and get the parent (ClientDocument)
    ////////////////////////////////

    /**
     * Set clientDocumentObj (alias method)
     * @param \AccountingBundle\Entity\ClientDocument $clientDocumentObj
     * @return $this
     */
    public function setClientDocumentObj(\AccountingBundle\Entity\ClientDocument $clientDocumentObj)
    {
        $this->clientDocumentInvoiceDetailObj->setClientDocumentObj($clientDocumentObj);
        return $this;
    }

    /**
     * Get clientDocumentObj (alias method)
     * @return \AccountingBundle\Entity\ClientDocument
     */
    public function getClientDocumentObj()
    {
        return $this->clientDocumentInvoiceDetailObj->getClientDocumentObj();
    }
}
<?php
namespace Bck\BookingBundle\Entity;

use AppBundle\Entity\BasePriceResume;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\BookingBundle\Entity\BookingServiceRepository")
 * @ORM\Table(name="bookingService",
 *     indexes={@ORM\Index(name="idx_bookingService_date", columns={"startDate", "endDate", "fk_allotTargetService"})}
 * )
 * @ORM\HasLifecycleCallbacks()
 */
class BookingService extends BasePriceResume
{
    /**
     * @ORM\ManyToOne(targetEntity="Booking")
     * @ORM\JoinColumn(name="fk_booking", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $bookingObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\ServicesBundle\Entity\Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $serviceObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\EntitiesBundle\Entity\Supplier")
     * @ORM\JoinColumn(name="fk_supplier", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $supplierObj;

    /**
     * @ORM\Column(name="reference", type="string", length=32, nullable=true, unique=false, options={"comment":"Any reference"})
     *
     * Any reference that can be useful for the user, like external references supplied by the provider.
     */
    protected $reference;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=false, unique=false, options={"comment":"Description"})
     *
     * @Assert\NotBlank()
     *
     * By default inherit from "Service", but user can change the value.
     */
    protected $description;

    /**
     * @ORM\Column(name="startDate", type="date", nullable=false, unique=false, options={"comment":"Start date of validation"})
     */
    protected $startDate;

    /**
     * @ORM\Column(name="endDate", type="date", nullable=false, unique=false, options={"comment":"End date of validation"})
     */
    protected $endDate;

    /**
     * @ORM\Column(name="durationDays", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Duration days"})
     *
     * This quantity controls the allot/capacity (if enabled in service)
     *
     * Redundant field, used to improve the application.
     */
    protected $durationDays;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_place", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     */
    protected $placeObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_placeTo", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * Only used in services of type "Regular" (and in this cases should not be null)
     */
    protected $placeToObj;

    /**
     * @ORM\Column(name="quantity", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Quantity"})
     *
     * This quantity controls the allot/capacity (if enabled in service)
     */
    protected $quantity;

    /**
     * @ORM\Column(name="isAutoAllot", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables auto allot management"})
     */
    protected $isAutoAllot;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\ServicesBundle\Entity\Service")
     * @ORM\JoinColumn(name="fk_allotTargetService", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * USED FOR INTERNAL CONTROL
     * Determines the target service of used allot when "isAutoAllot" is enabled.
     * We can't use a foreign key to ServiceAllot directly, because the same BookingService can get allot from different
     * ServiceAllot objects, according with dates range and defined allot.
     * Service has a date range and allotment is determined date by date (day by day). Possible values:
     *     NULL && ($isAutoAllot == true): Regular allot is used, is not associate at none target service (ServiceAllot.targetServiceObj = null)
     *     OBJECT && ($isAutoAllot == true): Foreign key to target service that holds this specific allot (ServiceAllot.targetServiceObj = OBJECT)
     */
    protected $allotTargetServiceObj;

    /**
     * @ORM\Column(name="confirmationStatus", type="string", length=8, nullable=false, unique=false, options={"default":"NO", "comment":"Confirmation status"})
     */
    protected $confirmationStatus; // [NO, PARTIAL, YES]

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority. Determines the order."})
     */
    protected $priority;

    /**
     * @ORM\ManyToOne(targetEntity="BookingService")
     * @ORM\JoinColumn(name="fk_grouperBookingService", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * It's a self reference for BookingService to link grouped service to the grouper service.
     * If this value is defined, all grouped services are invoiced in a single line (the line of the grouper service)
     * with a single VAT (the VAT of the grouper service), however the supplier invoices do not suffer any change in
     * their behavior.
     * The grouper service sum all sell values of your grouped services in your own values, while the grouped
     * services does not have any sell value in your values (they are setted to zero), only keep the cost values without any change.
     * The grouping process can be reverted setting "NULL" this field, for this delete the associated grouper service
     * (and updating the sell values again), since the grouper service is not yet associated to any document.
     */
    protected $grouperBookingServiceObj;

    /**
     * @ORM\ManyToOne(targetEntity="BookingServicePrice", cascade={"persist"})
     * @ORM\JoinColumn(name="fk_grouperBookingServicePrice", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * It's a foreign key to the BookingServicePrice that sum/merge all sell values of all BookingServicePrice objects
     * of this BookingService object.
     * This BookingServicePrice is the only one that will be used in the client current account processes,
     * and since it's defined, it means that the BookingService is a GrouperBookingService.
     */
    protected $grouperBookingServicePriceObj;


    // FAKE FIELDS TO HANDLE WITH CONTROLS
    protected $isAutoAvailability;
    protected $isAutoPrice;


    /**
     * Set bookingObj
     * @param \Bck\BookingBundle\Entity\Booking $bookingObj
     * @return $this
     */
    public function setBookingObj(\Bck\BookingBundle\Entity\Booking $bookingObj)
    {
        $this->bookingObj = $bookingObj;
        return $this;
    }

    /**
     * Get bookingObj
     * @return \Bck\BookingBundle\Entity\Booking
     */
    public function getBookingObj()
    {
        return $this->bookingObj;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return $this
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     * @return integer
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Get quantityManual
     * Alias function to handle with the fake field "quantityManual"
     * @return integer
     */
    public function getQuantityManual()
    {
        return $this->getQuantity();
    }

    /**
     * Set startDate
     * @param \DateTime $startDate
     * @return $this
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;
        return $this;
    }

    /**
     * Get startDate
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Get startDateManual
     * Alias function to handle with the fake field "startDateManual"
     * @return \DateTime
     */
    public function getStartDateManual()
    {
        return $this->getStartDate();
    }

    /**
     * Set endDate
     *
     * @param \DateTime $endDate
     *
     * @return $this
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * Get endDate
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * Get endDateManual
     * Alias function to handle with the fake field "endDateManual"
     * @return \DateTime
     */
    public function getEndDateManual()
    {
        return $this->getEndDate();
    }

    /**
     * Set durationDays
     * @param integer $durationDays
     * @return $this
     */
    public function setDurationDays($durationDays = null)
    {
        if (!$durationDays && $this->startDate && $this->endDate) {
            $durationDays = ($this->startDate->diff($this->endDate)->days + 1); // If you want nights, remove the "+ 1"
        }

        // Empty (zero) days does not make sense
        if (empty($durationDays)) {
            $durationDays = 1;
        }

        $this->durationDays = $durationDays;

        return $this;
    }

    /**
     * Get durationDays
     * @return integer
     */
    public function getDurationDays()
    {
        return $this->durationDays;
    }


    /**
     * Set placeObj
     *
     * @param \Bck\CommonBundle\Entity\Place $placeObj
     *
     * @return $this
     */
    public function setPlaceObj(\Bck\CommonBundle\Entity\Place $placeObj = null)
    {
        $this->placeObj = $placeObj;

        return $this;
    }

    /**
     * Get placeObj
     *
     * @return \Bck\CommonBundle\Entity\Place
     */
    public function getPlaceObj()
    {
        return $this->placeObj;
    }

    /**
     * Set placeToObj
     *
     * @param \Bck\CommonBundle\Entity\Place $placeToObj
     *
     * @return $this
     */
    public function setPlaceToObj(\Bck\CommonBundle\Entity\Place $placeToObj = null)
    {
        $this->placeToObj = $placeToObj;

        return $this;
    }

    /**
     * Get placeToObj
     *
     * @return \Bck\CommonBundle\Entity\Place
     */
    public function getPlaceToObj()
    {
        return $this->placeToObj;
    }

    /**
     * Set reference
     *
     * @param string $reference
     *
     * @return $this
     */
    public function setReference($reference)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference
     *
     * @return string
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set confirmationStatus
     *
     * @param string $confirmationStatus
     *
     * @return $this
     */
    public function setConfirmationStatus($confirmationStatus)
    {
        if (!empty($confirmationStatus) && !in_array($confirmationStatus, array("NO", "PARTIAL", "YES"))) {
            throw new \InvalidArgumentException("Invalid confirmation status");
        }
        $this->confirmationStatus = $confirmationStatus;

        return $this;
    }

    /**
     * Get confirmationStatus
     *
     * @return string
     */
    public function getConfirmationStatus()
    {
        return $this->confirmationStatus;
    }

    /**
     * Get confirmationStatusManual
     * Alias function to handle with the fake field "confirmationStatusManual"
     * @return string
     */
    public function getConfirmationStatusManual()
    {
        return $this->getConfirmationStatus();
    }

    /**
     * Set serviceObj
     *
     * @param \Bck\ServicesBundle\Entity\Service $serviceObj
     *
     * @return $this
     */
    public function setServiceObj(\Bck\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;

        return $this;
    }

    /**
     * Get serviceObj
     *
     * @return \Bck\ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
    }

    /**
     * Set supplierObj
     *
     * @param \Bck\EntitiesBundle\Entity\Supplier $supplierObj
     *
     * @return $this
     */
    public function setSupplierObj(\Bck\EntitiesBundle\Entity\Supplier $supplierObj = null)
    {
        $this->supplierObj = $supplierObj;

        return $this;
    }

    /**
     * Get supplierObj
     *
     * @return \Bck\EntitiesBundle\Entity\Supplier
     */
    public function getSupplierObj()
    {
        return $this->supplierObj;
    }

    /**
     * Set isAutoAllot
     * @param string $isAutoAllot
     *
     * @return $this
     */
    public function setIsAutoAllot($isAutoAllot)
    {
        $this->isAutoAllot = $isAutoAllot;
        return $this;
    }

    /**
     * Get is auto allot.
     * @return boolean
     */
    public function getIsAutoAllot()
    {
        return $this->isAutoAllot;
    }

    /**
     * Set allotTargetServiceObj
     * @param \Bck\ServicesBundle\Entity\Service $allotTargetServiceObj
     * @return $this
     */
    public function setAllotTargetServiceObj(\Bck\ServicesBundle\Entity\Service $allotTargetServiceObj = null)
    {
        $this->allotTargetServiceObj = $allotTargetServiceObj;
        return $this;
    }

    /**
     * Get allotTargetServiceObj
     * @return \Bck\ServicesBundle\Entity\Service
     */
    public function getAllotTargetServiceObj()
    {
        return $this->allotTargetServiceObj;
    }

    /**
     * Set priority
     * @param integer $priority
     * @return $this
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;
        return $this;
    }

    /**
     * Get priority
     * @return integer
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set grouperBookingServiceObj
     * @param \Bck\BookingBundle\Entity\BookingService $grouperBookingServiceObj
     * @return $this
     */
    public function setGrouperBookingServiceObj(\Bck\BookingBundle\Entity\BookingService $grouperBookingServiceObj = null)
    {
        $this->grouperBookingServiceObj = $grouperBookingServiceObj;
        return $this;
    }

    /**
     * Get grouperBookingServiceObj
     * @return \Bck\BookingBundle\Entity\BookingService
     */
    public function getGrouperBookingServiceObj()
    {
        return $this->grouperBookingServiceObj;
    }

    /**
     * Set grouperBookingServicePriceObj
     * @param \Bck\BookingBundle\Entity\BookingServicePrice $grouperBookingServicePriceObj
     * @return $this
     */
    public function setGrouperBookingServicePriceObj(\Bck\BookingBundle\Entity\BookingServicePrice $grouperBookingServicePriceObj = null)
    {
        $this->grouperBookingServicePriceObj = $grouperBookingServicePriceObj;
        return $this;
    }

    /**
     * Get grouperBookingServicePriceObj
     * @return \Bck\BookingBundle\Entity\BookingServicePrice
     */
    public function getGrouperBookingServicePriceObj()
    {
        return $this->grouperBookingServicePriceObj;
    }

    /**
     * Set groupedSubTotalSell
     * @param string $groupedSubTotalSell
     * @return $this
     */
    /*public function setGroupedSubTotalSell($groupedSubTotalSell)
    {
        $this->groupedSubTotalSell = $groupedSubTotalSell;
        return $this;
    }*/

    /**
     * Get groupedSubTotalSell
     * @return string
     */
    /*public function getGroupedSubTotalSell()
    {
        return $this->groupedSubTotalSell;
    }*/

    /**
     * Set groupedTotalVatSell
     * @param string $groupedTotalVatSell
     * @return $this
     */
    /*public function setGroupedTotalVatSell($groupedTotalVatSell)
    {
        $this->groupedTotalVatSell = $groupedTotalVatSell;
        return $this;
    }*/

    /**
     * Get groupedTotalVatSell
     * @return string
     */
    /*public function getGroupedTotalVatSell()
    {
        return $this->groupedTotalVatSell;
    }*/

    /**
     * Get grouped total sell
     * @return string
     */
    /*public function getGroupedTotalSell()
    {
        // For direct queries use "SUM()"
        return round($this->groupedSubTotalSell + $this->groupedTotalVatSell, 2);
    }*/


    /////////////////////////////////
    // FAKE FIELDS TO HANDLE WITH CONTROLS
    ////////////////////////////////////////

    /**
     * Set isAutoAvailability
     * @param string $isAutoAvailability
     *
     * @return $this
     */
    public function setIsAutoAvailability($isAutoAvailability)
    {
        $this->isAutoAvailability = $isAutoAvailability;
        return $this;
    }

    /**
     * Get is auto availability manual.
     * @return boolean
     */
    public function getIsAutoAvailability()
    {
        return $this->isAutoAvailability;
    }

    /**
     * Set isAutoPrice
     * @param string $isAutoPrice
     *
     * @return $this
     */
    public function setIsAutoPrice($isAutoPrice)
    {
        $this->isAutoPrice = $isAutoPrice;
        return $this;
    }

    /**
     * Get is auto price.
     * @return boolean
     */
    public function getIsAutoPrice()
    {
        return $this->isAutoPrice;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     *
     * Pre upload
     * @return $this
     */
    public function preUpload()
    {
        parent::preUpload();
        $this->setDurationDays(null);
        return $this;
    }
}
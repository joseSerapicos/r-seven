<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceResume;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\BookingServiceRepository")
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
     * @ORM\ManyToOne(targetEntity="\ServicesBundle\Entity\Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $serviceObj;

    /**
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Supplier")
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
     * @ORM\ManyToOne(targetEntity="\ServicesBundle\Entity\Service")
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
     * @ORM\JoinColumn(name="fk_groupingBookingService", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * It's a self reference for BookingService to link grouped service to the grouping service.
     * If this value is defined, all grouped services are invoiced in a single line (the line of the grouping service)
     * with a single VAT (the VAT of the grouping service), however the supplier invoices do not suffer any change in
     * their behavior.
     * The grouping service count all sell values of your grouped services in your own values, while the grouped
     * services does not count any sell value in your values, only count the cost values without any change.
     * The grouping process can be reverted setting "NULL" this field, for this delete the associated grouping service
     * (and updating the sell values again), since the grouping service is not yet associated to any document.
     */
    protected $groupingBookingServiceObj;

    /**
     * @ORM\Column(name="groupingSubTotalSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Grouping sub total sell"})
     *
     * Field calculated based in the sum in of "BookingServicePrice" of BookingService
     * and associated BookingService trough the groupingBookingServiceObj
     */
    //protected $groupingSubTotalSell; // Check in the future if it's needed

    /**
     * @ORM\Column(name="groupingTotalVatSell", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Grouping total VAT of sell value"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    //protected $groupingTotalVatSell; // Check in the future if it's needed

    // FAKE FIELDS TO HANDLE WITH CONTROLS
    protected $isAutoAvailability;
    protected $isAutoPrice;


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
     * @param \ServicesBundle\Entity\Service $serviceObj
     *
     * @return $this
     */
    public function setServiceObj(\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;

        return $this;
    }

    /**
     * Get serviceObj
     *
     * @return \ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
    }

    /**
     * Set supplierObj
     *
     * @param \EntitiesBundle\Entity\Supplier $supplierObj
     *
     * @return $this
     */
    public function setSupplierObj(\EntitiesBundle\Entity\Supplier $supplierObj = null)
    {
        $this->supplierObj = $supplierObj;

        return $this;
    }

    /**
     * Get supplierObj
     *
     * @return \EntitiesBundle\Entity\Supplier
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
     * @param \ServicesBundle\Entity\Service $allotTargetServiceObj
     * @return $this
     */
    public function setAllotTargetServiceObj(\ServicesBundle\Entity\Service $allotTargetServiceObj = null)
    {
        $this->allotTargetServiceObj = $allotTargetServiceObj;
        return $this;
    }

    /**
     * Get allotTargetServiceObj
     * @return \ServicesBundle\Entity\Service
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
     * Set groupingBookingServiceObj
     * @param \BookingBundle\Entity\BookingService $groupingBookingServiceObj
     * @return $this
     */
    public function setGroupingBookingServiceObj(\BookingBundle\Entity\BookingService $groupingBookingServiceObj)
    {
        $this->groupingBookingServiceObj = $groupingBookingServiceObj;
        return $this;
    }

    /**
     * Get groupingBookingServiceObj
     * @return \BookingBundle\Entity\BookingService
     */
    public function getGroupingBookingServiceObj()
    {
        return $this->groupingBookingServiceObj;
    }

    /**
     * Set groupingSubTotalSell
     * @param string $groupingSubTotalSell
     * @return $this
     */
    /*public function setGroupingSubTotalSell($groupingSubTotalSell)
    {
        $this->groupingSubTotalSell = $groupingSubTotalSell;
        return $this;
    }*/

    /**
     * Get groupingSubTotalSell
     * @return string
     */
    /*public function getGroupingSubTotalSell()
    {
        return $this->groupingSubTotalSell;
    }*/

    /**
     * Set groupingTotalVatSell
     * @param string $groupingTotalVatSell
     * @return $this
     */
    /*public function setGroupingTotalVatSell($groupingTotalVatSell)
    {
        $this->groupingTotalVatSell = $groupingTotalVatSell;
        return $this;
    }*/

    /**
     * Get groupingTotalVatSell
     * @return string
     */
    /*public function getGroupingTotalVatSell()
    {
        return $this->groupingTotalVatSell;
    }*/

    /**
     * Get grouping total sell
     * @return string
     */
    /*public function getGroupingTotalSell()
    {
        // For direct queries use "SUM()"
        return round($this->groupingSubTotalSell + $this->groupingTotalVatSell, 2);
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
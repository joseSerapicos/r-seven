<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceTotals;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\MappedSuperclass(repositoryClass="BookingBundle\Entity\BaseBookingServiceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseBookingService extends BasePriceTotals {
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
     * @ORM\Column(name="isAutoAvailability", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables auto availability management"})
     */
    protected $isAutoAvailability;

    /**
     * @ORM\Column(name="confirmationStatus", type="string", length=8, nullable=false, unique=false, options={"default":"NO", "comment":"Confirmation status"})
     */
    protected $confirmationStatus; // [NO, PARTIAL, YES]

    /**
     * @ORM\Column(name="invoiceStatus", type="string", length=8, nullable=false, unique=false, options={"default":"NO", "comment":"Invoice status"})
     */
    protected $invoiceStatus; // [NO, PARTIAL, YES]


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
     * Set invoiceStatus
     *
     * @param string $invoiceStatus
     *
     * @return $this
     */
    public function setInvoiceStatus($invoiceStatus)
    {
        if (!empty($invoiceStatus) && !in_array($invoiceStatus, array("NO", "PARTIAL", "YES"))) {
            throw new \InvalidArgumentException("Invalid invoice status");
        }
        $this->invoiceStatus = $invoiceStatus;

        return $this;
    }

    /**
     * Get invoiceStatus
     *
     * @return string
     */
    public function getInvoiceStatus()
    {
        return $this->invoiceStatus;
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
     * Get isAutoAvailability
     * @return boolean
     */
    public function getIsAutoAvailability()
    {
        return $this->isAutoAvailability;
    }
}
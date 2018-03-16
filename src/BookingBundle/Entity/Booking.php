<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceResume;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Service\HelperService;

/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\BookingRepository")
 * @ORM\Table(name="booking",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_booking_code", columns={"fk_moduleMenu", "codePrefix", "codeNumber"})})
 * @ORM\HasLifecycleCallbacks()
 *
 * This is a base entity for each type of booking.
 * This entity should not have entries by itself, but always from a booking type.
 */
class Booking extends BasePriceResume
{
    /**
     * @ORM\ManyToOne(targetEntity="BookingPax", cascade={"all"})
     * @ORM\JoinColumn(name="fk_bookingPax", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determines if the client is a pax. If this field is not null, then the pax was created automatically and should
     * be update automatically also. This field is handled by a flag "Client is pax?".
     */
    protected $bookingPaxObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\ModuleMenu")
     * @ORM\JoinColumn(name="fk_moduleMenu", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * This is an auxiliary field to generates the code. This field allows to differentiate all booking types automatically
     * from it's module menu id, and so we can have separated codes by booking type, for instance:
     *   - RegularBooking (moduleMenuObj = 'x', codePrefix = '', codeNumber = 1)
     *   - PackageBooking (moduleMenuObj = 'y', codePrefix = '', codeNumber = 1)
     * This approach is used also in bookingSettings.
     */
    protected $moduleMenuObj;

    /**
     * @ORM\Column(name="codePrefix", type="string", length=8, nullable=true, unique=false, options={"comment":"Code prefix"})
     */
    protected $codePrefix;

    /**
     * @ORM\Column(name="codeNumber", type="bigint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Code number"})
     */
    protected $codeNumber;

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $storeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     * 
     * It's the operator of booking.
     */
    protected $userObj;

    /**
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Client")
     * @ORM\JoinColumn(name="fk_client", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientObj;

    /**
     * @ORM\Column(name="startDate", type="date", nullable=true, unique=false, options={"comment":"Start date of booking"})
     *
     * This field is automatically determined based in the less date in "BookingService", but is here to performance search and reports.
     */
    protected $startDate;

    /**
     * @ORM\Column(name="endDate", type="date", nullable=true, unique=false, options={"comment":"End date of booking"})
     *
     * This field is automatically determined based in the larger date in "BookingService", but is here to performance search and reports.
     */
    protected $endDate;

    /**
     * @ORM\ManyToOne(targetEntity="\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_place", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determined automatically based on the place of the first service in "BookingService"
     */
    protected $placeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\CommonBundle\Entity\Place")
     * @ORM\JoinColumn(name="fk_placeTo", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Determined automatically based on the place of the last service in "BookingService"
     */
    protected $placeToObj;

    /**
     * @ORM\Column(name="invoiceStatus", type="string", length=8, nullable=false, unique=false, options={"default":"NO", "comment":"Invoice status"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $invoiceStatus; // [NO, PARTIAL, YES]

    /**
     * @ORM\Column(name="confirmationStatus", type="string", length=8, nullable=false, unique=false, options={"default":"NO", "comment":"Confirmation status"})
     *
     * Field calculated based in the sum in "BookingService"
     */
    protected $confirmationStatus; // [NO, PARTIAL, YES]

    // Extra field to handle file upload
    private $filesRepository;


    /**
     * Set bookingPaxObj
     * @param \BookingBundle\Entity\BookingPax $bookingPaxObj
     * @return $this
     */
    public function setBookingPaxObj(\BookingBundle\Entity\BookingPax $bookingPaxObj = null)
    {
        $this->bookingPaxObj = $bookingPaxObj;
        return $this;
    }

    /**
     * Get bookingPaxObj
     * @return \BookingBundle\Entity\BookingPax
     */
    public function getBookingPaxObj()
    {
        return $this->bookingPaxObj;
    }

    /**
     * Set moduleMenuObj
     * @param \AdminBundle\Entity\ModuleMenu $moduleMenuObj
     * @return $this
     */
    public function setModuleMenuObj(\AdminBundle\Entity\ModuleMenu $moduleMenuObj = null)
    {
        $this->moduleMenuObj = $moduleMenuObj;
        return $this;
    }

    /**
     * Get moduleMenuObj
     * @return \AdminBundle\Entity\ModuleMenu
     */
    public function getModuleMenuObj()
    {
        return $this->moduleMenuObj;
    }

    /**
     * Get client is pax.
     * Fake function to determines if the client is added as pax.
     * @return boolean
     */
    public function getClientIsPax()
    {
        return !empty($this->bookingPaxObj);
    }

    /**
     * Set codePrefix
     * @param $codePrefix
     * @return $this
     */
    public function setCodePrefix($codePrefix)
    {
        $this->codePrefix = $codePrefix;
        return $this;
    }

    /**
     * Get codePrefix
     * @return string
     */
    public function getCodePrefix()
    {
        return $this->codePrefix;
    }

    /**
     * Set codeNumber
     * @param $codeNumber
     * @return $this
     */
    public function setCodeNumber($codeNumber)
    {
        $this->codeNumber = $codeNumber;
        return $this;
    }

    /**
     * Get codeNumber
     * @return int
     */
    public function getCodeNumber()
    {
        return $this->codeNumber;
    }

    /**
     * Get code (return the code to use in view, in database queries use CONCAT)
     * @return string
     */
    public function getCode()
    {
        return ($this->codePrefix . $this->codeNumber);
    }

    /**
     * Set storeObj
     * @param \AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \AdminBundle\Entity\store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Set userObj
     *
     * @param \AdminBundle\Entity\User $userObj
     * @return $this
     */
    public function setUserObj(\AdminBundle\Entity\User $userObj)
    {
        $this->userObj = $userObj;

        return $this;
    }

    /**
     * Get userObj
     * @return \AdminBundle\Entity\User
     */
    public function getUserObj()
    {
        return $this->userObj;
    }

    /**
     * Set clientObj
     *
     * @param \EntitiesBundle\Entity\Client $clientObj
     * @return $this
     */
    public function setClientObj(\EntitiesBundle\Entity\Client $clientObj)
    {
        $this->clientObj = $clientObj;

        return $this;
    }

    /**
     * Get clientObj
     * @return \EntitiesBundle\Entity\Client
     */
    public function getClientObj()
    {
        return $this->clientObj;
    }

    /**
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return $this
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
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
     * Set placeObj
     *
     * @param \CommonBundle\Entity\Place $placeObj
     *
     * @return $this
     */
    public function setPlaceObj(\CommonBundle\Entity\Place $placeObj = null)
    {
        $this->placeObj = $placeObj;

        return $this;
    }

    /**
     * Get placeObj
     *
     * @return \CommonBundle\Entity\Place
     */
    public function getPlaceObj()
    {
        return $this->placeObj;
    }

    /**
     * Set placeToObj
     *
     * @param \CommonBundle\Entity\Place $placeToObj
     *
     * @return $this
     */
    public function setPlaceToObj(\CommonBundle\Entity\Place $placeToObj = null)
    {
        $this->placeToObj = $placeToObj;

        return $this;
    }

    /**
     * Get placeToObj
     *
     * @return \CommonBundle\Entity\Place
     */
    public function getPlaceToObj()
    {
        return $this->placeToObj;
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
     * @ORM\PreRemove()
     *
     * Prepare to free resources. Save path of uploads to remove after delete the object (after delete "id" is
     * no more available to determine the path)
     * @return $this
     */
    public function preRemove()
    {
        // Save files repository to free resources after delete object
        $this->filesRepository = (empty($this->getId())
            ? null
            : (HelperService::getGlobalVar('filesRepository') . lcfirst(HelperService::getClassName($this)) . '/' . $this->getId())
        );

        return $this;
    }

    /**
     * @ORM\PostRemove()
     *
     * Remove entity files and dir
     * @return $this
     */
    public function postRemove()
    {
        // Remove entity directory
        if ($this->filesRepository) {
            HelperService::rmDirR($this->filesRepository);
        }

        return $this;
    }


    /**
     * Representation of object for dropdown (name/label for object)
     * @return mixed
     */
    public function __toString()
    {
        return ($this->getCode());
    }
}
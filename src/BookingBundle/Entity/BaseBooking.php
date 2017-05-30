<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceResume;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Service\HelperService;

/**
 * @ORM\MappedSuperclass(repositoryClass="BookingBundle\Entity\BaseBookingRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 * This is a base entity for each type of booking.
 * This entity should not have entries by itself, but always from a booking type.
 * This class is not abstract because we can use this class for reports and quick information about all booking types.
 */
class BaseBooking extends BasePriceResume
{
    /**
     * @ORM\Column(name="code", type="string", length=24, nullable=false, unique=true, options={"comment":"Code"})
     */
    protected $code;

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
     * Set code
     * @param string $code
     * @return $this
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     * @return string
     */
    public function getCode()
    {
        return $this->code;
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
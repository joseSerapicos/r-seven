<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceWithVat;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="BookingBundle\Entity\BookingServicePriceRepository")
 * @ORM\Table(name="bookingServicePrice")
 *
 * This class saves the VAT values, because we want to keep the history of the booking without any changes,
 * independent if service VAT changes in time. However if the object is edited by the user changing the service,
 * the VAT values are updated according with the current valid VAT of service.
 */
class BookingServicePrice extends BasePriceWithVat
{
    /**
     * @ORM\ManyToOne(targetEntity="BookingService")
     * @ORM\JoinColumn(name="fk_bookingService", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $bookingServiceObj;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     *
     * By default inherit from "Service", but user can change the value.
     */
    protected $description;

    /**
     * @ORM\Column(name="postingType", type="string", length=8, nullable=false, unique=false, options={"comment":"Type of posting"})
     */
    protected $postingType; // [CREDIT (for margin/discount), DEBIT]

    /**
     * @ORM\ManyToOne(targetEntity="BookingServicePrice")
     * @ORM\JoinColumn(name="fk_grouperBookingServicePrice", referencedColumnName="id", nullable=true, unique=false, onDelete="RESTRICT")
     *
     * It's a foreign key to the BookingServicePrice to the grouper BookingServicePrice object. When the BookingService
     * is grouped, each of your BookingServicePrice has a copy in the grouper BookingService with the changed sell
     * values according with the VAT code of the grouper BookingService.
     */
    protected $grouperBookingServicePriceObj;

    /**
     * @ORM\ManyToOne(targetEntity="BookingServicePrice")
     * @ORM\JoinColumn(name="fk_groupedBookingServicePrice", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     *
     * It's a foreign key to the BookingServicePrice to the grouped BookingServicePrice object.
     * Keeping this reference we can add consistence more easy to database, so when the original/grouped object
     * is deleted, the copy/grouper object is deleted yet.
     */
    protected $groupedBookingServicePriceObj;


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
     * Set postingType
     *
     * @param string $postingType
     *
     * @return $this
     */
    public function setPostingType($postingType)
    {
        if (!empty($postingType) && !in_array($postingType, array("DEBIT", "CREDIT"))) {
            throw new \InvalidArgumentException("Invalid posting type");
        }
        $this->postingType = $postingType;

        return $this;
    }

    /**
     * Get postingType
     *
     * @return string
     */
    public function getPostingType()
    {
        return $this->postingType;
    }

    /**
     * Set grouperBookingServicePriceObj
     * @param \BookingBundle\Entity\BookingServicePrice $grouperBookingServicePriceObj
     * @return $this
     */
    public function setGrouperBookingServicePriceObj(\BookingBundle\Entity\BookingServicePrice $grouperBookingServicePriceObj = null)
    {
        $this->grouperBookingServicePriceObj = $grouperBookingServicePriceObj;
        return $this;
    }

    /**
     * Get grouperBookingServicePriceObj
     * @return \BookingBundle\Entity\BookingServicePrice
     */
    public function getGrouperBookingServicePriceObj()
    {
        return $this->grouperBookingServicePriceObj;
    }

    /**
     * Set groupedBookingServicePriceObj
     * @param \BookingBundle\Entity\BookingServicePrice $groupedBookingServicePriceObj
     * @return $this
     */
    public function setGroupedBookingServicePriceObj(\BookingBundle\Entity\BookingServicePrice $groupedBookingServicePriceObj = null)
    {
        $this->groupedBookingServicePriceObj = $groupedBookingServicePriceObj;
        return $this;
    }

    /**
     * Get groupedBookingServicePriceObj
     * @return \BookingBundle\Entity\BookingServicePrice
     */
    public function getGroupedBookingServicePriceObj()
    {
        return $this->groupedBookingServicePriceObj;
    }

    /**
     * Get grouped total sell (total sell of grouper BookingServicePrice associated)
     * @return string
     */
    public function getGroupedTotalSell()
    {
        // For direct queries use "SUM()"
        if ($this->grouperBookingServicePriceObj) {
            return $this->grouperBookingServicePriceObj->getTotalSell();
        }
        return null;
    }
}
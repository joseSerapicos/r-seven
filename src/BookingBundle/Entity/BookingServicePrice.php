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
}

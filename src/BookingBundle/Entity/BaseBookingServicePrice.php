<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceWithVat;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="BookingBundle\Entity\BaseBookingServicePriceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseBookingServicePrice extends BasePriceWithVat
{
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

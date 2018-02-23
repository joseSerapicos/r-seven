<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BasePriceException;
use AppBundle\Service\PriceService;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServicePriceExceptionRepository")
 * @ORM\Table(name="servicePriceException",
 *     indexes={@ORM\Index(name="idx_servicePriceException__date", columns={"startDate", "endDate", "fk_targetService"})}
 * )
 *
 * Used for supplement (DEBIT posting) and discount (CREDIT posting)
 *
 * This class does not saves the VAT values like others (BookingServicePrice, DocumentInvoiceDetail), because the
 * VAT values are always calculated at runtime, we only can get the current valid VAT of service at runtime, so does
 * not make sense save it.
 */
class ServicePriceException extends BasePriceException {
    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
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
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_targetService", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     *
     * Determines the target of the entry, if targetServiceObj is defined, the entry is specific for the
     * targetServiceObj (generally a package), else the entry is for the service itself
     */
    protected $targetServiceObj;


    /**
     * Set serviceObj
     * @param \ServicesBundle\Entity\Service $serviceObj
     * @return $this
     */
    public function setServiceObj(\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;
        return $this;
    }

    /**
     * Get serviceObj
     * @return \ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
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
     * Set targetServiceObj
     * @param \ServicesBundle\Entity\Service $targetServiceObj
     * @return $this
     */
    public function setTargetServiceObj(\ServicesBundle\Entity\Service $targetServiceObj)
    {
        $this->targetServiceObj = $targetServiceObj;
        return $this;
    }

    /**
     * Get targetServiceObj
     * @return \ServicesBundle\Entity\Service
     */
    public function getTargetServiceObj()
    {
        return $this->targetServiceObj;
    }


    ////////
    // Fake methods to keep default values
    ////////////////////////////////

    /**
     * Get user_costValue
     * @return float
     */
    public function getUser_costValue()
    {
        // Value, according with the "getIsVatIncluded" returned value
        // (only valid for 'FIXED' method, because this method used the value directly over price)
        if ($this->getIsVatIncluded() && ($this->getCostMethod() == 'FIXED')) {
            $splitPrice = PriceService::getTotalUnitDetail(
                $this->getCostValue(),
                $this->getServiceObj()->getVatCodeObj()->getPercentage(),
                false
            );

            return ($splitPrice['totalUnit']);
        }

        return $this->getCostValue();
    }

    /**
     * Get user_marginValue
     * @return float
     */
    public function getUser_marginValue()
    {
        // Value, according with the "getIsVatIncluded" returned value
        // (only valid for 'FIXED' method, because this method used the value directly over price)
        if ($this->getIsVatIncluded() && ($this->getMarginMethod() == 'FIXED')) {
            $splitPrice = PriceService::getTotalUnitDetail(
                $this->getMarginValue(),
                $this->getServiceObj()->getVatCodeObj()->getPercentage(),
                false
            );

            return ($splitPrice['totalUnit']);
        }

        return $this->getMarginValue();
    }
}
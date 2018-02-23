<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseBonus;
use AppBundle\Service\PriceService;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceBonusRepository")
 * @ORM\Table(name="serviceBonus",
 *     indexes={@ORM\Index(name="idx_serviceBonus__date", columns={"startDate", "endDate", "fk_targetService"})}
 * )
 *
 * This class does not saves the VAT values like others (BookingServicePrice, DocumentInvoiceDetail), because the
 * VAT values are always calculated at runtime, we only can get the current valid VAT of service at runtime, so does
 * not make sense save it.
 */
class ServiceBonus extends BaseBonus {
    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="isVatIncluded", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Controls how to show the fake field user_..."})
     */
    protected $isVatIncluded;

    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service_bonus", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $bonusServiceObj;

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
     * Set isVatIncluded
     * @param $isVatIncluded
     * @return $this
     */
    public function setIsVatIncluded($isVatIncluded)
    {
        $this->isVatIncluded = $isVatIncluded;
        return $this;
    }

    /**
     * Get isVatIncluded
     * @return \DateTime
     */
    public function getIsVatIncluded()
    {
        return $this->isVatIncluded;
    }

    /**
     * Set bonusServiceObj
     * @param \ServicesBundle\Entity\Service $bonusServiceObj
     * @return $this
     */
    public function setBonusServiceObj(\ServicesBundle\Entity\Service $bonusServiceObj)
    {
        $this->bonusServiceObj = $bonusServiceObj;
        return $this;
    }

    /**
     * Get bonusServiceObj
     * @return \ServicesBundle\Entity\Service
     */
    public function getBonusServiceObj()
    {
        return $this->bonusServiceObj;
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
    public function getUser_bonusValue()
    {
        // Value, according with the "getIsVatIncluded" returned value
        // (only valid for 'FIXED' method, because this method used the value directly over price)
        if ($this->getIsVatIncluded() && ($this->getBonusMethod() == 'FIXED')) {
            $splitPrice = PriceService::getTotalUnitDetail(
                $this->getBonusValue(),
                $this->getBonusServiceObj()->getVatCodeObj()->getPercentage(),
                false
            );

            return ($splitPrice['totalUnit']);
        }

        return $this->getBonusValue();
    }
}

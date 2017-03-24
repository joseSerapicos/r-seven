<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseBonus;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceBonusRepository")
 * @ORM\Table(name="serviceBonus",
 *     indexes={@ORM\Index(name="idx_serviceBonus_date", columns={"startDate", "endDate"})}
 * )
 */
class ServiceBonus extends BaseBonus {
    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceObj;

    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service_bonus", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $bonusServiceObj;

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
}

<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseObservation;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceObservationRepository")
 * @ORM\Table(name="serviceObservation")
 */
class ServiceObservation extends BaseObservation {
    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceObj;

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
}

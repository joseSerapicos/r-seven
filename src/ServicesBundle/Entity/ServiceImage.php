<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseImage;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceImageRepository")
 * @ORM\Table(name="serviceImage")
 */
class ServiceImage extends BaseImage {
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

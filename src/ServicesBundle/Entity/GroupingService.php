<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\GroupingServiceRepository")
 * @ORM\Table(name="groupingService")
 *
 * Service to group other services, to use in booking.
 */
class GroupingService extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Service", cascade={"all"})
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     *
     * @Assert\Valid()
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
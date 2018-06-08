<?php

namespace Bck\ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\ServicesBundle\Entity\GrouperServiceRepository")
 * @ORM\Table(name="grouperService")
 *
 * Service to group other services, to use in booking.
 */
class GrouperService extends BaseEntity
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
     * @param \Bck\ServicesBundle\Entity\Service $serviceObj
     * @return $this
     */
    public function setServiceObj(\Bck\ServicesBundle\Entity\Service $serviceObj)
    {
        $this->serviceObj = $serviceObj;
        return $this;
    }

    /**
     * Get serviceObj
     * @return \Bck\ServicesBundle\Entity\Service
     */
    public function getServiceObj()
    {
        return $this->serviceObj;
    }
}
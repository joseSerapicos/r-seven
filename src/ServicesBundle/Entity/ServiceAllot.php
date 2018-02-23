<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceAllotRepository")
 * @ORM\Table(name="serviceAllot",
 *     indexes={@ORM\Index(name="idx_serviceAllot__date", columns={"startDate", "endDate", "fk_targetService"})}
 * )
 */
class ServiceAllot extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="description", type="string", length=64, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="allot", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Allot"})
     */
    protected $allot;

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
     * Set allot
     *
     * @param integer $allot
     *
     * @return ServiceAllot
     */
    public function setAllot($allot)
    {
        $this->allot = $allot;

        return $this;
    }

    /**
     * Get allot
     *
     * @return integer
     */
    public function getAllot()
    {
        return $this->allot;
    }

    /**
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return ServiceAllot
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
     * @return ServiceAllot
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
}

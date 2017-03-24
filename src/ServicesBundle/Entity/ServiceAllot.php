<?php
namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceAllotRepository")
 * @ORM\Table(name="serviceAllot",
 *     indexes={@ORM\Index(name="idx_serviceAllot_date", columns={"startDate", "endDate"})}
 * )
 */
class ServiceAllot extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumn(name="fk_service", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $serviceObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="allot", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Allot/Allot"})
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
     * Set name
     *
     * @param string $name
     *
     * @return ServiceAllot
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
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
}

<?php
namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="EntitiesBundle\Entity\SupplierRepository")
 * @ORM\Table(name="supplier",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_supplier_code", columns={"codePrefix", "codeNumber"})})
 */
class Supplier extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     */
    protected $entityObj;

    /**
     * @ORM\Column(name="codePrefix", type="string", length=8, nullable=true, unique=false, options={"comment":"Code prefix"})
     */
    protected $codePrefix;

    /**
     * @ORM\Column(name="codeNumber", type="bigint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Code number"})
     */
    protected $codeNumber;


    /**
     * Set codePrefix
     * @param $codePrefix
     * @return $this
     */
    public function setCodePrefix($codePrefix)
    {
        $this->codePrefix = $codePrefix;
        return $this;
    }

    /**
     * Get codePrefix
     * @return string
     */
    public function getCodePrefix()
    {
        return $this->codePrefix;
    }

    /**
     * Set codeNumber
     * @param $codeNumber
     * @return $this
     */
    public function setCodeNumber($codeNumber)
    {
        $this->codeNumber = $codeNumber;
        return $this;
    }

    /**
     * Get codeNumber
     * @return int
     */
    public function getCodeNumber()
    {
        return $this->codeNumber;
    }

    /**
     * Get code (return the code to use in view, in database queries use CONCAT)
     * @return string
     */
    public function getCode()
    {
        return ($this->codePrefix . $this->codeNumber);
    }

    /**
     * Set entityObj
     * @param \EntitiesBundle\Entity\Entity $entityObj
     * @return Supplier
     */
    public function setEntityObj(\EntitiesBundle\Entity\Entity $entityObj)
    {
        $this->entityObj = $entityObj;
        return $this;
    }

    /**
     * Get entityObj
     * @return \EntitiesBundle\Entity\Entity
     */
    public function getEntityObj()
    {
        return $this->entityObj;
    }

    /**
     * Overrides parent method
     * @return mixed
     */
    public function __toString()
    {
        return (
            $this->getEntityObj()->getName()
            . ' ' . $this->getEntityObj()->getSurname()
            . ' (' . $this->getCode() . ')'
        );
    }
}

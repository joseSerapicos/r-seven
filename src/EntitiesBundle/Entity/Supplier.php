<?php
namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="EntitiesBundle\Entity\SupplierRepository")
 * @ORM\Table(name="supplier")
 */
class Supplier extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=true, onDelete="RESTRICT")
     */
    protected $entityObj;

    /**
     * @ORM\Column(name="code", type="string", length=24, nullable=false, unique=true, options={"comment":"Code"})
     */
    protected $code;


    /**
     * Set code
     * @param string $code
     * @return $this
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     * @return string
     */
    public function getCode()
    {
        return $this->code;
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

<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseAddress;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\EntitiesBundle\Entity\EntityAddressRepository")
 * @ORM\Table(name="entityAddress")
 */
class EntityAddress extends BaseAddress {
    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $entityObj;

    /**
     * @ORM\Column(name="forDocuments", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Determines if the address is to use in documents"})
     */
    protected $forDocuments;

    /**
     * Set entityObj
     *
     * @param \Bck\EntitiesBundle\Entity\Entity $entityObj
     *
     * @return EntityAddress
     */
    public function setEntityObj(\Bck\EntitiesBundle\Entity\Entity $entityObj)
    {
        $this->entityObj = $entityObj;

        return $this;
    }

    /**
     * Get entityObj
     *
     * @return \Bck\EntitiesBundle\Entity\Entity
     */
    public function getEntityObj()
    {
        return $this->entityObj;
    }

    /**
     * Set forDocuments
     * @param boolean $forDocuments
     * @return $this
     */
    public function setForDocuments($forDocuments)
    {
        $this->forDocuments = $forDocuments;
        return $this;
    }

    /**
     * Get forDocuments
     * @return boolean
     */
    public function getForDocuments()
    {
        return $this->forDocuments;
    }
}

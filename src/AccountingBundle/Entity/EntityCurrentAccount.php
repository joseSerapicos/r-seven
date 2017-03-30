<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\EntityCurrentAccountRepository")
 * @ORM\Table(name="entityCurrentAccount",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_entityCurrentAccount_number", columns={"fk_entityDocumentType", "number"})
 *     }
 * )
 */
class EntityCurrentAccount extends BaseCurrentAccount {
    /**
     * @ORM\ManyToOne(targetEntity="EntityDocumentType")
     * @ORM\JoinColumn(name="fk_entityDocumentType", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $entityDocumentTypeObj;

    /**
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $entityObj;


    /**
     * Set entityDocumentTypeObj
     * @param \AccountingBundle\Entity\EntityDocumentType $entityDocumentTypeObj
     * @return $this
     */
    public function setEntityDocumentTypeObj(\AccountingBundle\Entity\EntityDocumentType $entityDocumentTypeObj)
    {
        $this->entityDocumentTypeObj = $entityDocumentTypeObj;
        return $this;
    }

    /**
     * Get entityDocumentTypeObj
     * @return \AccountingBundle\Entity\EntityDocumentType
     */
    public function getEntityDocumentTypeObj()
    {
        return $this->entityDocumentTypeObj;
    }

    /**
     * Set entityObj
     *
     * @param \EntitiesBundle\Entity\Entity $entityObj
     * @return $this
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
}
<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\EntityDocumentTypeSettingRepository")
 * @ORM\Table(name="entityDocumentTypeSetting",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_entityDocumentTypeSetting", columns={"fk_store", "fk_entityDocumentType"})
 *     }
 * )
 */
class EntityDocumentTypeSetting extends BaseDocumentTypeSetting {
    /**
     * @ORM\ManyToOne(targetEntity="EntityDocumentType")
     * @ORM\JoinColumn(name="fk_entityDocumentType", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $entityDocumentTypeObj;


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
}
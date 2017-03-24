<?php
namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="EntitiesBundle\Entity\EntityGroupEntityRepository")
 * @ORM\Table(name="entityGroupEntity",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_entityGroupEntity", columns={"fk_entityGroup", "fk_entity"})
 *     }
 * )
 */
class EntityGroupEntity extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="EntityGroup")
     * @ORM\JoinColumn(name="fk_entityGroup", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $entityGroupObj;

    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $entityObj;

    /**
     * Set entityGroupObj
     * @param $entityGroupObj
     * @return EntityGroup
     */
    public function setEntityGroupObj($entityGroupObj)
    {
        $this->entityGroupObj = $entityGroupObj;
        return $this;
    }

    /**
     * Get entityGroupObj
     * @return \EntitiesBundle\Entity\EntityGroup
     */
    public function getEntityGroupObj()
    {
        return $this->entityGroupObj;
    }

    /**
     * Set entityObj
     * @param $entityObj
     * @return Entity
     */
    public function setEntityObj($entityObj)
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

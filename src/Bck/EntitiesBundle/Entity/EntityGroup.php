<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\EntitiesBundle\Entity\EntityGroupRepository")
 * @ORM\Table(name="entityGroup")
 */
class EntityGroup extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name"})
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="EntityGroup")
     * @ORM\JoinColumn(name="fk_entityGroup", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     */
    private $entityGroupObj;

    /**
     * Set name
     * @param string $name
     * @return Entity
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set entityGroupObj
     *
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
     * @return \Bck\EntitiesBundle\Entity\EntityGroup
     */
    public function getEntityGroupObj()
    {
        return $this->entityGroupObj;
    }
}

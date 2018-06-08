<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseImage;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\EntitiesBundle\Entity\EntityImageRepository")
 * @ORM\Table(name="entityImage")
 */
class EntityImage extends BaseImage {
    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $entityObj;

    /**
     * Set entityObj
     * @param \Bck\EntitiesBundle\Entity\Entity $entityObj
     * @return object
     */
    public function setEntityObj(\Bck\EntitiesBundle\Entity\Entity $entityObj)
    {
        $this->entityObj = $entityObj;
        return $this;
    }

    /**
     * Get entityObj
     * @return \Bck\EntitiesBundle\Entity\Entity
     */
    public function getEntityObj()
    {
        return $this->entityObj;
    }
}
<?php
namespace EntitiesBundle\Entity;

use AppBundle\Entity\BaseVideo;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="EntitiesBundle\Entity\EntityVideoRepository")
 * @ORM\Table(name="entityVideo")
 */
class EntityVideo extends BaseVideo {
    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $entityObj;

    /**
     * Set entityObj
     * @param \EntitiesBundle\Entity\Entity $entityObj
     * @return EntityVideo
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

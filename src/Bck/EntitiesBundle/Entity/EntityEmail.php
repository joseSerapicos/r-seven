<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEmail;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\EntitiesBundle\Entity\EntityEmailRepository")
 * @ORM\Table(name="entityEmail")
 */
class EntityEmail extends BaseEmail {
    /**
     * @ORM\ManyToOne(targetEntity="Entity")
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $entityObj;

    /**
     * Set entityObj
     *
     * @param \Bck\EntitiesBundle\Entity\Entity $entityObj
     *
     * @return EntityEmail
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
}

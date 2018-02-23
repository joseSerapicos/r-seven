<?php
namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\UserGroupAclRepository")
 * @ORM\Table(name="userGroupAcl",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_name", columns={"name", "fk_store"})
 *     }
 * )
 */
class UserGroupAcl extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $storeObj;
    
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name"})
     */
    private $name;

    /**
     * Set storeObj
     * @param \AdminBundle\Entity\Store $storeObj
     * @return UserGroupAcl
     */
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;

        return $this;
    }

    /**
     * Get storeObj
     * @return \AdminBundle\Entity\Store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

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
}

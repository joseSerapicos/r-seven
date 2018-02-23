<?php
namespace UserBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="UserBundle\Entity\UserGroupRepository")
 * @ORM\Table(name="userGroup")
 */
class UserGroup extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $userObj;
    
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name"})
     */
    private $name;

    /**
     * Set userObj
     * @param \AdminBundle\Entity\User $userObj
     * @return $this
     */
    public function setUserObj(\AdminBundle\Entity\User $userObj)
    {
        $this->userObj = $userObj;
        return $this;
    }

    /**
     * Get userObj
     * @return \AdminBundle\Entity\User
     */
    public function getUserObj()
    {
        return $this->userObj;
    }

    /**
     * Set name
     * @param string $name
     * @return $this
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

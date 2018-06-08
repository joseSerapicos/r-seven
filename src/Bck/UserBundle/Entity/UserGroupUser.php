<?php
namespace Bck\UserBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\UserBundle\Entity\UserGroupUserRepository")
 * @ORM\Table(name="userGroupUser",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_userGroupUser", columns={"fk_userGroup", "fk_user"})
 *     }
 * )
 */
class UserGroupUser extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="UserGroup")
     * @ORM\JoinColumn(name="fk_userGroup", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $userGroupObj;

    /**
     * @ORM\ManyToOne(targetEntity="\LoginBundle\Entity\User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $userObj;

    /**
     * Set userGroupObj
     * @param \Bck\UserBundle\Entity\UserGroup $userGroupObj
     * @return $this
     */
    public function setUserGroupObj(\Bck\UserBundle\Entity\UserGroup $userGroupObj)
    {
        $this->userGroupObj = $userGroupObj;
        return $this;
    }

    /**
     * Get userGroupObj
     * @return \Bck\UserBundle\Entity\UserGroup
     */
    public function getUserGroupObj()
    {
        return $this->userGroupObj;
    }

    /**
     * Set userObj
     * @param \LoginBundle\Entity\User $userObj
     * @return $this
     */
    public function setUserObj(\LoginBundle\Entity\User $userObj)
    {
        $this->userObj = $userObj;
        return $this;
    }

    /**
     * Get userObj
     * @return \LoginBundle\Entity\User
     */
    public function getUserObj()
    {
        return $this->userObj;
    }
}

<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\UserGroupAclUserRepository")
 * @ORM\Table(name="userGroupAclUser",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_UserGroupAclUser_user", columns={"fk_userGroupAcl", "fk_user"})
 *     }
 * )
 */
class UserGroupAclUser extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="UserGroupAcl")
     * @ORM\JoinColumn(name="fk_userGroupAcl", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $userGroupAclObj;

    /**
     * @ORM\ManyToOne(targetEntity="\LoginBundle\Entity\User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $userObj;


    /**
     * Set UserGroupAclObj
     * @param \Bck\AdminBundle\Entity\UserGroupAcl $userGroupAclObj
     * @return object
     */
    public function setUserGroupAclObj(\Bck\AdminBundle\Entity\UserGroupAcl $userGroupAclObj)
    {
        $this->userGroupAclObj = $userGroupAclObj;
        return $this;
    }

    /**
     * Get UserGroupAclObj
     * @return \Bck\AdminBundle\Entity\UserGroupAcl
     */
    public function getUserGroupAclObj()
    {
        return $this->userGroupAclObj;
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

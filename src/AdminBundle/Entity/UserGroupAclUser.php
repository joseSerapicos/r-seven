<?php
namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\UserGroupAclUserRepository")
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
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $userObj;

    /**
     * Set UserGroupAclObj
     * @param $userGroupAclObj
     * @return UserGroupAcl
     */
    public function setUserGroupAclObj($userGroupAclObj)
    {
        $this->userGroupAclObj = $userGroupAclObj;
        return $this;
    }

    /**
     * Get UserGroupAclObj
     * @return \AdminBundle\Entity\UserGroupAcl
     */
    public function getUserGroupAclObj()
    {
        return $this->userGroupAclObj;
    }

    /**
     * Set userObj
     * @param $userObj
     * @return $this
     */
    public function setUserObj($userObj)
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
}

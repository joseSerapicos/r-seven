<?php
namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\UserGroupAclMenuRepository")
 * @ORM\Table(name="userGroupAclMenu",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_userGroupAclMenu_userMenu", columns={"fk_userGroupAcl", "fk_moduleMenu"})
 *     }
 * )
 */
class UserGroupAclMenu extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="UserGroupAcl")
     * @ORM\JoinColumn(name="fk_userGroupAcl", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $userGroupAclObj;

    /**
     * @ORM\ManyToOne(targetEntity="ModuleMenu")
     * @ORM\JoinColumn(name="fk_moduleMenu", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    private $moduleMenuObj;

    /**
     * @ORM\Column(name="acl", type="smallint", nullable=true, unique=false, options={"unsigned":true, "comment":"Access control lists"})
     */
    protected $acl;

    /**
     * Set acl
     *
     * @param integer $acl
     *
     * @return UserGroupAclMenu
     */
    public function setAcl($acl)
    {
        $this->acl = $acl;

        return $this;
    }

    /**
     * Get acl
     *
     * @return integer
     */
    public function getAcl()
    {
        return $this->acl;
    }

    /**
     * Set UserGroupAclObj
     *
     * @param \AdminBundle\Entity\UserGroupAcl $userGroupAclObj
     *
     * @return UserGroupAclMenu
     */
    public function setUserGroupAclObj(\AdminBundle\Entity\UserGroupAcl $userGroupAclObj)
    {
        $this->userGroupAclObj = $userGroupAclObj;

        return $this;
    }

    /**
     * Get UserGroupAclObj
     *
     * @return \AdminBundle\Entity\UserGroupAcl
     */
    public function getUserGroupAclObj()
    {
        return $this->userGroupAclObj;
    }

    /**
     * Set moduleMenuObj
     *
     * @param \AdminBundle\Entity\ModuleMenu $moduleMenuObj
     *
     * @return UserGroupAclMenu
     */
    public function setModuleMenuObj(\AdminBundle\Entity\ModuleMenu $moduleMenuObj)
    {
        $this->moduleMenuObj = $moduleMenuObj;

        return $this;
    }

    /**
     * Get moduleMenuObj
     *
     * @return \AdminBundle\Entity\ModuleMenu
     */
    public function getModuleMenuObj()
    {
        return $this->moduleMenuObj;
    }
}

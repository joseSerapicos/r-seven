<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\UserGroupAclMenuRepository")
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
     * @param \Bck\AdminBundle\Entity\UserGroupAcl $userGroupAclObj
     *
     * @return UserGroupAclMenu
     */
    public function setUserGroupAclObj(\Bck\AdminBundle\Entity\UserGroupAcl $userGroupAclObj)
    {
        $this->userGroupAclObj = $userGroupAclObj;

        return $this;
    }

    /**
     * Get UserGroupAclObj
     *
     * @return \Bck\AdminBundle\Entity\UserGroupAcl
     */
    public function getUserGroupAclObj()
    {
        return $this->userGroupAclObj;
    }

    /**
     * Set moduleMenuObj
     *
     * @param \Bck\AdminBundle\Entity\ModuleMenu $moduleMenuObj
     *
     * @return UserGroupAclMenu
     */
    public function setModuleMenuObj(\Bck\AdminBundle\Entity\ModuleMenu $moduleMenuObj)
    {
        $this->moduleMenuObj = $moduleMenuObj;

        return $this;
    }

    /**
     * Get moduleMenuObj
     *
     * @return \Bck\AdminBundle\Entity\ModuleMenu
     */
    public function getModuleMenuObj()
    {
        return $this->moduleMenuObj;
    }
}

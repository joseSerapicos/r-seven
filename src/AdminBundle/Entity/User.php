<?php
// src/AdminBundle/Entity/User.php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\AdvancedUserInterface;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\UserRepository")
 * @ORM\Table(name="user",
 *     indexes={@ORM\Index(name="idx_user_username", columns={"username", "password"})})
 */
class User extends BaseEntity implements AdvancedUserInterface
{
    /**
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Entity", cascade={"all"})
     * @ORM\JoinColumn(name="fk_entity", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     * 
     * @Assert\Valid()
     */
    protected $entityObj;

    /**
     * @ORM\ManyToOne(targetEntity="\SysadminBundle\Entity\Language")
     * @ORM\JoinColumn(name="fkApp_language", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $appLanguageObj;

    /**
     * @ORM\Column(name="username", type="string", length=32, nullable=false, unique=true, options={"comment":"Username for login"})
     */
    protected $username;

    /**
     * @ORM\Column(name="password", type="string", length=64, nullable=true, unique=false, options={"comment":"Password for login"})
     */
    protected $password;

    /**
     * @ORM\Column(name="role", type="string", length=24, nullable=false, unique=false, options={"comment":"Role for user access"})
     */
    protected $role;

    /**
     * @ORM\Column(name="isActive", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines whether the registry is enabled. Duplicate column for symfony compatibility"})
     */
    protected $isActive;

    // Extra fields to handle with password encoder
    private $passwordEncoder;

    /**
     * Set passwordEncoder (from controller)
     * @param string $passwordEncoder
     * @return User
     */
    public function setPasswordEncoder($passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
        return $this;
    }

    /**
     * Set entityObj
     * @param \EntitiesBundle\Entity\Entity $entityObj
     * @return User
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

    /**
     * Set appLanguageObj
     * @param integer $appLanguageObj
     * @return User
     */
    public function setAppLanguageObj($appLanguageObj)
    {
        $this->appLanguageObj = $appLanguageObj;
        return $this;
    }

    /**
     * Get appLanguageObj
     * @return integer
     */
    public function getAppLanguageObj()
    {
        return $this->appLanguageObj;
    }

    /**
     * Set username
     * @param string $username
     * @return User
     */
    public function setUsername($username)
    {
        $this->username = $username;
        return $this;
    }

    /**
     * Get username
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set password
     * @param string $password
     * @return User
     */
    public function setPassword($password)
    {
        if (empty($password)) {
            // Set password to null
            $this->password = null;
        } elseif (
            $this->checkPasswordChanges($password, $this->password) // Set password only if was redefined
            && !empty($this->passwordEncoder) // Encoder has been defined
        ) {
            // Encode password
            $encodedPassword = $this->passwordEncoder->encodePassword($this, $password);
            $this->setEncodedPassword($password, $encodedPassword);
        }

        return $this;
    }

    /**
     * Set encoded password
     * @param $rawPassword
     * @param $encodedPassword
     * @return User
     */
    public function setEncodedPassword($rawPassword, $encodedPassword)
    {
        if (password_verify($rawPassword, $encodedPassword)) {
            $this->password = $encodedPassword;
        } else {
            throw new \RuntimeException('No encoder has been configured for account');
        }
        return $this;
    }

    /**
     * Get password
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set role
     * @param string $role
     * @return User
     */
    public function setRole($role)
    {
        // In case of "sysadmin", role cannot be change (is useful when sysadmin are doing tests on user form edition)
        if ($this->role != "ROLE_SYSADMIN") {
            if (!in_array($role, array("ROLE_USER", "ROLE_ADMIN"))) {
                throw new \InvalidArgumentException("Invalid role");
            }
            $this->role = $role;
        }
        return $this;
    }

    /**
     * Get role
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set isEnabled
     * @param string $isEnabled
     * @return User
     */
    public function setIsEnabled($isEnabled)
    {
        $this->isEnabled = $isEnabled;
        $this->isActive = $this->isEnabled;
        return $this;
    }


    /* BASE USER INTERFACE METHODS IMPLEMENTATION */

    public function isAccountNonExpired()
    {
        return true;
    }

    public function isAccountNonLocked()
    {
        return true;
    }

    public function isCredentialsNonExpired()
    {
        return true;
    }

    public function isEnabled()
    {
        return $this->isActive;
    }

    public function getRoles()
    {
        return array($this->role);
    }

    public function eraseCredentials() {}

    public function getSalt()
    {
        // This project uses bcrypt, then it is not necessary to do anything
        return null;
    }

    /**
     * Overrides parent method
     * @return mixed
     */
    public function __toString()
    {
        return (
            $this->getEntityObj()->getName()
            . ' ' . $this->getEntityObj()->getSurname()
            . ' (' . $this->getId() . ')'
        );
    }
}
<?php

namespace LoginBundle\Entity;

use AdminBundle\Entity\User as BaseUserEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="LoginBundle\Entity\UserRepository")
 * @ORM\Table(name="user")
 */
class User extends BaseUserEntity implements \Serializable
{
    protected $isActive;

    /**
     * Set isActive
     * @param string $isActive
     * @return User
     */
    public function setIsActive($isActive)
    {
        $this->setIsEnabled($isActive);
        return $this;
    }

    /**
     * Get isActive
     * @return string
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * Interface implementation
     * @return string
     */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
            $this->isActive
        ));
    }

    /**
     * Interface implementation
     * @param string $serialized
     */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
            $this->isActive
            ) = unserialize($serialized);
    }
}
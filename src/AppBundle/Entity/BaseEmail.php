<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\EmailRepository")
 */
class BaseEmail extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=true, unique=false, options={"comment":"Name and description of contact"})
     */
    protected $name;

    /**
     * @ORM\Column(name="email", type="string", length=64, nullable=false, unique=false, options={"comment":"Email"})
     */
    protected $email;

    /**
     * @ORM\Column(name="isDefault", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if is the default email for automatic emails"})
     */
    protected $isDefault;


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

    /**
     * Set email
     * @param string $email
     * @return $this
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set isDefault
     * @param boolean $isDefault
     * @return $this
     */
    public function setIsDefault($isDefault)
    {
        $this->isDefault = $isDefault;
        return $this;
    }

    /**
     * Get isDefault
     * @return boolean
     */
    public function getIsDefault()
    {
        return $this->isDefault;
    }

    /**
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        return $this->__customToString();
    }

    /**
     * Customizable string
     * @param bool $hasIcon
     * @param bool $hasName
     * @param bool $hasEmail
     * @return string
     */
    public function __customToString($hasIcon = true, $hasName = true, $hasEmail = true)
    {
        $output = '';

        if ($hasIcon) {
            $output .= ('<i class="fa fa-at"></i> ');
        }
        if ($hasName && $this->name) {
            $output .= $this->name;
        }
        if ($hasEmail) {
            if ($hasName && $this->name) {
                $output .= ': ';
            }
            $output .= $this->email;
        }

        return $output;
    }
}
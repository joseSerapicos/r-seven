<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\PhoneRepository")
 */
class BasePhone extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=true, unique=false, options={"comment":"Name and description of contact"})
     */
    protected $name;

    /**
     * @ORM\Column(name="phone", type="string", length=16, nullable=false, unique=false, options={"comment":"Phone"})
     */
    protected $phone;


    /**
     * Set name
     *
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
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return $this
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
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
     * @param bool $hasPhone
     * @return string
     */
    public function __customToString($hasIcon = true, $hasName = true, $hasPhone = true)
    {
        $output = '';

        if ($hasIcon) {
            $output .= ('<i class="fa fa-phone"></i> ');
        }
        if ($hasName && $this->name) {
            $output .= $this->name;
        }
        if ($hasPhone) {
            if ($hasName && $this->name) {
                $output .= ': ';
            }
            $output .= $this->phone;
        }

        return $output;
    }
}

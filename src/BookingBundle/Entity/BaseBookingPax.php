<?php
namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="BookingBundle\Entity\BaseBookingPaxRepository")
 */
class BaseBookingPax extends BaseEntity {
    /**
     * @ORM\Column(name="title", type="string", length=4, nullable=false, unique=false, options={"comment":"Title"})
     * check here the concept: https://www.youtube.com/watch?v=GtvgMzQE3ro
     */
    protected $title; // [Mr., Ms.]

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=false, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="surname", type="string", length=64, nullable=false, unique=false, options={"comment":"Surname"})
     */
    protected $surname;

    /**
     * @ORM\Column(name="birthDate", type="date", nullable=true, unique=false, options={"comment":"Birth date"})
     */
    protected $birthDate;

    /**
     * Set title
     *
     * @param string $title
     *
     * @return $this
     */
    public function setTitle($title)
    {
        if (!empty($title) && !in_array($title, array("Mr.", "Ms."))) {
            throw new \InvalidArgumentException("Invalid title");
        }
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set name
     *
     * @param string $name
     *
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
     * Set surname
     *
     * @param string $surname
     *
     * @return $this
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * Get surname
     *
     * @return string
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Set birthDate
     *
     * @param \DateTime $birthDate
     *
     * @return $this
     */
    public function setBirthDate($birthDate)
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    /**
     * Get birthDate
     *
     * @return \DateTime
     */
    public function getBirthDate()
    {
        return $this->birthDate;
    }
}

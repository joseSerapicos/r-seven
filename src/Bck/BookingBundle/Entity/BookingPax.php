<?php
namespace Bck\BookingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\BookingBundle\Entity\BookingPaxRepository")
 * @ORM\Table(name="bookingPax")
 */
class BookingPax extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Booking")
     * @ORM\JoinColumn(name="fk_booking", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $bookingObj;

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
     * @ORM\Column(name="identification", type="string", length=16, nullable=false, unique=false, options={"comment":"Identification document"})
     *
     * The value of this field can take different types, according with the type of identification document
     * (Spain: DNI/NIE, Portugal: Cartao cidadao, foreign citizen: Passport, etc.).
     */
    protected $identification;


    /**
     * Set bookingObj
     * @param \Bck\BookingBundle\Entity\Booking $bookingObj
     * @return $this
     */
    public function setBookingObj(\Bck\BookingBundle\Entity\Booking $bookingObj)
    {
        $this->bookingObj = $bookingObj;
        return $this;
    }

    /**
     * Get bookingObj
     * @return \Bck\BookingBundle\Entity\Booking
     */
    public function getBookingObj()
    {
        return $this->bookingObj;
    }

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

    /**
     * Set identification
     * @param string $identification
     * @return $this
     */
    public function setIdentification($identification)
    {
        $this->identification = $identification;

        return $this;
    }

    /**
     * Get identification
     * @return string
     */
    public function getIdentification()
    {
        return $this->identification;
    }
}
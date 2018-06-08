<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Service\HelperService;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Bck\EntitiesBundle\Entity\EntityRepository")
 * @ORM\Table(name="entity",
 *     indexes={@ORM\Index(name="idx_entity_fullName", columns={"name", "surname"})},
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_entity_code", columns={"codePrefix", "codeNumber"})}
 * )
 * @ORM\HasLifecycleCallbacks()
 */
class Entity extends BaseEntity {
    /**
     * @ORM\Column(name="codePrefix", type="string", length=8, nullable=true, unique=false, options={"comment":"Code prefix"})
     */
    protected $codePrefix;

    /**
     * @ORM\Column(name="codeNumber", type="bigint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Code number"})
     */
    protected $codeNumber;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $storeObj;

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
     * @ORM\Column(name="legalName", type="string", length=128, nullable=true, unique=false, options={"comment":"Legal Name"})
     *
     * Based on this definition: http://www.invention-protection.com/ip/publications/docs/Legal_Name_Trade_Name_Trademark.html
     */
    protected $legalName;

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
     * @ORM\Column(name="taxNumber", type="string", length=16, nullable=true, unique=false, options={"comment":"Tax code"})
     */
    protected $taxNumber;

    /**
     * @ORM\Column(name="avatar", type="string", length=128, nullable=true, unique=false, options={"comment":"Entity image profile"})
     */
    protected $avatar;

    // Extra field to handle file upload
    private $filesRepository;


    /**
     * Set codePrefix
     * @param $codePrefix
     * @return $this
     */
    public function setCodePrefix($codePrefix)
    {
        $this->codePrefix = $codePrefix;
        return $this;
    }

    /**
     * Get codePrefix
     * @return string
     */
    public function getCodePrefix()
    {
        return $this->codePrefix;
    }

    /**
     * Set codeNumber
     * @param $codeNumber
     * @return $this
     */
    public function setCodeNumber($codeNumber)
    {
        $this->codeNumber = $codeNumber;
        return $this;
    }

    /**
     * Get codeNumber
     * @return int
     */
    public function getCodeNumber()
    {
        return $this->codeNumber;
    }

    /**
     * Get code (return the code to use in view, in database queries use CONCAT)
     * @return string
     */
    public function getCode()
    {
        return ($this->codePrefix . $this->codeNumber);
    }

    /**
     * Set storeObj
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\Bck\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \Bck\AdminBundle\Entity\Store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
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
     * @return Entity
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
     * @return Entity
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
     * Set legalName
     *
     * @param string $legalName
     *
     * @return Entity
     */
    public function setLegalName($legalName)
    {
        $this->legalName = $legalName;

        return $this;
    }

    /**
     * Get legalName
     * @param bool $useFallback (Use fallback to force a non empty return)
     * @return string
     */
    public function getLegalName($useFallback = false)
    {
        return ((empty($this->legalName) && $useFallback) ? ($this->name . ' ' . $this->surname) : $this->legalName);
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

    /**
     * Set taxNumber
     *
     * @param string $taxNumber
     *
     * @return Entity
     */
    public function setTaxNumber($taxNumber)
    {
        $this->taxNumber = $taxNumber;

        return $this;
    }

    /**
     * Get taxNumber
     *
     * @return string
     */
    public function getTaxNumber()
    {
        return $this->taxNumber;
    }

    /**
     * Set avatar
     * @param string $avatar
     * @return Entity
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
        return $this;
    }

    /**
     * Get avatar
     *
     * @return string
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * @ORM\PreRemove()
     *
     * Prepare to free resources. Save path of uploads to remove after delete the object (after delete "id" is
     * no more available to determine the path)
     * @return $this
     */
    public function preRemove()
    {
        // Save files repository to free resources after delete object
        $this->filesRepository = (empty($this->getId())
            ? null
            : (HelperService::getGlobalVar('filesRepository') . 'entities/' . $this->getId())
        );

        return $this;
    }

    /**
     * @ORM\PostRemove()
     *
     * Remove entity files and dir
     * @return $this
     */
    public function postRemove()
    {
        // Remove entity directory
        if ($this->filesRepository) {
            HelperService::rmDirR($this->filesRepository);
        }

        return $this;
    }

    /**
     * Representation of object for dropdown (name/label for object)
     * @return mixed
     */
    public function __toString()
    {
        return (
            $this->getName()
            . ' ' . $this->getSurname()
            . ' (' . $this->getCode() . ')'
        );
    }
}
<?php
namespace Bck\UserBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\UserBundle\Entity\UserCalendarRepository")
 * @ORM\Table(name="userCalendar",
 *     indexes={@ORM\Index(name="idx_userCalendar_date", columns={"startTime", "endTime"})}
 * )
 */
class UserCalendar extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\LoginBundle\Entity\User")
     * @ORM\JoinColumn(name="fk_user", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $userObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=false, options={"comment":"Name/Title"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="startTime", type="datetime", nullable=false, unique=false, options={"comment":"Start time of event"})
     */
    protected $startTime;

    /**
     * @ORM\Column(name="endTime", type="datetime", nullable=false, unique=false, options={"comment":"End time of event"})
     */
    protected $endTime;

    /**
     * @ORM\Column(name="color", type="string", length=7, nullable=true, unique=false, options={"comment":"Color"})
     */
    protected $color;

    /**
     * @ORM\Column(name="privacy", type="string", length=16, nullable=false, unique=false, options={"comment":"Privacy"})
     */
    protected $privacy; // [PRIVATE, SHARED]

    /**
     * @ORM\Column(name="shareToType", type="string", length=16, nullable=true, unique=false, options={"comment":"Type of share"})
     *
     * Only filled if "privacy" = "SHARED"
     */
    protected $shareToType; // [ALL, USER, USER_GROUP, STORE]

    /**
     * @ORM\ManyToOne(targetEntity="\LoginBundle\Entity\User")
     * @ORM\JoinColumn(name="fk_user_share", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $shareUserObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\UserBundle\Entity\UserGroup")
     * @ORM\JoinColumn(name="fk_userGroup", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $userGroupObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $storeObj;


    /**
     * Set userObj
     * @param \LoginBundle\Entity\User $userObj
     * @return $this
     */
    public function setUserObj(\LoginBundle\Entity\User $userObj)
    {
        $this->userObj = $userObj;
        return $this;
    }

    /**
     * Get userObj
     * @return \LoginBundle\Entity\User
     */
    public function getUserObj()
    {
        return $this->userObj;
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
     * Set description
     *
     * @param string $description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set startTime
     *
     * @param \DateTime $startTime
     *
     * @return $this
     */
    public function setStartTime($startTime)
    {
        $this->startTime = $startTime;

        return $this;
    }

    /**
     * Get startTime
     *
     * @return \DateTime
     */
    public function getStartTime()
    {
        return $this->startTime;
    }

    /**
     * Set endTime
     *
     * @param \DateTime $endTime
     *
     * @return $this
     */
    public function setEndTime($endTime)
    {
        $this->endTime = $endTime;

        return $this;
    }

    /**
     * Get endTime
     *
     * @return \DateTime
     */
    public function getEndTime()
    {
        return $this->endTime;
    }

    /**
     * Set shareToType
     *
     * @param string $shareToType
     *
     * @return $this
     */
    public function setShareToType($shareToType)
    {
        $this->shareToType = $shareToType;

        return $this;
    }

    /**
     * Get shareToType
     *
     * @return string
     */
    public function getShareToType()
    {
        return $this->shareToType;
    }

    /**
     * Set color
     *
     * @param string $color
     *
     * @return $this
     */
    public function setColor($color)
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get color
     *
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set privacy
     *
     * @param string $privacy
     *
     * @return $this
     */
    public function setPrivacy($privacy)
    {
        $this->privacy = $privacy;

        return $this;
    }

    /**
     * Get privacy
     *
     * @return string
     */
    public function getPrivacy()
    {
        return $this->privacy;
    }

    /**
     * Set shareUserObj
     * @param \LoginBundle\Entity\User $shareUserObj
     * @return $this
     */
    public function setShareUserObj(\LoginBundle\Entity\User $shareUserObj = null)
    {
        $this->shareUserObj = $shareUserObj;
        return $this;
    }

    /**
     * Get shareUserObj
     * @return \LoginBundle\Entity\User
     */
    public function getShareUserObj()
    {
        return $this->shareUserObj;
    }

    /**
     * Set UserGroupObj
     * @param \Bck\UserBundle\Entity\UserGroup $userGroupObj
     * @return $this
     */
    public function setUserGroupObj(\Bck\UserBundle\Entity\UserGroup $userGroupObj = null)
    {
        $this->userGroupObj = $userGroupObj;
        return $this;
    }

    /**
     * Get UserGroupObj
     * @return \Bck\UserBundle\Entity\UserGroup
     */
    public function getUserGroupObj()
    {
        return $this->userGroupObj;
    }

    /**
     * Set storeObj
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\Bck\AdminBundle\Entity\Store $storeObj = null)
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
}

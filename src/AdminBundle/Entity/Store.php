<?php
// src/AdminBundle/Entity/Store.php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\StoreRepository")
 * @ORM\Table(name="store")
 */
class Store extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_fallbackStore", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     *
     * Fallback store to get data that is not already defined here.
     */
    protected $fallbackStoreObj;

    /**
     * @ORM\Column(name="legalName", type="string", length=64, nullable=true, unique=false, options={"comment":"Formal name"})
     */
    protected $legalName;

    /**
     * @ORM\Column(name="color", type="string", length=7, nullable=true, unique=false, options={"comment":"Color"})
     */
    protected $color;

    /**
     * @ORM\Column(name="taxNumber", type="string", length=12, nullable=true, unique=false, options={"comment":"Tax number"})
     */
    protected $taxNumber;

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\StoreAddress", cascade={"all"})
     * @ORM\JoinColumn(name="fk_storeAddress", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     *
     * @Assert\Valid()
     */
    protected $storeAddressObj;

    /**
     * @ORM\Column(name="privacy", type="string", length=16, nullable=false, unique=false, options={"comment":"Privacy"})
     */
    protected $privacy; // [PRIVATE, SHARED]

    /**
     * @ORM\Column(name="shareToType", type="string", length=16, nullable=true, unique=false, options={"comment":"Type of share"})
     *
     * Only filled if "privacy" = "SHARED"
     */
    // Consider in the future, if necessary to create groups of stores like users to share whit multiple stores
    // (a group of stores lke the user calendar)
    protected $shareToType; // [ALL, STORE]

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     * 
     * Store to share
     */
    protected $storeObj;

    /**
     * @ORM\Column(name="shareEntities", type="string", length=16, nullable=true, unique=false, options={"default":0, "comment":"Share entities"})
     */
    protected $shareEntities; // [ALL, CLIENTS, SUPPLIERS]

    /**
     * @ORM\Column(name="shareCurrentAccounts", type="string", length=16, nullable=true, unique=false, options={"default":0, "comment":"Share current accounts"})
     */
    protected $shareCurrentAccounts; // [ALL, CLIENTS, SUPPLIERS]

    /**
     * Get name
     * @return String
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set name
     * @param string $name
     * @return Store
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Set fallbackStoreObj
     * @param \AdminBundle\Entity\Store $fallbackStoreObj
     * @return $this
     */
    public function setFallbackStoreObj(\AdminBundle\Entity\Store $fallbackStoreObj = null)
    {
        $fallbackStoreObj = (($fallbackStoreObj == $this) ? null : $fallbackStoreObj); // Avoid infinite loop
        $this->fallbackStoreObj = $fallbackStoreObj;
        return $this;
    }

    /**
     * Get fallbackStoreObj
     * @return \AdminBundle\Entity\Store
     */
    public function getFallbackStoreObj()
    {
        return $this->fallbackStoreObj;
    }

    /**
     * Set legalName
     * @param string $legalName
     * @return Store
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
        return ((empty($this->legalName) && $useFallback)
            ? (empty($this->fallbackStoreObj)
                ? $this->name
                : $this->fallbackStoreObj->getLegalName()
            )
            : $this->legalName
        );
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
     * Set taxNumber
     * @param string $taxNumber
     * @return Store
     */
    public function setTaxNumber($taxNumber)
    {
        $this->taxNumber = $taxNumber;
        return $this;
    }

    /**
     * Get taxNumber
     * @param bool $useFallback (Use fallback to force a non empty return)
     * @return string
     */
    public function getTaxNumber($useFallback = false)
    {
        return ((empty($this->taxNumber) && $useFallback && !empty($this->fallbackStoreObj))
            ? $this->fallbackStoreObj->getTaxNumber()
            : $this->taxNumber
        );
    }

    /**
     * Set storeAddressObj
     * @param \AdminBundle\Entity\StoreAddress $storeAddressObj
     * @return Store
     */
    public function setStoreAddressObj(\AdminBundle\Entity\StoreAddress $storeAddressObj)
    {
        $this->storeAddressObj = $storeAddressObj;
        return $this;
    }

    /**
     * Get storeAddressObj
     * @return \AdminBundle\Entity\StoreAddress
     */
    public function getStoreAddressObj()
    {
        return $this->storeAddressObj;
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
     * Set storeObj
     * @param \AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj = null)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \AdminBundle\Entity\Store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Set shareEntities
     *
     * @param string $shareEntities
     *
     * @return $this
     */
    public function setShareEntities($shareEntities)
    {
        $this->shareEntities = $shareEntities;

        return $this;
    }

    /**
     * Get shareEntities
     *
     * @return string
     */
    public function getShareEntities()
    {
        return $this->shareEntities;
    }

    /**
     * Set shareCurrentAccounts
     *
     * @param string $shareCurrentAccounts
     *
     * @return $this
     */
    public function setShareCurrentAccounts($shareCurrentAccounts)
    {
        $this->shareCurrentAccounts = $shareCurrentAccounts;

        return $this;
    }

    /**
     * Get shareCurrentAccounts
     *
     * @return string
     */
    public function getShareCurrentAccounts()
    {
        return $this->shareCurrentAccounts;
    }
}

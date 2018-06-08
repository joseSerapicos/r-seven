<?php
// src/BckAdminBundle/Entity/Store.php

namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\StoreRepository")
 * @ORM\Table(name="store")
 */
class Stoddre extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    private $storeObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="legalName", type="string", length=64, nullable=true, unique=false, options={"comment":"Formal name"})
     */
    protected $legalName;

    /**
     * @ORM\Column(name="taxNumber", type="string", length=12, nullable=true, unique=false, options={"comment":"Tax number"})
     */
    protected $taxNumber;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AdminBundle\Entity\StoreAddress", cascade={"all"})
     * @ORM\JoinColumn(name="fk_storeAddress", referencedColumnName="id", nullable=false, unique=true, onDelete="CASCADE")
     *
     * @Assert\Valid()
     */
    protected $storeAddressObj;

    /**
     * Set storeObj
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return Store
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
     * @return string
     */
    public function getLegalName()
    {
        return $this->legalName;
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
     * @return string
     */
    public function getTaxNumber()
    {
        return $this->taxNumber;
    }

    /**
     * Set storeAddressObj
     * @param \Bck\AdminBundle\Entity\StoreAddress $storeAddressObj
     * @return Store
     */
    public function setStoreAddressObj(\Bck\AdminBundle\Entity\StoreAddress $storeAddressObj)
    {
        $this->storeAddressObj = $storeAddressObj;
        return $this;
    }

    /**
     * Get storeAddressObj
     * @return \Bck\AdminBundle\Entity\StoreAddress
     */
    public function getStoreAddressObj()
    {
        return $this->storeAddressObj;
    }

    /* FOREIGN FIELDS TO BE SERIALIZED BY SYMFONY SERIALIZER */

    /**
     * Get street1
     * @return string
     */
    public function getStreet1()
    {
        return $this->storeAddressObj->getStreet1();
    }

    /**
     * Get street2
     * @return string
     */
    public function getStreet2()
    {
        return $this->storeAddressObj->getStreet2();
    }

    /**
     * Get city
     * @return string
     */
    public function getCity()
    {
        return $this->storeAddressObj->getCity();
    }

    /**
     * Get postCode
     * @return string
     */
    public function getPostCode()
    {
        return $this->storeAddressObj->getPostCode();
    }

    /**
     * Get region
     * @return string
     */
    public function getRegion()
    {
        return $this->storeAddressObj->getRegion();
    }

    /**
     * Get country
     * @return string
     */
    public function getCountry()
    {
        return $this->storeAddressObj->getCountry();
    }
}

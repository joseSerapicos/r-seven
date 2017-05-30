<?php
namespace AdminBundle\Entity;

use AppBundle\Entity\BasePhone;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\StorePhoneRepository")
 * @ORM\Table(name="storePhone")
 */
class StorePhone extends BasePhone {
    /**
     * @ORM\ManyToOne(targetEntity="Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $storeObj;

    /**
     * @ORM\Column(name="forDocuments", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Determines if the link is added to documents"})
     */
    protected $forDocuments;

    /**
     * Set storeObj
     * @param \AdminBundle\Entity\Store $storeObj
     * @return StorePhone
     */
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \AdminBundle\Entity\store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Set forDocuments
     * @param boolean $forDocuments
     * @return $this
     */
    public function setForDocuments($forDocuments)
    {
        $this->forDocuments = $forDocuments;
        return $this;
    }

    /**
     * Get forDocuments
     * @return boolean
     */
    public function getForDocuments()
    {
        return $this->forDocuments;
    }
}

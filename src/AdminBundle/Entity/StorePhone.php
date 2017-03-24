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
}

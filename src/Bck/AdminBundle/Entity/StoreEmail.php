<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseEmail;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\StoreEmailRepository")
 * @ORM\Table(name="storeEmail")
 */
class StoreEmail extends BaseEmail {
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
     * @ORM\Column(name="forFrontOffice", type="boolean", nullable=true, unique=false, options={"default":0, "comment":"Determines if the phone is added to front-office pages"})
     */
    protected $forFrontOffice;


    /**
     * Set storeObj
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return StoreEmail
     */
    public function setStoreObj(\Bck\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \Bck\AdminBundle\Entity\store
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

    /**
     * Set forFrontOffice
     * @param boolean $forFrontOffice
     * @return $this
     */
    public function setForFrontOffice($forFrontOffice)
    {
        $this->forFrontOffice = $forFrontOffice;
        return $this;
    }

    /**
     * Get forFrontOffice
     * @return boolean
     */
    public function getForFrontOffice()
    {
        return $this->forFrontOffice;
    }
}

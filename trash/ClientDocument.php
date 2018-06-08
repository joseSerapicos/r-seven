<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentRepository")
 * @ORM\Table(name="clientDocument",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_clientDocument_number", columns={"fk_clientDocumentType", "number"})
 *     }
 * )
 */
class ClientDocumentssssss extends BaseDocument {
    /**
     * @ORM\ManyToOne(targetEntity="ClientDocumentType")
     * @ORM\JoinColumn(name="fk_clientDocumentType", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientDocumentTypeObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\EntitiesBundle\Entity\Client")
     * @ORM\JoinColumn(name="fk_client", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientObj;

    /**
     * One current account has many "storeInfoObj".
     *  @ORM\OneToMany(targetEntity="ClientDocumentStoreInfo", mappedBy="clientDocumentObj")
     */
    private $storeInfoObjArr;


    public function __construct() {
        $this->storeInfoObjArr = new ArrayCollection();
    }

    /**
     * Set clientDocumentTypeObj
     * @param \Bck\AccountingBundle\Entity\ClientDocumentType $clientDocumentTypeObj
     * @return $this
     */
    public function setClientDocumentTypeObj(\Bck\AccountingBundle\Entity\ClientDocumentType $clientDocumentTypeObj)
    {
        $this->clientDocumentTypeObj = $clientDocumentTypeObj;
        return $this;
    }

    /**
     * Get clientDocumentTypeObj
     * @return \Bck\AccountingBundle\Entity\ClientDocumentType
     */
    public function getClientDocumentTypeObj()
    {
        return $this->clientDocumentTypeObj;
    }

    /**
     * Set clientObj
     *
     * @param \Bck\EntitiesBundle\Entity\Client $clientObj
     * @return $this
     */
    public function setClientObj(\Bck\EntitiesBundle\Entity\Client $clientObj)
    {
        $this->clientObj = $clientObj;

        return $this;
    }

    /**
     * Get clientObj
     * @return \Bck\EntitiesBundle\Entity\Client
     */
    public function getClientObj()
    {
        return $this->clientObj;
    }

    /**
     * Get new storeInfoObj
     * @return \Bck\AccountingBundle\Entity\ClientDocumentStoreInfo
     */
    public function getNewStoreInfoObj()
    {
        return new Bck\AccountingBundle\Entity\ClientDocumentStoreInfo();
    }

    /**
     * Add storeInfoObjArr
     *
     * @param \Bck\AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr
     *
     * @return ClientDocument
     */
    public function addStoreInfoObjArr(Bck\AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr)
    {
        $this->storeInfoObjArr[] = $storeInfoObjArr;

        return $this;
    }

    /**
     * Remove storeInfoObjArr
     *
     * @param \Bck\AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr
     */
    public function removeStoreInfoObjArr(Bck\AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr)
    {
        $this->storeInfoObjArr->removeElement($storeInfoObjArr);
    }

    /**
     * Get storeInfoObjArr
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getStoreInfoObjArr()
    {
        return $this->storeInfoObjArr;
    }
}

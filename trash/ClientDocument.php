<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentRepository")
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
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Client")
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
     * @param \AccountingBundle\Entity\ClientDocumentType $clientDocumentTypeObj
     * @return $this
     */
    public function setClientDocumentTypeObj(\AccountingBundle\Entity\ClientDocumentType $clientDocumentTypeObj)
    {
        $this->clientDocumentTypeObj = $clientDocumentTypeObj;
        return $this;
    }

    /**
     * Get clientDocumentTypeObj
     * @return \AccountingBundle\Entity\ClientDocumentType
     */
    public function getClientDocumentTypeObj()
    {
        return $this->clientDocumentTypeObj;
    }

    /**
     * Set clientObj
     *
     * @param \EntitiesBundle\Entity\Client $clientObj
     * @return $this
     */
    public function setClientObj(\EntitiesBundle\Entity\Client $clientObj)
    {
        $this->clientObj = $clientObj;

        return $this;
    }

    /**
     * Get clientObj
     * @return \EntitiesBundle\Entity\Client
     */
    public function getClientObj()
    {
        return $this->clientObj;
    }

    /**
     * Get new storeInfoObj
     * @return \AccountingBundle\Entity\ClientDocumentStoreInfo
     */
    public function getNewStoreInfoObj()
    {
        return new \AccountingBundle\Entity\ClientDocumentStoreInfo();
    }

    /**
     * Add storeInfoObjArr
     *
     * @param \AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr
     *
     * @return ClientDocument
     */
    public function addStoreInfoObjArr(\AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr)
    {
        $this->storeInfoObjArr[] = $storeInfoObjArr;

        return $this;
    }

    /**
     * Remove storeInfoObjArr
     *
     * @param \AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr
     */
    public function removeStoreInfoObjArr(\AccountingBundle\Entity\ClientDocumentStoreInfo $storeInfoObjArr)
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

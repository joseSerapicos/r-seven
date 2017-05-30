<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientCurrentAccountRepository")
 * @ORM\Table(name="clientCurrentAccount",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_clientCurrentAccount_number", columns={"fk_clientDocumentType", "number"})
 *     }
 * )
 */
class ClientCurrentAccountssssss extends BaseCurrentAccount {
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
     *  @ORM\OneToMany(targetEntity="ClientCurrentAccountStoreInfo", mappedBy="clientCurrentAccountObj")
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
     * @return \AccountingBundle\Entity\ClientCurrentAccountStoreInfo
     */
    public function getNewStoreInfoObj()
    {
        return new \AccountingBundle\Entity\ClientCurrentAccountStoreInfo();
    }

    /**
     * Add storeInfoObjArr
     *
     * @param \AccountingBundle\Entity\ClientCurrentAccountStoreInfo $storeInfoObjArr
     *
     * @return ClientCurrentAccount
     */
    public function addStoreInfoObjArr(\AccountingBundle\Entity\ClientCurrentAccountStoreInfo $storeInfoObjArr)
    {
        $this->storeInfoObjArr[] = $storeInfoObjArr;

        return $this;
    }

    /**
     * Remove storeInfoObjArr
     *
     * @param \AccountingBundle\Entity\ClientCurrentAccountStoreInfo $storeInfoObjArr
     */
    public function removeStoreInfoObjArr(\AccountingBundle\Entity\ClientCurrentAccountStoreInfo $storeInfoObjArr)
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

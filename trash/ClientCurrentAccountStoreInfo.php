<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientCurrentAccountStoreInfoRepository")
 * @ORM\Table(name="clientCurrentAccountStoreInfo")
 */
class ClientCurrentAccountStoreInfo extends BaseCurrentAccountStoreInfo {
    /**
     * @ORM\ManyToOne(targetEntity="ClientCurrentAccount", inversedBy="storeInfoObjArr")
     * @ORM\JoinColumn(name="fk_clientCurrentAccount", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $clientCurrentAccountObj;


    /**
     * Set clientCurrentAccountObj
     * @param \AccountingBundle\Entity\ClientCurrentAccount $clientCurrentAccountObj
     * @return $this
     */
    public function setClientCurrentAccountObj(\AccountingBundle\Entity\ClientCurrentAccount $clientCurrentAccountObj)
    {
        $this->clientCurrentAccountObj = $clientCurrentAccountObj;
        return $this;
    }

    /**
     * Get clientCurrentAccountObj
     * @return \AccountingBundle\Entity\ClientCurrentAccount
     */
    public function getClientCurrentAccountObj()
    {
        return $this->clientCurrentAccountObj;
    }
}
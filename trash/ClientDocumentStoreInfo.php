<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentStoreInfoRepository")
 * @ORM\Table(name="clientDocumentStoreInfo")
 */
class ClientDocumentStoreInfo extends BaseDocumentStoreInfo {
    /**
     * @ORM\ManyToOne(targetEntity="ClientDocument", inversedBy="storeInfoObjArr")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $clientDocumentObj;


    /**
     * Set clientDocumentObj
     * @param \Bck\AccountingBundle\Entity\ClientDocument $clientDocumentObj
     * @return $this
     */
    public function setClientDocumentObj(\Bck\AccountingBundle\Entity\ClientDocument $clientDocumentObj)
    {
        $this->clientDocumentObj = $clientDocumentObj;
        return $this;
    }

    /**
     * Get clientDocumentObj
     * @return \Bck\AccountingBundle\Entity\ClientDocument
     */
    public function getClientDocumentObj()
    {
        return $this->clientDocumentObj;
    }
}
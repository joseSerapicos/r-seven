<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentReceiptSettlementRepository")
 * @ORM\Table(name="clientDocumentReceiptSettlement")
 */
class ClientDocumentReceiptSettlement extends BaseDocumentReceiptSettlement {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientDocumentObj;

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_settlementClientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $settlementClientDocumentObj;


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

    /**
     * Set settlementClientDocumentObj
     * @param \Bck\AccountingBundle\Entity\ClientDocument $settlementClientDocumentObj
     * @return $this
     */
    public function setSettlementClientDocumentObj(\Bck\AccountingBundle\Entity\ClientDocument $settlementClientDocumentObj)
    {
        $this->settlementClientDocumentObj = $settlementClientDocumentObj;
        return $this;
    }

    /**
     * Get settlementClientDocumentObj
     * @return \Bck\AccountingBundle\Entity\ClientDocument
     */
    public function getSettlementClientDocumentObj()
    {
        return $this->settlementClientDocumentObj;
    }
}
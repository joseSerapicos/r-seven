<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentReceiptSettlementRepository")
 * @ORM\Table(name="clientDocumentReceiptSettlement")
 */
class ClientDocumentReceiptSettlement extends BaseDocumentReceiptSettlement {
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientDocumentObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_settlementClientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $settlementClientDocumentObj;


    /**
     * Set clientDocumentObj
     * @param \AccountingBundle\Entity\ClientDocument $clientDocumentObj
     * @return $this
     */
    public function setClientDocumentObj(\AccountingBundle\Entity\ClientDocument $clientDocumentObj)
    {
        $this->clientDocumentObj = $clientDocumentObj;
        return $this;
    }

    /**
     * Get clientDocumentObj
     * @return \AccountingBundle\Entity\ClientDocument
     */
    public function getClientDocumentObj()
    {
        return $this->clientDocumentObj;
    }

    /**
     * Set settlementClientDocumentObj
     * @param \AccountingBundle\Entity\ClientDocument $settlementClientDocumentObj
     * @return $this
     */
    public function setSettlementClientDocumentObj(\AccountingBundle\Entity\ClientDocument $settlementClientDocumentObj)
    {
        $this->settlementClientDocumentObj = $settlementClientDocumentObj;
        return $this;
    }

    /**
     * Get settlementClientDocumentObj
     * @return \AccountingBundle\Entity\ClientDocument
     */
    public function getSettlementClientDocumentObj()
    {
        return $this->settlementClientDocumentObj;
    }
}
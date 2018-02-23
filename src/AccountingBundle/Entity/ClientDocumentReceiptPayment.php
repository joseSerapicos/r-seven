<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentReceiptPaymentRepository")
 * @ORM\Table(name="clientDocumentReceiptPayment")
 */
class ClientDocumentReceiptPayment extends BaseDocumentReceiptPayment {
    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\ClientDocument")
     * @ORM\JoinColumn(name="fk_clientDocument", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $clientDocumentObj;


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
}
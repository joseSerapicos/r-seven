<?php
namespace Bck\AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentInvoiceRectificationRepository")
 * @ORM\Table(name="clientDocumentInvoiceRectification")
 * This table links the document rectification detail to the original document detail
 */
class ClientDocumentInvoiceRectification extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail", cascade={"all"})
     * @ORM\JoinColumn(name="fk_clientDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     *
     * @Assert\Valid()
     */
    protected $clientDocumentInvoiceDetailObj; // rectification client document invoice detail object

    /**
     * @ORM\ManyToOne(targetEntity="Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail")
     * @ORM\JoinColumn(name="fk_rectificationClientDocumentInvoiceDetail", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $rectificationClientDocumentInvoiceDetailObj; // original client document invoice detail object


    /**
     * Set clientDocumentInvoiceDetailObj
     * @param \Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail $clientDocumentInvoiceDetailObj
     * @return $this
     */
    public function setClientDocumentInvoiceDetailObj(\Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail $clientDocumentInvoiceDetailObj)
    {
        $this->clientDocumentInvoiceDetailObj = $clientDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get clientDocumentInvoiceDetailObj
     * @return \Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail
     */
    public function getClientDocumentInvoiceDetailObj()
    {
        return $this->clientDocumentInvoiceDetailObj;
    }

    /**
     * Set rectificationClientDocumentInvoiceDetailObj
     * @param \Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail $rectificationClientDocumentInvoiceDetailObj
     * @return $this
     */
    public function setRectificationClientDocumentInvoiceDetailObj(\Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail $rectificationClientDocumentInvoiceDetailObj)
    {
        $this->rectificationClientDocumentInvoiceDetailObj = $rectificationClientDocumentInvoiceDetailObj;
        return $this;
    }

    /**
     * Get rectificationClientDocumentInvoiceDetailObj
     * @return \Bck\AccountingBundle\Entity\ClientDocumentInvoiceDetail
     */
    public function getRectificationClientDocumentInvoiceDetailObj()
    {
        return $this->rectificationClientDocumentInvoiceDetailObj;
    }
}
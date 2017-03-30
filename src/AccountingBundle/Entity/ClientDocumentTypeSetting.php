<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentTypeSettingRepository")
 * @ORM\Table(name="clientDocumentTypeSetting",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_clientDocumentTypeSetting", columns={"fk_store", "fk_clientDocumentType"})
 *     }
 * )
 */
class ClientDocumentTypeSetting extends BaseDocumentTypeSetting {
    /**
     * @ORM\ManyToOne(targetEntity="ClientDocumentType")
     * @ORM\JoinColumn(name="fk_clientDocumentType", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $clientDocumentTypeObj;


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
}
<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentRepository")
 * @ORM\Table(name="clientDocument",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_clientDocument_code", columns={"fk_clientDocumentType", "codePrefix", "codeNumber"})
 *     }
 * )
 */
class ClientDocument extends BaseDocument {
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
     * Representation of object for dropdown (name/label for object)
     * @return mixed
     */
    public function __toString()
    {
        return (
            $this->getClientDocumentTypeObj()->getName()
            . ' (' . $this->getCode()
            . ' @ ' . $this->getRemainSettlement() . ')'
        );
    }
}

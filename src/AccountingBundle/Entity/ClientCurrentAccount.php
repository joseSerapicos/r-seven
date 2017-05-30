<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientCurrentAccountRepository")
 * @ORM\Table(name="clientCurrentAccount",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_clientCurrentAccount_code", columns={"fk_clientDocumentType", "code"})
 *     }
 * )
 */
class ClientCurrentAccount extends BaseCurrentAccount {
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
}

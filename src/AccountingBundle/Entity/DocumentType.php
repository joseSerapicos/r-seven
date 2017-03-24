<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\DocumentTypeRepository")
 * @ORM\Table(name="documentType",
 *     indexes={@ORM\Index(name="idx_documentType_entityRole", columns={"entityRole"})}
 * )
 */
class DocumentType extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="prefix", type="string", length=8, nullable=false, unique=false, options={"comment":"Prefix"})
     */
    protected $prefix;

    /**
     * @ORM\Column(name="entityRole", type="string", length=16, nullable=false, unique=false, options={"comment":"Entity role"})
     */
    protected $entityRole; // [CLIENT, SUPPLIER, OTHER]

    /**
     * @ORM\Column(name="operation", type="string", length=16, nullable=false, unique=false, options={"comment":"Nature of operations"})
     */
    protected $operation; // [DEBIT, CREDIT, NEUTRAL]

    /**
     * Set name
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get name
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set prefix
     * @param $prefix
     * @return $this
     */
    public function setPrefix($prefix)
    {
        $this->prefix = $prefix;
        return $this;
    }

    /**
     * Get prefix
     * @return mixed
     */
    public function getPrefix()
    {
        return $this->prefix;
    }

    /**
     * Set entityRole
     *
     * @param string $entityRole
     *
     * @return $this
     */
    public function setEntityRole($entityRole)
    {
        if (!empty($entityRole) && !in_array($entityRole, array("CLIENT", "SUPPLIER", "OTHER"))) {
            throw new \InvalidArgumentException("Invalid entity role");
        }
        $this->entityRole = $entityRole;

        return $this;
    }

    /**
     * Get entityRole
     *
     * @return string
     */
    public function getEntityRole()
    {
        return $this->entityRole;
    }

    /**
     * Set operation
     *
     * @param string $operation
     *
     * @return $this
     */
    public function setOperation($operation)
    {
        if (!empty($operation) && !in_array($operation, array("DEBIT", "CREDIT", "NEUTRAL"))) {
            throw new \InvalidArgumentException("Invalid operation nature");
        }
        $this->operation = $operation;

        return $this;
    }

    /**
     * Get operation
     *
     * @return string
     */
    public function getOperation()
    {
        return $this->operation;
    }
}
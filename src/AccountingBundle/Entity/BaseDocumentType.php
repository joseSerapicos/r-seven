<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseDocumentTypeRepository")
 */
class BaseDocumentType extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="prefix", type="string", length=8, nullable=false, unique=false, options={"comment":"Prefix"})
     */
    protected $prefix;

    /**
     * @ORM\Column(name="operation", type="string", length=16, nullable=false, unique=false, options={"comment":"Nature of operations"})
     */
    protected $operation; // [DEBIT, CREDIT, NONE]

    /**
     * @ORM\Column(name="acl", type="smallint", nullable=true, unique=false, options={"unsigned":true, "comment":"Access control lists"})
     * Some document types can't be edited or removed
     */
    protected $acl;

    /**
     * @ORM\Column(name="requiresSysadminRole", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if the menu access requires admin role"})
     */
    protected $requiresSysadminRole;

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
     * Set operation
     *
     * @param string $operation
     *
     * @return $this
     */
    public function setOperation($operation)
    {
        if (!empty($operation) && !in_array($operation, array("DEBIT", "CREDIT", "NONE"))) {
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

    /**
     * Set acl
     *
     * @param integer $acl
     *
     * @return $this
     */
    public function setAcl($acl)
    {
        $this->acl = $acl;
        return $this;
    }

    /**
     * Get acl
     *
     * @return integer
     */
    public function getAcl()
    {
        return $this->acl;
    }

    /**
     * Set requiresSysadminRole
     * @param string $requiresSysadminRole
     * @return $this
     */
    public function setRequiresSysadminRole($requiresSysadminRole)
    {
        $this->requiresSysadminRole = $requiresSysadminRole;
        return $this;
    }

    /**
     * Get requiresSysadminRole
     * @return string
     */
    public function getRequiresSysadminRole()
    {
        return $this->requiresSysadminRole;
    }
}
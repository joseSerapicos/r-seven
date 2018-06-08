<?php

namespace Bck\AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\VatCodeRepository")
 * @ORM\Table(name="vatCode")
 */
class VatCode extends BaseEntity
{
    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="percentage", type="decimal", scale=2, nullable=false, unique=false, options={"comment":"Percentage"})
     */
    protected $percentage;

    /**
     * Set name
     *
     * @param string $name
     *
     * @return VatCode
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return VatCode
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set percentage
     *
     * @param string $percentage
     *
     * @return VatCode
     */
    public function setPercentage($percentage)
    {
        $this->percentage = $percentage;

        return $this;
    }

    /**
     * Get percentage
     *
     * @return string
     */
    public function getPercentage()
    {
        return $this->percentage;
    }
}

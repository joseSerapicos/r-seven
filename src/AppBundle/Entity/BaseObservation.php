<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseObservationRepository")
 */
class BaseObservation extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name/title of observation"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=526, nullable=true, unique=false, options={"comment":"Observation description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="type", type="string", length=16, nullable=true, unique=false, options={"comment":"Type of observation"})
     */
    protected $type; // [DEFAULT, INFO, WARNING, DANGER]

    /**
     * @ORM\Column(name="priority", type="smallint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Priority for menu. Determines the order in the menus list"})
     *
     * To order objects
     */
    protected $priority;

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
     * Set description
     * @param string $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     * Get description
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set type
     * @param string $type
     * @return $this
     */
    public function setType($type)
    {
        if (!in_array($type, array("DEFAULT", "INFO", "WARNING", "DANGER"))) {
            throw new \InvalidArgumentException("Invalid observation ype");
        }

        $this->type = $type;
        return $this;
    }

    /**
     * Get type
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set priority
     * @param integer $priority
     * @return $this
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;
        return $this;
    }

    /**
     * Get priority
     * @return integer
     */
    public function getPriority()
    {
        return $this->priority;
    }
}

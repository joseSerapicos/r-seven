<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\NoteRepository")
 */
class BaseNote extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name/title of note"})
     */
    protected $name;

    /**
     * @ORM\Column(name="description", type="string", length=526, nullable=true, unique=false, options={"comment":"Note description"})
     */
    protected $description;

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
}

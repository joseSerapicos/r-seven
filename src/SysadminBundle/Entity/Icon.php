<?php
// src/SysadminBundle/Entity/Icon.php

namespace SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="SysadminBundle\Entity\IconRepository")
 * @ORM\Table(name="wo_app.app_icon")
 */
class Icon extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=26, nullable=false, unique=true, options={"comment":"Name"})
     *
     * @Assert\NotBlank()
     */
    protected $name;

    /**
     * @ORM\Column(name="icon", type="string", length=26, nullable=false, unique=true, options={"comment":"Icon"})
     *
     * @Assert\NotBlank()
     */
    protected $icon;

    /**
     * @ORM\Column(name="forService", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if the icon is allowed in services"})
     */
    protected $forService;

    /**
     * @ORM\Column(name="forLink", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines if the icon is allowed in links"})
     */
    protected $forLink;

    /**
     * Set name
     * @param string $name
     * @return Icon
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
     * Set icon
     * @param string $icon
     * @return Icon
     */
    public function setIcon($icon)
    {
        $this->icon = $icon;
        return $this;
    }

    /**
     * Get icon
     * @return string
     */
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * Set forService
     * @param boolean $forService
     * @return $this
     */
    public function setForService($forService)
    {
        $this->forService = $forService;
        return $this;
    }

    /**
     * Get forService
     * @return boolean
     */
    public function getForService()
    {
        return $this->forService;
    }

    /**
     * Set forLink
     * @param boolean $forLink
     * @return $this
     */
    public function setForLink($forLink)
    {
        $this->forLink = $forLink;
        return $this;
    }

    /**
     * Get forLink
     * @return boolean
     */
    public function getForLink()
    {
        return $this->forLink;
    }

    /**
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        return ('<i class="fa ' . $this->getIcon() . '"></i> (' . $this->getName() . ')');
    }
}
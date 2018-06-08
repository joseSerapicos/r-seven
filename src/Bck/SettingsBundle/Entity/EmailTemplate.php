<?php
// src/BckSettingsBundle/Entity/Store.php

namespace Bck\SettingsBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\SettingsBundle\Entity\EmailTemplateRepository")
 * @ORM\Table(name="emailTemplate")
 */
class EmailTemplate extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=32, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="subject", type="string", length=96, nullable=false, unique=false, options={"comment":"Subject"})
     */
    protected $subject;

    /**
     * @ORM\Column(name="text", type="string", length=512, nullable=false, unique=false, options={"comment":"Text of email"})
     */
    protected $text;


    /**
     * Get name
     * @return String
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set name
     * @param string $name
     * @return object
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get subject
     * @return String
     */
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * Set subject
     * @param string $subject
     * @return object
     */
    public function setSubject($subject)
    {
        $this->subject = $subject;
        return $this;
    }

    /**
     * Get text
     * @return String
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set text
     * @param string $text
     * @return object
     */
    public function setText($text)
    {
        $this->text = $text;
        return $this;
    }
}
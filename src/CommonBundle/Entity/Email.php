<?php
// src/CommonBundle/Entity/Store.php

namespace CommonBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="CommonBundle\Entity\EmailRepository")
 * @ORM\Table(name="email")
 */
class Email extends BaseEntity {
    /**
     * @ORM\Column(name="context", type="string", length=16, nullable=true, unique=false, options={"comment":"Context of email"})
     */
    protected $context; // [NEW_BOOKING, BOOKING, DOCUMENTS (only for clients)]

    /**
     * @ORM\Column(name="contextId", type="integer", nullable=true, unique=false, options={"unsigned":true, "comment":"Context object id"})
     */
    protected $contextId;

    /**
     * @ORM\Column(name="from", type="string", length=64, nullable=false, unique=false, options={"comment":"From"})
     */
    protected $from;

    /**
     * @ORM\Column(name="to", type="string", length=112, nullable=false, unique=false, options={"comment":"To"})
     */
    protected $to;

    /**
     * @ORM\Column(name="cc", type="string", length=112, nullable=true, unique=false, options={"comment":"Carbon Copy"})
     */
    protected $cc;

    /**
     * @ORM\Column(name="bcc", type="string", length=112, nullable=true, unique=false, options={"comment":"Blind Carbon Copy"})
     */
    protected $bcc;

    /**
     * @ORM\Column(name="subject", type="string", length=96, nullable=false, unique=false, options={"comment":"Subject"})
     */
    protected $subject;

    /**
     * @ORM\Column(name="text", type="string", length=512, nullable=false, unique=false, options={"comment":"Text of email"})
     */
    protected $text;


    /**
     * Get context
     * @return String
     */
    public function getContext()
    {
        return $this->context;
    }

    /**
     * Set context
     * @param string $context
     * @return object
     */
    public function setContext($context)
    {
        $this->context = $context;
        return $this;
    }

    /**
     * Get contextId
     * @return String
     */
    public function getContextId()
    {
        return $this->contextId;
    }

    /**
     * Set contextId
     * @param string $contextId
     * @return object
     */
    public function setContextId($contextId)
    {
        $this->contextId = $contextId;
        return $this;
    }

    /**
     * Get from
     * @return String
     */
    public function getFrom()
    {
        return $this->from;
    }

    /**
     * Set from
     * @param string $from
     * @return object
     */
    public function setFrom($from)
    {
        $this->from = $from;
        return $this;
    }

    /**
     * Get to
     * @return String
     */
    public function getTo()
    {
        return $this->to;
    }

    /**
     * Set to
     * @param string $to
     * @return object
     */
    public function setTo($to)
    {
        $this->to = $to;
        return $this;
    }

    /**
     * Get cc
     * @return String
     */
    public function getCc()
    {
        return $this->cc;
    }

    /**
     * Set cc
     * @param string $cc
     * @return object
     */
    public function setCc($cc)
    {
        $this->cc = $cc;
        return $this;
    }

    /**
     * Get bcc
     * @return String
     */
    public function getBcc()
    {
        return $this->bcc;
    }

    /**
     * Set bcc
     * @param string $bcc
     * @return object
     */
    public function setBcc($bcc)
    {
        $this->bcc = $bcc;
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
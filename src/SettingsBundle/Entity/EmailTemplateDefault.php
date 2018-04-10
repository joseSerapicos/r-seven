<?php
namespace SettingsBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="SettingsBundle\Entity\EmailTemplateDefaultRepository")
 * @ORM\Table(name="emailTemplateDefault")
 */
class EmailTemplateDefault extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="EmailTemplate")
     * @ORM\JoinColumn(name="fk_emailTemplate", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $emailTemplateObj;

    /**
     * @ORM\Column(name="context", type="string", length=16, nullable=false, unique=true, options={"comment":"Context to apply template"})
     */
    protected $context; // [NEW_BOOKING, BOOKING, DOCUMENTS (only for clients)]


    /**
     * Set emailTemplateObj
     * @param \SettingsBundle\Entity\EmailTemplate $emailTemplateObj
     * @return object
     */
    public function setEmailTemplateObj(\SettingsBundle\Entity\EmailTemplate $emailTemplateObj)
    {
        $this->emailTemplateObj = $emailTemplateObj;
        return $this;
    }

    /**
     * Get emailTemplateObj
     * @return \SettingsBundle\Entity\EmailTemplate
     */
    public function getEmailTemplateObj()
    {
        return $this->emailTemplateObj;
    }

    /**
     * Set context
     *
     * @param string $context
     *
     * @return $this
     */
    public function setContext($context)
    {
        if (!empty($context) && !in_array($context, array("NEW_BOOKING", "BOOKING", "DOCUMENTS"))) {
            throw new \InvalidArgumentException("Invalid context");
        }
        $this->context = $context;

        return $this;
    }

    /**
     * Get context
     *
     * @return string
     */
    public function getContext()
    {
        return $this->context;
    }
}

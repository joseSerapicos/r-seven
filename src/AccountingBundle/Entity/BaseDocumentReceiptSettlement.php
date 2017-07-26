<?php

namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\BaseEntity;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseDocumentReceiptSettlementRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseDocumentReceiptSettlement extends BaseEntity
{
    /**
     * @ORM\Column(name="value", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Value"})
     * By default inherit from "BookingServicePrice" (if applicable).
     */
    protected $value;


    /**
     * Set value
     * @param string $value
     * @return $this
     */
    public function setValue($value)
    {
        $this->value = $value;
        return $this;
    }

    /**
     * Get value
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }
}
<?php
// src/BckSysadminBundle/Entity/PaymentMethodDetail.php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\PaymentMethodDetailRepository")
 * @ORM\Table(name="tt_app.app_paymentMethodDetail",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="unq_paymentMethodDetail_name", columns={"field", "fkApp_paymentMethod"})})
 */
class PaymentMethodDetail extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="PaymentMethod")
     * @ORM\JoinColumn(name="fkApp_paymentMethod", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $appPaymentMethodObj;

    /**
     * @ORM\Column(name="field", type="string", length=32, nullable=false, unique=false, options={"comment":"Field"})
     */
    protected $field;

    /**
     * @ORM\Column(name="type", type="string", length=8, nullable=false, unique=false, options={"comment":"Field type"})
     */
    protected $type; // [TEXT, ENUM]

    /**
     * @ORM\Column(name="options", type="string", length=64, nullable=true, unique=false, options={"comment":"Options for field type"})
     *
     * Should be a json array encoded in the format: {"id_1": "label_1", "id_n": "label_n"}
     */
    protected $options;

    /**
     * @ORM\Column(name="label", type="string", length=32, nullable=false, unique=false, options={"comment":"Label for field"})
     */
    protected $label;

    /**
     * @ORM\Column(name="defaultValue", type="string", length=128, nullable=false, unique=false, options={"comment":"Default value for field"})
     */
    protected $defaultValue;


    /**
     * Set appPaymentMethodObj
     * @param integer $appPaymentMethodObj
     * @return PaymentMethodDetail
     */
    public function setAppPaymentMethodObj($appPaymentMethodObj)
    {
        $this->appPaymentMethodObj = $appPaymentMethodObj;
        return $this;
    }

    /**
     * Get appPaymentMethodObj
     * @return integer 
     */
    public function getAppPaymentMethodObj()
    {
        return $this->appPaymentMethodObj;
    }

    /**
     * Set field
     * @param string $field
     * @return PaymentMethodDetail
     */
    public function setField($field)
    {
        $this->field = $field;
        return $this;
    }

    /**
     * Get field
     * @return string 
     */
    public function getField()
    {
        return $this->field;
    }

    /**
     * Set type
     * @param string $type
     * @return $this
     */
    public function setType($type)
    {
        if (!in_array($type, array("TEXT", "ENUM"))) {
            throw new \InvalidArgumentException("Invalid field ype");
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
     * Set options
     *
     * @param string $options
     *
     * @return $this
     */
    public function setOptions($options)
    {
        // Encode array to string
        if (is_array($options)) {
            $options = json_encode($options);
        }

        $this->options = $options;

        return $this;
    }

    /**
     * Get options
     *
     * @return string
     */
    public function getOptions()
    {
        return $this->options;
    }

    /**
     * Get normalized options
     *
     * @return string
     */
    public function getNormalizedOptions()
    {
        // Decode string to array
        if ($this->options) {
            return json_decode($this->options, true);
        }

        return array();
    }

    /**
     * Set label
     * @param string $label
     * @return PaymentMethodDetail
     */
    public function setLabel($label)
    {
        $this->label = $label;
        return $this;
    }

    /**
     * Get label
     * @return string
     */
    public function getLabel()
    {
        return $this->label;
    }

    /**
     * Set defaultValue
     * @param string $defaultValue
     * @return PaymentMethodDetail
     */
    public function setDefaultValue($defaultValue)
    {
        $this->defaultValue = $defaultValue;
        return $this;
    }

    /**
     * Get value
     * @return string
     */
    public function getDefaultValue()
    {
        return $this->defaultValue;
    }
}
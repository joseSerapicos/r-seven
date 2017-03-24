<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseBonusRepository")
 */
class BaseBonus extends BaseEntity
{
    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="rule", type="string", length=16, nullable=false, unique=false, options={"comment":"Rule"})
     */
    protected $rule; // [PAX, DAYS]

    /**
     * @ORM\Column(name="ruleExpr", type="string", length=16, nullable=false, unique=false, options={"comment":"Rule expression"})
     */
    protected $ruleExpr; // [<, >, =]

    /**
     * @ORM\Column(name="ruleValue", type="smallint", nullable=false, unique=false, options={"unsigned":true, "comment":"Rule value"})
     */
    protected $ruleValue; // [<, >, =]

    /**
     * @ORM\Column(name="bonusType", type="string", length=16, nullable=false, unique=false, options={"comment":"Type of bonus"})
     */
    protected $bonusType; // [PERCENTAGE, FIXED]

    /**
     * @ORM\Column(name="bonusValue", type="decimal", scale=2, nullable=false, unique=false, options={"comment":"Value of bonus"})
     */
    protected $bonusValue;

    /**
     * @ORM\Column(name="paxToApplyType", type="string", length=16, nullable=false, unique=false, options={"comment":"Type of pax to apply"})
     */
    protected $paxToApplyType; // [ALL, FIXED, AFTER (after pax "x")]

    /**
     * @ORM\Column(name="paxToApplyValue", type="smallint", nullable=true, unique=false, options={"unsigned":true, "comment":"Value for type of pax to apply"})
     */
    protected $paxToApplyValue;

    /**
     * @ORM\Column(name="daysToApplyType", type="string", length=16, nullable=false, unique=false, options={"comment":"Type of days to apply"})
     */
    protected $daysToApplyType; // [ALL, FIXED, AFTER (after day "x")]

    /**
     * @ORM\Column(name="daysToApplyValue", type="smallint", nullable=true, unique=false, options={"unsigned":true, "comment":"Value for type of days to apply"})
     */
    protected $daysToApplyValue;

    /**
     * @ORM\Column(name="startDate", type="date", nullable=false, unique=false, options={"comment":"Start date of validation"})
     */
    protected $startDate;

    /**
     * @ORM\Column(name="endDate", type="date", nullable=false, unique=false, options={"comment":"End date of validation"})
     */
    protected $endDate;


    /**
     * Set description
     *
     * @param string $description
     *
     * @return $this
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
     * Set rule
     *
     * @param string $rule
     *
     * @return $this
     */
    public function setRule($rule)
    {
        $this->rule = $rule;

        return $this;
    }

    /**
     * Get rule
     *
     * @return string
     */
    public function getRule()
    {
        return $this->rule;
    }

    /**
     * Set ruleExpr
     *
     * @param string $ruleExpr
     *
     * @return $this
     */
    public function setRuleExpr($ruleExpr)
    {
        $this->ruleExpr = $ruleExpr;

        return $this;
    }

    /**
     * Get ruleExpr
     *
     * @return string
     */
    public function getRuleExpr()
    {
        return $this->ruleExpr;
    }

    /**
     * Set ruleValue
     *
     * @param string $ruleValue
     *
     * @return $this
     */
    public function setRuleValue($ruleValue)
    {
        $this->ruleValue = $ruleValue;

        return $this;
    }

    /**
     * Get ruleValue
     *
     * @return string
     */
    public function getRuleValue()
    {
        return $this->ruleValue;
    }

    /**
     * Set bonusType
     *
     * @param string $bonusType
     *
     * @return $this
     */
    public function setBonusType($bonusType)
    {
        $this->bonusType = $bonusType;

        return $this;
    }

    /**
     * Get bonusType
     *
     * @return string
     */
    public function getBonusType()
    {
        return $this->bonusType;
    }

    /**
     * Set bonusValue
     *
     * @param string $bonusValue
     *
     * @return $this
     */
    public function setBonusValue($bonusValue)
    {
        $this->bonusValue = $bonusValue;

        return $this;
    }

    /**
     * Get bonusValue
     *
     * @return string
     */
    public function getBonusValue()
    {
        return $this->bonusValue;
    }

    /**
     * Set paxToApplyType
     *
     * @param string $paxToApplyType
     *
     * @return $this
     */
    public function setPaxToApplyType($paxToApplyType)
    {
        $this->paxToApplyType = $paxToApplyType;

        return $this;
    }

    /**
     * Get paxToApplyType
     *
     * @return string
     */
    public function getPaxToApplyType()
    {
        return $this->paxToApplyType;
    }

    /**
     * Set paxToApplyValue
     *
     * @param integer $paxToApplyValue
     *
     * @return $this
     */
    public function setPaxToApplyValue($paxToApplyValue)
    {
        $this->paxToApplyValue = $paxToApplyValue;

        return $this;
    }

    /**
     * Get paxToApplyValue
     *
     * @return integer
     */
    public function getPaxToApplyValue()
    {
        return $this->paxToApplyValue;
    }

    /**
     * Set daysToApplyType
     *
     * @param string $daysToApplyType
     *
     * @return $this
     */
    public function setDaysToApplyType($daysToApplyType)
    {
        $this->daysToApplyType = $daysToApplyType;

        return $this;
    }

    /**
     * Get daysToApplyType
     *
     * @return string
     */
    public function getDaysToApplyType()
    {
        return $this->daysToApplyType;
    }

    /**
     * Set daysToApplyValue
     *
     * @param integer $daysToApplyValue
     *
     * @return $this
     */
    public function setDaysToApplyValue($daysToApplyValue)
    {
        $this->daysToApplyValue = $daysToApplyValue;

        return $this;
    }

    /**
     * Get daysToApplyValue
     *
     * @return integer
     */
    public function getDaysToApplyValue()
    {
        return $this->daysToApplyValue;
    }

    /**
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return $this
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Set endDate
     *
     * @param \DateTime $endDate
     *
     * @return $this
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * Get endDate
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->endDate;
    }
}

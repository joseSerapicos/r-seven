<?php
// src/Frt/CommonBundle/Entity/FrtHashResource.php

namespace Frt\CommonBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Frt\CommonBundle\Entity\FrtHashResourceRepository")
 * @ORM\Table(name="frtHashResource")
 */
class FrtHashResource extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\EntitiesBundle\Entity\Client")
     * @ORM\JoinColumn(name="fk_client", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     *
     * NOTE: If the client is defined, so the session is created with the client as user,
     * otherwise the session is created without user information, and this information needs to be set later,
     * when the user is identified.
     */
    protected $clientObj;

    /**
     * @ORM\Column(name="actionId", type="string", length=64, nullable=false, unique=false, options={"comment":"Action identifier"})
     */
    protected $actionId;

    /**
     * @ORM\Column(name="actionParam", type="string", length=64, nullable=true, unique=false, options={"comment":"Action parameters"})
     *
     * This attribute should be a json encoded array
     */
    protected $actionParam;

    /**
     * @ORM\Column(name="hash", type="string", length=32, nullable=false, unique=true, options={"comment":"Hash to identify the route"})
     */
    protected $hash;


    /**
     * Set clientObj
     * @param \Bck\EntitiesBundle\Entity\Client
     * @return object
     */
    public function setClientObj(\Bck\EntitiesBundle\Entity\Client $clientObj)
    {
        $this->clientObj = $clientObj;
        return $this;
    }

    /**
     * Get clientObj
     * @return \Bck\EntitiesBundle\Entity\Client
     */
    public function getClientObj()
    {
        return $this->clientObj;
    }

    /**
     * Set actionId
     *
     * @param string $actionId
     *
     * @return $this
     */
    public function setActionId($actionId)
    {
        $this->actionId = $actionId;

        return $this;
    }

    /**
     * Get actionId
     *
     * @return string
     */
    public function getActionId()
    {
        return $this->actionId;
    }

    /**
     * Set actionParam
     *
     * @param string $actionParam
     *
     * @return $this
     */
    public function setActionParam($actionParam)
    {
        // Encode array to string
        if (is_array($actionParam)) {
            $actionParam = json_encode($actionParam);
        }

        $this->actionParam = $actionParam;

        return $this;
    }

    /**
     * Get actionParam
     *
     * @return string
     */
    public function getActionParam()
    {
        // Decode string to array
        if ($this->actionParam) {
            return json_decode($this->actionParam, true);
        }

        return array();
    }

    /**
     * Set hash
     *
     * @param string $hash
     *
     * @return $this
     */
    public function setHash($hash)
    {
        $this->hash = $hash;

        return $this;
    }

    /**
     * Get hash
     *
     * @return string
     */
    public function getHash()
    {
        return $this->hash;
    }
}
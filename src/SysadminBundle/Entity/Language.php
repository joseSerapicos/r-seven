<?php
// src/SysadminBundle/Entity/Language.php

namespace SysadminBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="SysadminBundle\Entity\LanguageRepository")
 * @ORM\Table(name="wo_app.app_language")
 */
class Language extends BaseEntity {
    /**
     * @ORM\OneToOne(targetEntity="Language")
     * @ORM\JoinColumn(name="fkApp_language", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $appLanguageObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Country name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="iso_639_1", type="string", length=2, nullable=false, unique=true, options={"comment":"ISO 639-1 code"})
     */
    protected $iso_639_1;


    /**
     * Set appLanguageObj
     * @param Object $appLanguageObj
     * @return Language
     */
    public function setAppLanguageObj($appLanguageObj)
    {
        $this->appLanguageObj = $appLanguageObj;
        return $this;
    }

    /**
     * Get appLanguageObj
     * @return Object
     */
    public function getAppLanguageObj()
    {
        return $this->appLanguageObj;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Language
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set iso_639_1
     *
     * @param string $iso6391
     * @return Language
     */
    public function setIso6391($iso6391)
    {
        $this->iso_639_1 = $iso6391;

        return $this;
    }

    /**
     * Get iso_639_1
     *
     * @return string 
     */
    public function getIso6391()
    {
        return $this->iso_639_1;
    }
}

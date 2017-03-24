<?php
// src/AppBundle/Entity/BaseClass

namespace AppBundle\Entity;

/**
 * Class BaseClass (base for class)
 * @package AppBundle\Entity
 */
abstract class BaseClass {
    /**
     * Set attribute
     * @param $attr
     * @param $value
     * @return $this
     */
    public function setAttr($attr, $value) {
        if(property_exists($this, $attr)) {
            $this->$attr = $value;
        }
        return($this);
    }

    /**
     * Get attribute
     * @param $attr
     * @return bool
     */
    public function getAttr($attr) {
        if(property_exists($this, $attr)) {
            return $this->$attr;
        }
        return(false);
    }
}
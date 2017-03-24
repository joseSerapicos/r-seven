<?php
namespace EntitiesBundle\Form;

use AppBundle\Form\BaseType;

class EntityType extends BaseType
{
    /**
     * Initialization of variables.
     * @return mixed
     */
    protected function init()
    {
        // Initialize only once
        if(!empty($this->entityClass)) {
            return $this;
        }

        $this->entityClass = 'EntitiesBundle\Entity\Entity';
        $this->entityRepositoryClass = 'EntitiesBundle\Entity\EntityRepository';

        return $this;
    }
}
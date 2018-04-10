<?php
namespace EntitiesBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class EntityThumbnailType
 * Configure form to render only the token in the view
 * @package BookingBundle\Form
 */
class EntityThumbnailType extends BaseType
{
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'EntitiesBundle\Entity\Entity';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
<?php
namespace Bck\ServicesBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class ServiceImageThumbnailType
 * Configure form to render only the token in the view
 * @package BckBookingBundle\Form
 */
class ServiceImageThumbnailType extends BaseType
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

        $this->conf['entityClass'] = 'Bck\ServicesBundle\Entity\ServiceImage';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
<?php
namespace AdminBundle\Form;

use AppBundle\Form\BaseType;

/**
 * Class StoreLogoImageThumbnailType
 * Configure form to render only the token in the view
 * @package BookingBundle\Form
 */
class StoreLogoImageThumbnailType extends BaseType
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

        $this->conf['entityClass'] = 'AdminBundle\Entity\StoreLogoImage';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';
        $this->conf['hasNgForm'] = false;
        $this->conf['hasFields'] = false;

        return $this;
    }
}
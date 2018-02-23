<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;
use AppBundle\Service\HelperService;

/**
 * BasicBookingRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BasicBookingRepository extends BaseEntityRepository
{
    static protected $metadata = null;

    /**
     * Get field metadata
     * @param $field
     * @param $attribute
     * @param $metadata (uses this metadata instead of local metadata)
     * @param $context ('view'|'form'|'none')
     * @return null
     */
    static public function getFieldMetadata($field, $attribute, $metadata = null, $context = 'none')
    {
        if (!$metadata) {
            $metadata = self::getMetadata();
        }
        return self::getLocalFieldMetadata($field, $attribute, $metadata, $context);
    }

    /**
     * Get local metadata (it needs to be implemented by children to get static variable with local metadata from parent)
     * @return mixed
     */
    protected function getLocalMetadata()
    {
        return $this->getMetadata();
    }

    /**
     * Get entity metadata
     * @return mixed
     */
    static function getMetadata()
    {
        // Process metadata only once
        if (self::$metadata) { return self::$metadata; }

        return self::$metadata = self::processMetadata(array(
            'id' => array('label' => 'Id', 'type' => 'none', 'acl' => 'read'),
            'bookingObj' => array('label' => '', 'type' => 'object', 'acl' => 'read',
                'typeDetail' => array(
                    'table' => 'booking', 'field' => 'id', 'bundle' => 'booking', 'type' => 'none',
                    'metadata' => array('method' => 'merge', 'persist' => true, 'pushAfterField' => 'id')
                ),
                'form' => array('type' => 'embed')
            ),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true)
        ));
    }
}
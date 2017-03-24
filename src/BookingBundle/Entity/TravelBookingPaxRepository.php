<?php

namespace BookingBundle\Entity;

use AppBundle\Service\HelperService;

/**
 * TravelBookingPaxRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class TravelBookingPaxRepository extends BaseBookingPaxRepository
{
    /**
     * Get entity metadata
     * @return mixed
     */
    static function getMetadata()
    {
        // Process metadata only once
        if (self::$metadata) {
            return self::$metadata;
        }

        $parentMetadata = parent::getMetadata();

        $localMetadata = self::processMetadata(array(
            'travelBookingObj' => array('label' => 'Travel Booking', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'travelBooking', 'bundle' => 'booking', 'type' => 'none')),
        ));

        return self::$metadata = HelperService::pushIntoArray($parentMetadata, $localMetadata, 'id');
    }
}
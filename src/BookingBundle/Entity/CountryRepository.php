<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * CountryRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CountryRepository extends BaseEntityRepository
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
        if (self::$metadata) {
            return self::$metadata;
        }
        return self::$metadata = self::processMetadata(array(
            'id' => array('label' => 'Id', 'type' => 'none', 'acl' => 'read'),
            'appIconObj' => array('label' => 'Icon', 'type' => 'object', 'acl' => 'edit', 'typeDetail' => array(
                'table' => 'app_icon', 'fieldInView' => 'icon', 'bundle' => 'sysadmin', 'type' => 'none',
                'choices' => array('query' => 'getChoicesForService')), 'isRequired' => false,
                'form' => array('type' => 'html-select')
            ),
            'icon' => array('table' => 'app_icon', 'field' => 'icon', 'label' => 'Flag', 'type' => 'icon',
                'acl' => 'read', 'dependency' => 'appIconObj', 'form' => array('type' => 'none')),
            'name' => array('label' => 'Name', 'type' => 'text', 'acl' => 'edit'),
            'isoAlpha2Code' => array('label' => 'ISO Alpha-2 Code', 'type' => 'text', 'acl' => 'edit'),
            'isoAlpha3Code' => array('label' => 'ISO Alpha-3 Code', 'type' => 'text', 'acl' => 'edit'),
            'isoNumericCode' => array('label' => 'ISO Numeric Code', 'type' => 'number', 'acl' => 'edit'),
            'capital' => array('label' => 'Capital', 'type' => 'text', 'acl' => 'edit'),
            'continent' => array('label' => 'Continent', 'type' => 'text', 'acl' => 'edit'),
            'languages' => array('label' => 'Languages', 'type' => 'text', 'acl' => 'edit'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'none', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'none', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'none', 'acl' => 'read', 'default' => true)
        ));
    }
}
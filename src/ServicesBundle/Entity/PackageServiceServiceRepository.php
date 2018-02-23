<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * PackageServiceServiceRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PackageServiceServiceRepository extends BaseEntityRepository
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
            'id' => array('label' => 'Id', 'type' => 'number', 'acl' => 'read'),
            'packageServiceObj' => array('label' => 'nd', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'packageService', 'bundle' => 'services', 'type' => 'none')),
            'serviceObj' => array('label' => 'Service', 'type' => 'object', 'acl' => 'edit',
                'typeDetail' => array(
                    'table' => 'service', 'bundle' => 'services', 'type' => 'none', 'fieldInView' => 'name',
                    'choices' => array('query' => 'getChoicesForServicePackageService')),
                'form' => array('type' => 'html-select')
            ),
            'vatCodeObj' => array('table' => 'service', 'label' => 'nd', 'type' => 'object', 'acl' => 'read', 'dependency' => 'serviceObj',
                'typeDetail' => array('table' => 'vatCode', 'bundle' => 'accounting', 'type' => 'none')
            ),
            'vatCode_percentage' => array('table' => 'vatCode', 'field' => 'percentage', 'label' => '', 'type' => 'percentage',
                'acl' => 'read', 'dependency' => 'vatCodeObj', 'form' => array('type' => 'none')),
            'vatCode_name' => array('table' => 'vatCode', 'field' => 'name', 'label' => 'VAT Code', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'vatCodeObj', 'form' => array('type' => 'none')),
            'appIconObj' => array('table' => 'service', 'label' => 'nd',
                'type' => 'object', 'acl' => 'read', 'dependency' => 'serviceObj', 'typeDetail' => array(
                    'table' => 'app_icon', 'bundle' => 'sysadmin', 'type' => 'none')
            ),
            'icon' => array('table' => 'app_icon', 'label' => 'Icon', 'type' => 'icon',
                'acl' => 'read', 'dependency' => 'appIconObj'),
            'name' => array('table' => 'service', 'label' => 'Name', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'serviceObj'),
            'type' => array('table' => 'service', 'label' => '', 'type' => 'fake',
                'acl' => 'read', 'dependency' => 'serviceObj', 'form' => array('type' => 'none')),
            'description' => array('label' => 'Description', 'type' => 'text', 'acl' => 'edit'),
            'priority' => array('label' => 'Priority', 'type' => 'number', 'acl' => 'edit'),
            'durationStartDay' => array('label' => 'Start Day', 'type' => 'number', 'acl' => 'edit'),
            'durationDays' => array('label' => 'Duration', 'type' => 'number', 'acl' => 'edit'),
            'isOptional' => array('label' => 'Is Optional', 'type' => 'boolean', 'acl' => 'edit', 'default' => false),
            'availability' => array('label' => 'Availability', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'None' => 'NONE', 'Package' => 'PACKAGE', 'Service' => 'SERVICE'
                        )
                    )),
                'form' => array('type' => 'radio')
            ),
            'price' => array('label' => 'Price', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'None' => 'NONE', 'Package' => 'PACKAGE', 'Service' => 'SERVICE'
                        )
                    )),
                'form' => array('type' => 'radio')
            ),
            'allot' => array('label' => 'Allot', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'None' => 'NONE', 'Package' => 'PACKAGE', 'Service' => 'SERVICE'
                        )
                    )),
                'form' => array('type' => 'radio')
            ),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true)
        ));
    }
}
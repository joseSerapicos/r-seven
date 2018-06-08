<?php

namespace Bck\SysadminBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * ModuleRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ModuleRepository extends BaseEntityRepository
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
            'id' => array('label' => 'Id', 'type' => 'number', 'acl' => 'read'),
            'appModuleObj' => array('label' => 'Parent Module', 'type' => 'object', 'acl' => 'edit', 'typeDetail' =>
                array(
                    'table' => 'app_module', 'tableAlias' => 'parentAppModule', 'bundlePrefix' => 'bck', 'bundle' => 'sysadmin', 'type' => 'none', 'isRequired' => false,
                    'choices' => array(
                        'autoRefresh' => true, 'hasSelfReference' => true
                    )
                ),
                'isRequired' => false,
                'form' => array('type' => 'tree-view')
            ),
            'appModule_name' => array('table' => 'parentAppModule', 'field' => 'name', 'label' => 'Parent Module', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'appModuleObj', 'form' => array('type' => 'none')),
            'appIconObj' => array('label' => 'Icon', 'type' => 'object', 'acl' => 'edit', 'typeDetail' => array(
                'table' => 'app_icon', 'fieldInView' => 'icon_name', 'bundlePrefix' => 'bck', 'bundle' => 'sysadmin', 'type' => 'none'),
                'isRequired' => false, 'form' => array('type' => 'auto-complete')
            ),
            'icon' => array('table' => 'app_icon', 'field' => 'icon', 'label' => 'Icon', 'type' => 'icon',
                'acl' => 'read', 'dependency' => 'appIconObj', 'form' => array('type' => 'none')),
            'icon_name' => array('table' => 'app_icon', 'field' => 'name', 'label' => 'Icon Name', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'appIconObj', 'form' => array('type' => 'none')),
            'name' => array('label' => 'Name', 'type' => 'text', 'acl' => 'edit'),
            'description' => array('label' => 'Description', 'type' => 'text', 'acl' => 'edit'),
            'priority' => array('label' => 'Priority', 'type' => 'number', 'acl' => 'edit'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read', 'form' => array('type' => 'none')),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read', 'form' => array('type' => 'none')),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true,
                'view' => array('keepOriginalNormalizer' => true)
            )
        ));
    }
}
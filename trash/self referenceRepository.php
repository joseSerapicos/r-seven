<?php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;

/**
 * StoreRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class StoreRepositddddory extends BaseEntityRepository
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
            'name' => array('label' => 'Name', 'type' => 'text', 'acl' => 'edit'),
            'storeObj' => array('label' => 'Inherit from', 'type' => 'object', 'acl' => 'edit', 'isRequired' => false,
                'typeDetail' => array(
                    'bundle' => 'admin', 'table' => 'store', 'field' => 'name', 'type' => 'text',
                    'choices' => array(
                        'autoRefresh' => true, 'selfReference' => true
                    )
                ),
                'form' => array('type' => 'select')
            ),
            'formalName' => array('label' => 'Formal Name', 'type' => 'text', 'acl' => 'edit'),
            'taxNumber' => array('label' => 'Tax Number', 'type' => 'text', 'acl' => 'edit'),
            'storeAddressObj' => array('label' => 'Address', 'type' => 'object', 'acl' => 'read',
                'typeDetail' => array(
                    'table' => 'storeAddress', 'field' => 'id', 'bundle' => 'admin', 'type' => 'none',
                    'metadata' => array('method' => 'merge', 'pushAfterField' => 'id')
                ),
                'form' => array('type' => 'embed')
            ),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true)
        ));
    }

    /**
     * Get all objects joined with UserGroupAclUser
     * @param $options (array with queryBuilder options format)
     * @param $isAdmin
     * @param $loggedUserId
     * @return mixed
     */
    public function getAllJoinWithUserGroupAclUser($options, $isAdmin, $loggedUserId)
    {
        $qb = $this->queryBuilder($options, false);

        // Retrieve only menus that logged user has access.
        // Admin has access to all modules and menus.
        if (!$isAdmin)
        {
            // Get groups of logged user
            $qb->innerJoin('AdminBundle\Entity\UserGroupAclUser',
                'userGroupAclUser_loggedUser',
                'WITH',
                ('userGroupAclUser_loggedUser.userObj = ' . $loggedUserId)
            );
            // Filter stores by groups of logged user
            $qb->innerJoin('AdminBundle\Entity\UserGroupAcl',
                'userGroupAcl_loggedUser',
                'WITH',
                ('userGroupAcl_loggedUser.id = userGroupAclUser_loggedUser.userGroupAclObj AND userGroupAcl_loggedUser.isEnabled = 1 AND userGroupAcl_loggedUser.storeObj = store.id')
            );
            // Avoid repeated entries caused by joins
            $qb->distinct('id');
        }

        return $this->executeQueryBuilder($qb);
    }
}
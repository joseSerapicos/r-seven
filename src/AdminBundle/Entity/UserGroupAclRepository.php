<?php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;
use AdminBundle\Entity\UserGroupAclUser;

/**
 * UserGroupAclRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class UserGroupAclRepository extends BaseEntityRepository
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
            'storeObj' => array('label' => 'Store', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'store', 'bundle' => 'admin', 'field' => 'id', 'type' => 'none')),
            'name' => array('label' => 'Name', 'type' => 'text', 'acl' => 'edit'),
            'insertTime' => array('label' => 'Insert Time', 'type' => 'datetime', 'acl' => 'read'),
            'insertUser' => array('label' => 'Insert User', 'type' => 'text', 'acl' => 'read'),
            'isEnabled' => array('label' => 'Enabled', 'type' => 'boolean', 'acl' => 'edit', 'default' => true,
                'view' => array('keepOriginalNormalizer' => true)
            ),
        ));
    }

    /**
     * Get all objects with the possibility to include the related user if it is given
     * @param null $search
     * @param null $user_id
     * @return mixed
     */
    public function getAllJoinWithUser($search = null, $user_id = null)
    {
        $joinTable = 'userGroupAclUser';
        $fieldPrefix = ($user_id ? $joinTable.'.' : '');

        $options = array(
            'fields' => array('id', 'name', $fieldPrefix.'insertTime', $fieldPrefix.'insertUser'),
            'criteria' => empty($search['criteria'])
                ? array(array('field' => 'isEnabled', 'expr' => 'eq', 'value' => 1))
                : $search['criteria'],
            'orderBy' => empty($search['orderBy'])
                ? array(array('field' => 'name', 'value' => 'ASC'))
                : $search['orderBy']
        );

        $qb = $this->queryBuilder($options, empty($user_id));

        // No user to join
        if (empty($user_id)) {
            return($qb);
        }

        // Join with user
        $qb->addSelect($fieldPrefix.'id AS isChecked');
        $qb->leftJoin('AdminBundle\Entity\UserGroupAclUser',
            $joinTable,
            'WITH',
            ($fieldPrefix.'UserObj = '.$user_id.' AND '.$fieldPrefix.'userGroupAclObj = UserGroupAcl.id')
        );

        return $this->executeQueryBuilder($qb);
    }

    /**
     * Get all objects joined with UserGroupAclUser
     * @param $options (array with queryBuilder options format)
     * @param $loggedUserId
     * @param $loggedUserRole
     * @return mixed
     */
    public function getAllJoinWithUserGroupAclUser($options, $loggedUserId, $loggedUserRole)
    {
        $qb = $this->queryBuilder($options, false);

        // Retrieve only groups that logged user has access
        if (!in_array($loggedUserRole, array('ROLE_SYSADMIN', 'ROLE_ADMIN')))
        {
            // Get groups of logged user
            $qb->innerJoin('AdminBundle\Entity\UserGroupAclUser',
                'userGroupAclUser_loggedUser',
                'WITH',
                ('userGroupAclUser_loggedUser.userGroupAclObj = userGroupAcl.id AND userGroupAclUser_loggedUser.userObj = ' . $loggedUserId)
            );
        }

        return $this->executeQueryBuilder($qb);
    }
}
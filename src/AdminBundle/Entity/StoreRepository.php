<?php

namespace AdminBundle\Entity;

use AppBundle\Entity\BaseEntityRepository;
use AppBundle\Service\HelperService;

/**
 * StoreRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class StoreRepository extends BaseEntityRepository
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
            'fallbackStoreObj' => array('label' => 'Fallback Store', 'type' => 'object', 'acl' => 'edit', 'typeDetail' => array(
                'table' => 'store', 'bundle' => 'admin', 'type' => 'select'), 'isRequired' => false),
            'legalName' => array('label' => 'Legal Name', 'type' => 'text', 'acl' => 'edit'),
            'taxNumber' => array('label' => 'Tax Number', 'type' => 'text', 'acl' => 'edit'),
            'storeAddressObj' => array('label' => 'Address', 'type' => 'object', 'acl' => 'read',
                'typeDetail' => array(
                    'table' => 'storeAddress', 'field' => 'id', 'bundle' => 'admin', 'type' => 'none',
                    'metadata' => array('method' => 'merge', 'pushAfterField' => 'taxNumber')
                ),
                'form' => array('type' => 'embed')
            ),
            'color' => array('label' => 'Color', 'type' => 'none', 'acl' => 'edit', 'default' => '#000000',
                'form' => array('type' => 'color')),
            'privacy' => array('label' => 'Privacy', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Private' => 'PRIVATE', 'Shared' => 'SHARED'
                        )
                    )),
                'form' => array('type' => 'radio')
            ),
            'shareToType' => array('label' => 'Share With', 'type' => 'enum', 'acl' => 'edit', 'isRequired' => false,
                'typeDetail' => array(
                    'type' => 'none', 'choices' => array(
                        'value' => array(
                            'All' => 'ALL', 'Store' => 'STORE'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'shareEntities' => array('label' => 'Entities', 'type' => 'enum', 'acl' => 'edit', 'isRequired' => false,
                'typeDetail' => array(
                    'type' => 'none', 'choices' => array(
                        'value' => array(
                            'All' => 'ALL', 'Suppliers' => 'SUPPLIERS', 'Clients' => 'CLIENTS'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'shareCurrentAccounts' => array('label' => 'Current Accounts', 'type' => 'enum', 'acl' => 'edit', 'isRequired' => false,
                'typeDetail' => array(
                    'type' => 'none', 'choices' => array(
                        'value' => array(
                            'All' => 'ALL', 'Suppliers' => 'SUPPLIERS', 'Clients' => 'CLIENTS'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'storeObj' => array('label' => 'Store to Share', 'type' => 'object', 'acl' => 'edit', 'typeDetail' => array(
                'table' => 'store', 'bundle' => 'admin', 'type' => 'select'), 'isRequired' => false),
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
     * @param bool $hasExecute
     * @return mixed
     */
    public function getAllJoinWithUserGroupAclUser($options, $isAdmin, $loggedUserId, $hasExecute = true)
    {
        $qb = $this->queryBuilder($options, false);

        // Retrieve only stores that logged user has access.
        // Admin has access to all stores.
        if (!$isAdmin)
        {
            $qb->innerJoin('AdminBundle\Entity\UserGroupAcl', // Groups Acl of store
                'userGroupAcl',
                'WITH',
                ('userGroupAcl.isEnabled = 1 AND userGroupAcl.storeObj = store.id')
            );
            $qb->innerJoin('AdminBundle\Entity\UserGroupAclUser', // Groups Acl of logged user
                'userGroupAclUser',
                'WITH',
                ('userGroupAclUser.userGroupAclObj = userGroupAcl.id AND userGroupAclUser.userObj = ' . $loggedUserId)
            );

            // Avoid repeated entries caused by joins
            $qb->distinct('id');
        }

        // Execute and return result
        if($hasExecute) {
            return $this->executeQueryBuilder($qb);
        }

        return $qb;
    }

    /**
     * Get store acl (shared resources by another stores). Each resource has an array of 'id' with stores that allow
     * access, including the store itself (to use in "IN" sql clause).
     * @param $store
     * @return mixed
     */
    public function getStoreAcl($store)
    {
        $options = array(
            'fields' => array('id', 'shareEntities', 'shareCurrentAccounts'),
            'criteria' => array(
                array( // Enabled stores
                    'field' => 'isEnabled',
                    'expr' => 'eq',
                    'value' => true
                ),
                array( // Shares stores
                    'field' => 'privacy',
                    'expr' => 'eq',
                    'value' => 'SHARED'
                ),
                array( // Not itself store
                    'field' => 'id',
                    'expr' => 'neq',
                    'value' => $store
                )
            )
        );

        $qb = $this->queryBuilder($options, false);

        $qb->andWhere("(store.shareToType = 'ALL')" // Shared with all stores
            ." OR (store.shareToType = 'STORE' AND store.storeObj = ".$store.")" // Shared with specific store
        );

        $result = $this->executeQueryBuilder($qb);

        // store acl, give access to itself
        $acl = array(
            'shareEntities' => array(
                'all' => array($store),
                'clients' => array($store),
                'suppliers' => array($store)
            ),
            'shareCurrentAccounts' => array(
                'all' => array($store),
                'clients' => array($store),
                'suppliers' => array($store)
            )
        );

        if (is_array($result)) {
            foreach ($result as $sharedStore) {
                foreach ($sharedStore as $sharedResource => $value) {
                    switch ($sharedResource) {
                        case 'shareEntities':
                        case 'shareCurrentAccounts':
                            switch ($value) {
                                case 'ALL':
                                    $acl[$sharedResource]['all'][] = $sharedStore['id'];
                                    $acl[$sharedResource]['clients'][] = $sharedStore['id'];
                                    $acl[$sharedResource]['suppliers'][] = $sharedStore['id'];
                                    break;
                                case 'CLIENTS':
                                    $acl[$sharedResource]['clients'][] = $sharedStore['id'];
                                    break;
                                case 'SUPPLIERS':
                                    $acl[$sharedResource]['suppliers'][] = $sharedStore['id'];
                                    break;
                            }
                            break;
                    }
                }
            }
        }

        return $acl;
    }

    /**
     * Get choices. Get objects to use as choices, like select, radio, etc.
     * @param bool $hasExecute
     * @param string $executeMethod
     * @param $options (array with queryBuilder options format)
     * @return mixed
     */
    public function getChoices($hasExecute = true, $executeMethod = 'getResult', $options = array())
    {
        $isAdmin = HelperService::getGlobalVar('isAdmin');
        $loggedUserId = HelperService::getGlobalVar('loggedUserId');

        $options = array_merge(
            $options,
            array('criteria' => array(
                array(
                    'field' => 'isEnabled',
                    'expr' => 'eq',
                    'value' => true
                )
            ))
        );

        $qb = $this->getAllJoinWithUserGroupAclUser($options, $isAdmin, $loggedUserId, false);

        if ($hasExecute) {
            $result = $this->executeQueryBuilder($qb, $executeMethod);

            if (!is_array($result)) {
                $result = array($result);
            }

            return $result;
        }

        return $qb;
    }
}
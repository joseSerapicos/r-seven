<?php

namespace Bck\EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Bck\EntitiesBundle\Entity\EntityContactsRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EntityContactsController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Contacts'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'entity' => array('route' => '_bck__entities__entity__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'edit' => array(
                'name' => '_bck__entities__entity_email__edit',
            )
        );

        // Jump entity manager, because this entity is not mapped on database
        $this->localConf['entityFields'] = EntityContactsRepository::getMetadata();

        parent::init($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * Overrides parent function to jump entity manager, because this entity is not mapped on database
     * @param $field
     * @param $attribute
     * @param $context ('view'|'form'|'none')
     * @return mixed
     */
    protected function getFieldMetadata($field, $attribute, $context = 'none')
    {
        switch ($attribute) {
            case 'table':
                return '';
            default:
                return EntityContactsRepository::getFieldMetadata($field, $attribute, $this->localConf['entityFields'], $context);
        }
    }

    /**
     * @Route("/bck/entities/entity-contacts/edit/{entity}",
     *     name="_bck__entities__entity_contacts__edit"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $entity)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, array($entity));
        $this->localConf['templates']['edit'] = 'AppBundle:form:form.html.twig';

        return parent::editChildAction($request, array($entity), null);
    }

    /**
     * @Route("/bck/entities/entity-contacts/conf/{entity}",
     *     name="_bck__entities__entity_contacts__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $entity)
    {
        // Set configuration
        $this->init($request, array($entity));

        // Get all entity contacts info by entity
        // Default address
        $entityAddressObj = $this->getRepositoryService('EntityAddress', 'EntitiesBundle', 'Bck')
            ->execute(
                'getForDocumentsByEntity',
                array($entity)
            );

        // Default phone
        $entityPhoneObj = $this->getRepositoryService('EntityPhone', 'EntitiesBundle', 'Bck')
            ->execute(
                'findOneByEntityObj',
                array($entity)
            );

        // Default email
        $entityEmailObj = $this->getRepositoryService('EntityEmail', 'EntitiesBundle', 'Bck')
            ->execute(
                'getDefaultEmailByEntity',
                array($entity)
            );

        // Simulate a new object
        $newObj = $this->newObject();
        $newObj->setEntityAddressObj($entityAddressObj);
        $newObj->setEntityPhoneObj($entityPhoneObj);
        $newObj->setEntityEmailObj($entityEmailObj);

        // Set response
        $this->responseConf['object'] = $this->normalizeObject($newObj);
        $this->templateConf['localData']['data'] = array(
            'addressObj' => $entityAddressObj ? $this->normalizeForeignObject($entityAddressObj) : null,
            'phoneObj' => $entityPhoneObj ? $this->normalizeForeignObject($entityPhoneObj) : null,
            'emailObj' => $entityEmailObj ? $this->normalizeForeignObject($entityEmailObj) : null,
        );
        $this->responseConf['hasObject'] = true;
        $this->responseConf['hasConf'] = true;
        return $this->getResponse();
    }
}
<?php
namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EntitySettingController extends BaseEntityController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['handleStore'] = false; // Store is handled by user

        // Configured as sub-menu, a dependency into view.
        $this->templateConf['label'] = 'Entities Series';
        $this->templateConf['selectedMenu']['route'] = '_admin__settings__index';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_entities__entity_setting__get'
            ),
            'edit' => array(
                'name' => '_entities__entity_setting__edit',
            ),
            'delete' => array(
                'name' => '_entities__entity_setting__delete',
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        $this->templateConf['search']['orderBy'] = array(array('field' => 'storeObj', 'value' => 'desc'));
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add']
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-setting/get/{id}",
     *     name="_entities__entity_setting__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/entities/entity-setting/edit/{id}",
     *     name="_entities__entity_setting__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/entities/entity-setting/delete/{id}",
     *     name="_entities__entity_setting__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }
}
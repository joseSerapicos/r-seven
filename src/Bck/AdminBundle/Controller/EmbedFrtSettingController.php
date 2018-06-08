<?php
namespace Bck\AdminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EmbedFrtSettingController extends BaseEntityController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['handleStore'] = false; // Store is handled by user

        // Configured as sub-menu, a dependency into view.
        $this->templateConf['label'] = 'Embed Front-Office';
        $this->templateConf['selectedMenu']['route'] = '_bck__admin__settings__index';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__admin__embed_frt_setting__get'
            ),
            'edit' => array(
                'name' => '_bck__admin__embed_frt_setting__edit',
            ),
            'delete' => array(
                'name' => '_bck__admin__embed_frt_setting__delete',
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
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/admin/embed-frt-setting/get/{id}",
     *     name="_bck__admin__embed_frt_setting__get",
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
     * @Route("/bck/admin/embed-frt-setting/edit/{id}",
     *     name="_bck__admin__embed_frt_setting__edit",
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
     * @Route("/bck/admin/embed-frt-setting/delete/{id}",
     *     name="_bck__admin__embed_frt_setting__delete",
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

    /**
     * @Route("/bck/admin/embed-frt-setting/data",
     *     name="_bck__admin__embed_frt_setting__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataAction(Request $request, $responseType = 'http')
    {
        return parent::dataAction($request);
    }
}
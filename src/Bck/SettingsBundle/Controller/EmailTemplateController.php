<?php

namespace Bck\SettingsBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EmailTemplateController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__settings__email_template__get'
            ),
            'edit' => array(
                'name' => '_bck__settings__email_template__edit'
            ),
            'delete' => array(
                'name' => '_bck__settings__email_template__delete'
            )
        );

        parent::init($request);

        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'add' => $this->templateConf['acl']['add'],
                'delete' => $this->templateConf['acl']['delete'],
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
     * @Route("/bck/settings/email-template",
     *     name="_bck__settings__email_template__index"
     * )
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);
    }

    /**
     * @Route("/bck/settings/email-template/get/{id}",
     *     name="_bck__settings__email_template__get",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/bck/settings/email-template/edit/{id}",
     *     name="_bck__settings__email_template__edit",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        $this->init($request);
        $this->localConf['templates']['edit'] = 'BckSettingsBundle:EmailTemplate:edit.html.twig';
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/bck/settings/email-template/delete/{id}",
     *     name="_bck__settings__email_template__delete",
     *     defaults={"id" = null}
     * )
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }
}
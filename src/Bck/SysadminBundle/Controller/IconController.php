<?php

namespace Bck\SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class IconController extends BaseEntityController
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
                'name' => '_bck__sysadmin__icon__get'
            ),
            'edit' => array(
                'name' => '_bck__sysadmin__icon__edit'
            ),
            'delete' => array(
                'name' => '_bck__sysadmin__icon__delete'
            ),
            'choices' => array(
                'name' => '_bck__sysadmin__icon__choices'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/bck/sysadmin/icon",
     *     name="_bck__sysadmin__icon__index"
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
     * @Route("/bck/sysadmin/icon/get/{id}",
     *     name="_bck__sysadmin__icon__get",
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
     * @Route("/bck/sysadmin/icon/edit/{id}",
     *     name="_bck__sysadmin__icon__edit",
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
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/bck/sysadmin/icon/delete/{id}",
     *     name="_bck__sysadmin__icon__delete",
     *     defaults={"id" = null},
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

    /**
     * @Route("/bck/sysadmin/icon/conf/{id}",
     *     name="_bck__sysadmin__icon__conf",
     *     defaults={"id" = null}
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        return parent::confAction($request, $id);
    }

    /**
     * @Route("/bck/sysadmin/icon/choices",
     *     name="_bck__sysadmin__icon__choices"
     * )
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @return mixed
     */
    public function choicesAction(Request $request)
    {
        return parent::choicesAction($request);
    }
}
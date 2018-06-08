<?php
namespace Bck\AdminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SystemSettingController extends BaseEntityController
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

        // Configured as sub-menu, a dependency into view.
        $this->templateConf['label'] = 'System';
        $this->templateConf['selectedMenu']['route'] = '_bck__admin__settings__index';

        // Route
        $this->templateConf['route'] = array(
            'edit' => array(
                'name' => '_bck__admin__system_setting__edit',
            )
        );

        parent::init($request);

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/bck/admin/system-setting/edit/{id}",
     *     name="_bck__admin__system_setting__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Edit
        return $this->render('AppBundle:form:form.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/admin/system-setting/conf/{id}",
     *     name="_bck__admin__system_setting__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        // Set configuration
        $this->init($request);

        // In this case the id is not used to get the target object, but the unique object that exist in this table,
        // so id is used as a boolean only to know when the object should be returned with the conf
        if (!empty($id)) {
            $obj = $this->getObject(null);
            // Set object in conf only if it is defined,
            // otherwise let the DataService Front-End create a new object with default values
            if ($obj->getId()) {
                $this->responseConf['hasObject'] = true;
                $this->responseConf['object'] = $this->normalizeObject($obj);
            }
        }

        return parent::confAction($request, null);
    }

    /**
     * Get object
     * @param $id
     * @return object
     */
    protected function getObject($id = null)
    {
        $obj = null;

        if ($id) {
            $obj = parent::getObject($id);
        }
        else {
            $objArr = $this->getLocalRepositoryService()->execute('findAll', array());
            if (count($objArr) > 0) {
                $obj = reset($objArr);
            }
        }

        if (!$obj) {
            // New object
            $obj = $this->newObject();
        }

        return $obj;
    }
}
<?php

namespace Bck\AdminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Bck\AdminBundle\Entity\Module;

class ModuleController extends BaseEntityController
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
                'name' => '_bck__admin__module__get'
            ),
            'add' => array(
                'name' => '_bck__admin__module__add'
            ),
            'edit' => array(
                'name' => '_bck__admin__module__edit'
            ),
            'delete' => array(
                'name' => '_bck__admin__module__delete'
            ),
            'detail' => array(
                'name' => '_bck__admin__module__detail'
            )
        );

        parent::init($request);

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        $this->templateConf['search']['orderBy'] = array(array('field' => 'priority', 'value' => 'ASC'));

        // Access control list (only sysadmin can add and remove modules)
        $isSysadmin = $this->get('security.authorization_checker')->isGranted('ROLE_SYSADMIN');
        $this->templateConf['acl']['add'] = $this->templateConf['acl']['delete'] = $isSysadmin;

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'add' => $this->templateConf['acl']['add'],
                'delete' => $this->templateConf['acl']['delete'],
                'detail' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['service'] = array(
            'appDependencyRouteGetUrl' => $this->generateUrl('_bck__sysadmin__module__get'),
            'appDependencyFieldKey' => 'appModuleObj',
            'fields' => array(
                'appModuleObj' => null
            )
        );

        // Tree view configuration
        $this->flags['treeViewMode'] = true;
        $this->templateConf['treeView'] = array(
            'iconField' => 'icon',
            'localParentField' => 'appParentModuleObj',
            'parentTargetField' => 'appModuleObj'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Search. Local conf search, mandatory fields and criteria.
        $this->localConf['search']['fields'][] = 'appParentModuleObj'; // To get parent for tree view (is mandatory)

        return $this;
    }

    /**
     * @Route("/bck/admin/module",
     *     name="_bck__admin__module__index"
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
     * @Route("/bck/admin/module/detail/{id}",
     *     name="_bck__admin__module__detail",
     *     defaults={"id" = null},
     * )
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/bck/admin/module/get/{id}",
     *     name="_bck__admin__module__get",
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
     * @Route("/bck/admin/module/add",
     *     name="_bck__admin__module__add"
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @return mixed
     */
    public function addAction(Request $request)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // New object
        $obj = $this->newObject();

        // Build form
        $form = $this->createForm('Bck\AdminBundle\Form\ModuleAddFormType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templatesPath'].'add-popup.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Select Module',
                ),
                array(
                    'label' => 'Fill Form',
                )
            )
        ));
    }

    /**
     * @Route("/bck/admin/module/edit/{id}",
     *     name="_bck__admin__module__edit",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Only visible in add mode
        if(($key = array_search('appModuleObj', $this->templateConf['fields']['form'])) !== false) {
            unset($this->templateConf['fields']['form'][$key]);
        }

        return parent::editAction($request, $id);
    }

    /**
     * @Route("/bck/admin/module/delete/{id}",
     *     name="_bck__admin__module__delete",
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
     * Get appModuleObj choices.
     * Overrides the original function "getFieldChoices" to get specific choices
     * @param $field
     * @return mixed
     */
    protected function getFieldChoicesFromDb($field)
    {
        $localRepositoryService = $this->getLocalRepositoryService();
        $systemRepositoryService = $this->get('bck.sysadmin.service.repository')
            ->setEntityRepository('BckSysadminBundle:Module');

        // Get added modules to exclude
        $subQb = $localRepositoryService->execute(
            'queryBuilder',
            array(
                array(
                    'fields' => array(
                        'appModuleObj'
                    )
                ),
            )
        );

        // Get modules that can be added
        $qb = $systemRepositoryService->execute(
            'queryBuilder',
            array(
                array(
                    'fields' => array(
                        'id',
                        'name',
                        'description',
                        'icon'
                    ),
                    'orderBy' => array(
                        array('field' => 'priority', 'value' => 'ASC')
                    )
                ),
                false
            )
        )
        ->where("app_module.name NOT IN ('Sysadmin', 'Home', 'Personal Area')") // Base modules added automatically
        ->andWhere('app_module.isEnabled = 1');
        if (is_array($subQb) && (count($subQb) > 0)) {
            $appModules = (implode(",", array_column($subQb, 'appModuleObj')));
            $qb->andWhere("app_module.id NOT IN (".$appModules.")"); // Modules already added
        }

        $choices = $systemRepositoryService->execute(
            'executeQueryBuilder',
            array(
                $qb
            )
        );

        // Add icon to name
        if (is_array($choices)) {
            $choices = array_map(
                function($value) {
                    return array(
                        'id' => $value['id'],
                        'label' => ('<i class="fa ' . $value['icon'] . '"></i> ' . $value['name']),
                        'description' => $value['description']
                    );
                },
                $choices
            );
        }

        return $choices;
    }
}
<?php

namespace UserBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class UserCalendarController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
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

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_user__user_calendar__get'
            ),
            'edit' => array(
                'name' => '_user__user_calendar__edit'
            ),
            'delete' => array(
                'name' => '_user__user_calendar__delete'
            )
        );

        parent::init($request);

        // Fields choices
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        if (!$isAdmin) { // Only admin can create event for all users
            unset($this->localConf['entityFields']['shareToType']['typeDetail']['choices']['value']['All']);
            unset($this->templateConf['fieldsChoices']['shareToType']['value']['All']);
        }

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();
        // Get only one month (current month since day 01 until last day)
        $firstMinOfMonth = (date("Y-m-01") . ' 00:00:00');
        $lastMinOfMonth = (date("Y-m-t") . ' 23:59:59');
        $this->templateConf['search']['criteria'][] = array( // Starts
            'field' => 'startTime',
            'expr' => 'between',
            'value' => array($firstMinOfMonth, $lastMinOfMonth)
        );
        $this->templateConf['search']['criteria'][] = array( // Ends
            'field' => 'endTime',
            'method' => 'or',
            'expr' => 'between',
            'value' => array($firstMinOfMonth, $lastMinOfMonth)
        );
        $this->templateConf['search']['criteria'][] = array( // Crosses
            'field' => ($firstMinOfMonth),
            'method' => 'or',
            'expr' => 'rbetween',
            'value' => array('startTime', 'endTime')
        );

        // Disable pagination
        $this->templateConf['search']['limit'] = $this->templateConf['search']['offset'] = null;

        return $this;
    }

    /**
     * @Route("/user/user-calendar",
     *     name="_user__user_calendar__index"
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
     * @Route("/user/user-calendar/get/{id}",
     *     name="_user__user_calendar__get",
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
     * @Route("/user/user-calendar/edit/{id}",
     *     name="_user__user_calendar__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['templates']['edit'] = $this->localConf['templatesPath'].'edit.html.twig';

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Get request data
            $data = $this->getRequestData($request);

            // Validate dates
            if (!$this->checkDatesInterval($data['form']['startTime'], $data['form']['endTime'])) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Data not persisted! Invalid time interval.',
                    'Error',
                    'error'
                );
                return $this->getResponse(true);
            }

            $this->saveForm($form, $obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/user/user-calendar/delete/{id}",
     *     name="_user__user_calendar__delete",
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
     * Action to get all data for home bundle
     * @param Request $request
     * @return mixed
     */
    public function dataForHomeAction(Request $request)
    {
        // Set configuration
        $this->init($request);
        $this->templateConf['controls']['expander'] = true;

        // Get current week (only to count)
        /*$weekDay = date('N');
        $startTime = null;
        $endTime = null;
        switch ($weekDay) {
            case 7: // Sunday
                $startTime = date('d.m.Y');
                $endTime = date('d.m.Y', strtotime('next saturday'));
                break;
            case 6: // Saturday
                $endTime = date('d.m.Y');
                $startTime = date('d.m.Y', strtotime('last sunday'));
                break;
            default:
                $startTime = date('d.m.Y', strtotime('last sunday'));
                $endTime = date('d.m.Y', strtotime('next saturday'));

        }
        $startTime .= ' 00:00:00';
        $endTime .= ' 23:59:59';*/

        // Get current day (only to count)
        $options = $this->getSearch();
        $currentDate = date("Y-m-d");
        $options['criteria'] = array(
            array( // Starts
                'field' => 'startTime',
                'expr' => 'between',
                'value' => array($currentDate . ' 00:00:00', $currentDate . ' 23:59:59')
            ),
            array( // Ends
                'field' => 'endTime',
                'method' => 'or',
                'expr' => 'between',
                'value' => array($currentDate . ' 00:00:00', $currentDate . ' 23:59:59')
            ),
            array( // Crosses
                'field' => ($currentDate . ' 00:00:00'),
                'method' => 'or',
                'expr' => 'rbetween',
                'value' => array('startTime', 'endTime')
            )
        );
        $total = $this->getLocalRepositoryService()
            ->execute(
                'count',
                array(
                    $options
                )
            );

        // Set count info in label
        if ($total > 0) {
            $this->templateConf['label'] .= (' <span class="badge badge-info">' . $total . '</span>');
        }

        return $this->dataAction($request);
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        // Get logged user obj
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $userObj = $this->getRepositoryService('User', 'AdminBundle')
            ->execute(
                'findOneById',
                array(
                    $loggedUserId
                )
            );

        $obj->setUserObj($userObj);

        return $obj;
    }

    /**
     * Check dates interval
     * @param $startDate
     * @param $endDate
     * @return boolean
     */
    protected function checkDatesInterval($startDate, $endDate)
    {
        return ($startDate <= $endDate);
    }

    /**
     * Get list/array of objects by search configuration
     * @return null
     */
    protected function getObjectsBySearch() {
        $options = $this->getSearch();
        if (!empty($options['limit'])) { // Pagination enabled
            $options['limit']++; // Used to control the pagination
        }

        $isAdmin = $this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        // Get logged user obj
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];

        $objects = $this->getLocalRepositoryService()
            ->execute(
                'getLocalObjects',
                array(
                    $options,
                    $isAdmin,
                    $loggedUserId
                )
            );

        if (!empty($options['limit'])) { // Pagination enabled
            $this->templateConf['search']['hasMore'] = (count($objects) == $options['limit']);
            if ($this->templateConf['search']['hasMore']) {
                // Remove the last row, it's only to control the pagination
                array_pop($objects);
            }
        }

        return $objects;
    }
}
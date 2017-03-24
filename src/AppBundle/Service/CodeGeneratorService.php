<?php
namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\EntityManager;

class CodeGeneratorService
{
    /**
     * @var Session (service)
     */
    protected $session;

    /**
     * @var EntityManager (database manager)
     */
    protected $entityManager;


    /**
     * Constructor
     * @param Session $session
     * @param EntityManager $entityManager
     */
    public function __construct(
        Session $session,
        EntityManager $entityManager
    ) {
        $this->session = $session;
        $this->entityManager = $entityManager;
    }

    /**
     * Generate code
     * @param $repositoryService
     * @param $settingRepository
     * @param $entityRepository
     * @param $object
     * @param $criteria (same format of "search")
     * @return $this
     */
    public function generateCode($repositoryService, $settingRepository, $entityRepository, $object, $criteria = array())
    {
        if (method_exists($object, 'setCode') && empty($object->getCode())) {
            $store = $this->session->get('_app.store');

            if ($store) {
                // Get specific setting for store
                $settingObj = $repositoryService->setEntityRepository($settingRepository)
                    ->execute(
                        'queryBuilder',
                        array(
                            array('criteria' => array_merge(
                                $criteria,
                                array(
                                    array('field' => 'storeObj', 'expr' => 'eq', 'value' => $store),
                                    array('field' => 'isEnabled', 'expr' => 'eq', 'value' => true)
                                )
                            )),
                            true,
                            'getResult'
                        )
                    );
                $settingObj = reset($settingObj);

                // Get general setting
                if (empty($settingObj)) {
                    $settingObj = $repositoryService->execute(
                        'queryBuilder',
                        array(
                            array('criteria' => array_merge(
                                $criteria,
                                array(
                                    array('field' => 'storeObj', 'expr' => 'isNull', 'value' => null),
                                    array('field' => 'isEnabled', 'expr' => 'eq', 'value' => true)
                                )
                            )),
                            true,
                            'getResult'
                        )
                    );
                    $settingObj = reset($settingObj);
                }

                // Generate new code
                if (!empty($settingObj)) {
                    // Try to set code multiple times (can be useful in case of codes already in use)
                    for ($i = 0; $i < 1000; $i++) {
                        // Update the new number in settings table as soon as possible to avoid concurrent processes
                        $number = $settingObj->getSeriesNumber();
                        $number = ($number ? ($number + 1) : 1);
                        $settingObj->setSeriesNumber($number);
                        $this->entityManager
                            ->persist($settingObj);

                        // Update code in entity table
                        $prefix = $settingObj->getSeriesPrefix();
                        $prefix = ($prefix ? $prefix : '');

                        // Check if code is already in use
                        $ObjectUsingCode = $repositoryService->setEntityRepository($entityRepository)
                            ->execute(
                                'findOneByCode',
                                array($prefix . $number)
                            );

                        if (empty($ObjectUsingCode)) {
                            $object->setCode($prefix . $number);
                            $this->entityManager
                                ->persist($object);
                            break;
                        }
                    }
                }
            }
        }

        return $this;
    }
}
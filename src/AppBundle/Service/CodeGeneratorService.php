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
        if (method_exists($object, 'getCodeNumber') && empty($object->getCodeNumber())) {
            $store = $this->session->get('_app.store');

            if ($store) {
                $settingObj = $this->getObjectSetting($repositoryService, $settingRepository, $store, $criteria);

                // Generate new code
                if (!empty($settingObj)) {
                    // Prefix of code
                    $prefix = $settingObj->getSeriesPrefix();
                    $prefix = ($prefix ? $prefix : '');

                    // Try to set code multiple times (can be useful in case of codes already in use)
                    for ($i = 0; $i < 1000; $i++) {
                        // Update the new number in settings table as soon as possible to avoid concurrent processes
                        $number = $settingObj->getSeriesNumber();
                        $number = ($number ? ($number + 1) : 1);
                        $settingObj->setSeriesNumber($number);
                        $this->entityManager->persist($settingObj);

                        // Check if code is already in use
                        $ObjectUsingCode = $repositoryService->setEntityRepository($entityRepository)
                            ->execute(
                                'findBy',
                                array(array('codePrefix' => $prefix, 'codeNumber' => $number))
                            );

                        if (empty($ObjectUsingCode)) {
                            $object->setCodePrefix($prefix);
                            $object->setCodeNumber($number);
                            $this->entityManager->persist($object);
                            break;
                        }
                    }
                }
            }
        }

        return $this;
    }

    /**
     * Get Surrounding Objects
     * @param $object
     * @param $repositoryService
     * @param $settingRepository
     * @param $entityRepository
     * @param array $criteria
     * @return null
     */
    public function getSurroundingObjects($object, $repositoryService, $settingRepository, $entityRepository, $criteria = array())
    {
        $store = $this->session->get('_app.store');

        if ($store) {
            $surroundingObjects = array('prev' => null, 'next' => null);

            if (empty($object) || empty($object->getCodeNumber())) {
                // Get last code
                $settingObj = $this->getObjectSetting($repositoryService, $settingRepository, $store, $criteria);

                if (!empty($settingObj)) {
                    // Prefix of code
                    $prefix = $settingObj->getSeriesPrefix();
                    $prefix = ($prefix ? $prefix : '');

                    $number = ($settingObj->getSeriesNumber());

                    $prevObj = $repositoryService->setEntityRepository($entityRepository)
                        ->execute(
                            'findBy',
                            array(array('codePrefix' => $prefix, 'codeNumber' => $number - 1))
                        );
                    $prevObj = reset($prevObj);

                    $surroundingObjects['prev'] = $prevObj;

                    return $surroundingObjects;
                }
            } else {
                $prefix = $object->getCodePrefix();
                $number = $object->getCodeNumber();

                $prevObj = $repositoryService->setEntityRepository($entityRepository)
                    ->execute(
                        'findBy',
                        array(array('codePrefix' => $prefix, 'codeNumber' => $number - 1))
                    );
                $prevObj = reset($prevObj);

                $nextObj = $repositoryService->setEntityRepository($entityRepository)
                    ->execute(
                        'findBy',
                        array(array('codePrefix' => $prefix, 'codeNumber' => $number + 1))
                    );
                $nextObj = reset($nextObj);

                $surroundingObjects = array(
                    'prev' => $prevObj,
                    'next' => $nextObj
                );

                return $surroundingObjects;
            }
        }

        throw new \InvalidArgumentException("Error determining the object 'Code'. Maximum number of attempts reached. Please try again.");
    }

    /**
     * Get object setting
     * @param $repositoryService
     * @param $settingRepository
     * @param $store
     * @param $settingCriteria
     * @return mixed|null
     */
    protected function getObjectSetting($repositoryService, $settingRepository, $store, $settingCriteria)
    {
        // Get specific setting for store
        $settingObj = $repositoryService->setEntityRepository($settingRepository)
            ->execute(
                'queryBuilder',
                array(
                    array('criteria' => array_merge(
                        $settingCriteria,
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
                        $settingCriteria,
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

        return (empty($settingObj) ? null : $settingObj);
    }
}
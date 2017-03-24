<?php

namespace AppBundle\Service;

use Doctrine\ORM\EntityManager;

abstract class BaseRepositoryService
{
    /**
     * @var EntityManager (database manager)
     */
    protected $entityManager;

    /**
     * @var entity repository
     */
    protected $entityRepository;


    /**
     * Constructor
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->entityRepository = null;
    }

    /**
     * @param $entityRepository
     * @return $this
     */
    public function setEntityRepository($entityRepository) {
        $this->entityRepository = $entityRepository;

        return $this;
    }

    /**
     * Execute methods on repository
     *
     * @param $method (method to call)
     * @param array $args (array of arguments for method)
     * @return mixed
     */
    public function execute($method, $args = array())
    {
        return call_user_func_array(
            array(
                $this->entityManager->getRepository($this->entityRepository),
                $method
            ),
            $args
        );
    }
}
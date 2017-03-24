<?php
namespace AppBundle\Service;

use Symfony\Component\DependencyInjection\ContainerInterface as Container;

class DatabaseService
{
    /**
     * @var Container
     */
    protected $container;


    /**
     * Construct
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->container = $container;
    }

    /**
     * Switch database connection
     * @param $entityManagerName
     * @param null $dbHost
     * @param null $dbName
     * @param null $dbUser
     * @param null $dbPassword
     * @return DatabaseService
     */
    public function switchConnection($entityManagerName, $dbHost=null, $dbName=null, $dbUser=null, $dbPassword=null)
    {
        $connection = $this->container->get('doctrine')->getManager($entityManagerName)->getConnection();
        $connection->close();

        $reflectionObj = new \ReflectionObject($connection);
        $reflectionParams = $reflectionObj->getProperty('_params');
        $reflectionParams->setAccessible('public');

        $newParams = $reflectionParams->getValue($connection);
        $newParams['host']     = $dbHost;
        $newParams['dbname']   = $dbName;
        $newParams['user']     = $dbUser;
        $newParams['password'] = $dbPassword;

        $reflectionParams->setValue($connection, $newParams);
        $reflectionParams->setAccessible('private');

        $this->container->get('doctrine')->resetManager($entityManagerName);

        return($this);
    }
}
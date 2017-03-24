<?php

namespace AppBundle\Service;

use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Load configuration for twig
 */
class TwigService extends \Twig_Extension
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * Construct
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container) {
        $this->container = $container;
    }

    /**
     * @return string
     */
    public function getName() {
        return "appConf";
    }

    /**
     * @return array
     */
    public function getGlobals() {
        return array(
            'appConf' => $this->container->getParameter('appConf')
        );
    }
}
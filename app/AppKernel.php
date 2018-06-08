<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = [
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new AppBundle\AppBundle(),
            new Bck\HomeBundle\BckHomeBundle(),
            new LoginBundle\LoginBundle(),
            new Bck\AdminBundle\BckAdminBundle(),
            new Bck\SysadminBundle\BckSysadminBundle(),
            new Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle(),
            new Knp\Bundle\SnappyBundle\KnpSnappyBundle(),
            new Bck\EntitiesBundle\BckEntitiesBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Liip\ImagineBundle\LiipImagineBundle(),
            new Bck\ServicesBundle\BckServicesBundle(),
            new Bck\AccountingBundle\BckAccountingBundle(),
            new Bck\BookingBundle\BckBookingBundle(),
            new Bck\UserBundle\BckUserBundle(),
            new Bck\SettingsBundle\BckSettingsBundle(),
            new Bck\CommonBundle\BckCommonBundle(),
            new Bck\ManagementBundle\BckManagementBundle(),
            new Frt\AccountingBundle\FrtAccountingBundle(),
            new Frt\CommonBundle\FrtCommonBundle(),
            new Frt\EntitiesBundle\FrtEntitiesBundle(),
            new Frt\BookingBundle\FrtBookingBundle(),
            new Frt\ServicesBundle\FrtServicesBundle(),
        ];

        if (in_array($this->getEnvironment(), ['dev', 'test'], true)) {
            $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }

        return $bundles;
    }

    public function getRootDir()
    {
        return __DIR__;
    }

    public function getCacheDir()
    {
        return dirname(__DIR__).'/var/cache/'.$this->getEnvironment();
    }

    public function getLogDir()
    {
        return dirname(__DIR__).'/var/logs';
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load($this->getRootDir().'/config/config_'.$this->getEnvironment().'.yml');
    }
}

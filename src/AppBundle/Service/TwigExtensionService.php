<?php

namespace AppBundle\Service;

use Sybio\Bundle\CoreBundle\Services\Extension\Twig_Filter_Function;
use Sybio\Bundle\CoreBundle\Services\Extension\Twig_Filter_Method;

/**
 * Load extension for twig
 */
class TwigExtensionService extends \Twig_Extension
{
    /**
     * Return the functions registered as twig extensions
     * @return array
     */
    public function getFunctions()
    {
        return array(
            //'file_exists' => new \Twig_Function_Function('file_exists'),
            'asset_exists' => new \Twig_Function_Method($this, 'asset_exists')
        );
    }

    /**
     * Check if asset exists
     * @param $path
     * @return bool
     */
    public function asset_exists($path)
    {
        return file_exists(realpath($path));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'twig_extension';
    }
}
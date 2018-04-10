<?php

namespace AppBundle\Service;

use Sybio\Bundle\CoreBundle\Services\Extension\Twig_Function;

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
            'asset_exists' => new \Twig_Function('asset_exists', array($this, 'asset_exists')),
            'get_col_align' => new \Twig_Function('get_col_align', array($this, 'get_col_align'))
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
     * Get Column Alignment
     * @param $dataType
     * @return string
     */
    public function get_col_align($dataType) {
        switch ($dataType) {
            case 'number':
            case 'percentage':
            case 'monetary':
            case 'date':
            case 'datetime':
                return 'text-right';
            case 'boolean':
            case 'icon':
            case 'img':
            case 'status':
                return 'text-center';
            default:
                return 'text-left';
        }
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'twig_extension';
    }
}
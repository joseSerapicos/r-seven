<?php
namespace AppBundle\Service;

/**
 * Class HelperService
 * This class is not configured as service because you can use it in anywhere,
 * included out of controller like entity repository, etc.
 * @package AppBundle\Service
 */
class HelperService
{
    // Array with global vars to share information between all application (like entities) when session is not
    // accessible. Use it only as last resource!
    protected static $globalVar = array();

    /**
     * Set global var
     * @param $var
     * @param $value
     */
    public static function setGlobalVar($var, $value)
    {
        HelperService::$globalVar[$var] = $value;
    }

    /**
     * Get global var
     * @param $var
     * @return mixed|null
     */
    public static function getGlobalVar($var)
    {
        return (isset(HelperService::$globalVar[$var]) ? HelperService::$globalVar[$var] : null);
    }

    /**
     * Get class name without namespaces
     * @param $object
     * @return string
     */
    static function getClassName($object) {
        return substr(strrchr(get_class($object), '\\'), 1);
    }

    /**
     * Get bundle name without namespaces
     * @param $object
     * @return string
     */
    static function getBundleName($object) {
        $fullClassName = get_class($object);
        return substr($fullClassName, 0, strpos($fullClassName, '\\'));
    }

    /**
     * Push into array
     * @param $array
     * @param $newArray
     * @param null $key
     * @return array
     */
    static function pushIntoArray($array, $newArray, $key = null) {
        // If index is not defined, last position is used by default.
        $index = (($key == null) ? count($array) : (array_search($key, array_keys($array)) + 1));

        // Merge array into index
        return array_merge(
            array_slice($array, 0, $index),
            $newArray,
            array_slice($array, $index)
        );
    }

    /**
     * Remove directory recursively
     * @param $dir
     */
    public static function rmDirR($dir) {
        if (file_exists($dir)) {
            foreach (glob($dir.'/*') as $file) {
                if (is_dir($file)) {
                    HelperService::rmDirR($file);
                } else {
                    unlink($file);
                }
            }
            rmdir($dir);
        }
    }

    /**
     * Crop image
     * @param $liipImagineDataManager
     * @param $liipImagineFilterManager
     * @param $path
     * @param $width
     * @param $height
     * @param $x
     * @param $y
     * @return null|string
     */
    public static function cropImage($liipImagineDataManager, $liipImagineFilterManager, $path, $width, $height, $x, $y)
    {
        if (!empty($path) && file_exists($path)) {
            $partialPath = substr($path, strpos($path, '/upload/'));
            $firstPartialPath = substr($path, 0, strripos($path, '.'));
            $lastPartialPath = substr($path, strripos($path, '.'));

            $filter = 'crop_48';
            switch ($lastPartialPath) {
                case '.jpeg':
                    $filter = 'crop_48_jpeg';
                    break;
                case '.png':
                    $filter = 'crop_48_png';
                    break;
            }

            // Set filter values
            $filterConfig = $liipImagineFilterManager->getFilterConfiguration();
            $config = $filterConfig->get($filter);
            $config['filters']['crop'] = array(
                'start' => array($x, $y),
                'size' => array($width, $height)
            );
            $filterConfig->set($filter, $config);

            // Crop, compress and optimize image
            $image = $liipImagineDataManager->find($filter, $partialPath);
            $response = $liipImagineFilterManager->applyFilter($image, $filter);

            $cropFile = $firstPartialPath.'.crop_48'.$lastPartialPath;

            file_put_contents(
                $cropFile,
                $response->getContent()
            );

            return $cropFile;
        }
        return null;
    }

    /**
     * Convert string from CamelCase to snake_case
     * @param $string
     * @return string
     */
    public static function camelCaseToSnakeCase($string)
    {
        return ltrim(strtolower(preg_replace('/[A-Z]/', '_$0', $string)), '_');
    }

    /**
     * Normalize string to snake_case
     * @param $string
     * @return string
     */
    public static function normalizeToSnakeCase($string)
    {
        return strtolower(str_replace(' ', '_', $string));
    }

    /**
     * Normalize Name
     * @param $string
     * @return string
     */
    public static function normalizeName($string)
    {
        $string = self::normalizeToSnakeCase($string);

        // Removes special chars.
        return preg_replace('/[^A-Za-z0-9\_]/', '', $string);
    }

    /**
     * Convert string from snake_case to CamelCase
     * @param $string
     * @return string
     */
    public static function snakeCaseToCamelCase($string)
    {
        return str_replace(' ', '', ucwords(str_replace('_', ' ', $string)));
    }

    /**
     * Convert string form CamelCase to hyphen-case
     * @param $string
     * @return string
     */
    public static function camelCaseToHyphenCase($string)
    {
        return ltrim(strtolower(preg_replace('/[A-Z]/', '-$0', $string)), '-');
    }

    /**
     * Convert string from hyphen-case to CamelCase
     * @param $string
     * @return string
     */
    public static function hyphenCaseToCamelCase($string)
    {
        return str_replace(' ', '', ucwords(str_replace('-', ' ', $string)));
    }
}
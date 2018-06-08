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
     * Get language key for server
     * @param $key
     * @return mixed
     */
    public static function getLangServer($key) {
        $languageArr = self::getGlobalVar('languageArr');

        if (!$key) {
            // Return all keys
            return ($languageArr ? $languageArr['server'] : array());
        }

        return (($languageArr && isset($languageArr['server'][$key])) ? $languageArr['server'][$key] : $key);
    }

    /**
     * Get language key for client
     * @param $key
     * @return mixed
     */
    public static function getLangClient($key = null) {
        $languageArr = self::getGlobalVar('languageArr');

        if (!$key) {
            // Return all keys
            return ($languageArr ? $languageArr['client'] : array());
        }

        return (($languageArr && isset($languageArr['client'][$key])) ? $languageArr['client'][$key] : $key);
    }

    /**
     * Get class name without namespaces
     * @param $object
     * @return string
     */
    static function getClassName($object) {
        if ($object) {
            return substr(strrchr(get_class($object), '\\'), 1);
        }
        return null;
    }

    /**
     * Get bundle name with namespace split in an array
     * @param $object
     * @return string
     */
    static function getBundleNameArr($object) {
        $bundleNameArr = array('prefix' => '', 'bundle' => '');

        $fullClassName = get_class($object);
        $fullClassNameSplit = explode('\\', $fullClassName);

        if (is_array($fullClassNameSplit) && (count($fullClassNameSplit) > 0)) {
            $key = 'Bundle';
            $keyLength = strlen($key);

            foreach ($fullClassNameSplit as $fullClassNameFragment) {
                // Check if the fragment are the key 'Bundle'
                if (substr($fullClassNameFragment, -$keyLength) === $key) {
                    // Key 'Bundle' are found, so we can return
                    $bundleNameArr['bundle'] = $fullClassNameFragment;
                    return $bundleNameArr;
                }

                // Key 'Bundle' not found, so the fragment is a prefix
                $bundleNameArr['prefix'] = $fullClassNameFragment;
            }
        }

        return $bundleNameArr;
    }

    /**
     * Push into array
     * @param $array
     * @param $newArray
     * @param null $key
     * @param $hasSplitNewArray (determined if the $array should be embed in the new array)
     * @return array
     */
    static function pushIntoArray($array, $newArray, $key = null, $hasSplitNewArray = false) {
        // Remove repeated entries in $array to avoid override them in $newArray
        $array = array_diff_key($array, $newArray);

        $splitArray = $hasSplitNewArray ? $newArray : $array; // Array to split
        $embedArray = $hasSplitNewArray ? $array : $newArray; // Array to embed between split array parts

        // If index is not defined, last position is used by default.
        $index = (($key === null) ? null : (array_search($key, array_keys($splitArray)) + 1));

        if ($index) {
            // Merge array into index
            return array_merge(
                array_slice($splitArray, 0, $index),
                $embedArray,
                array_slice($splitArray, $index)
            );
        }

        // Merge array
        return array_merge(
            $splitArray,
            $embedArray
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
     * Generates a random string
     * @param int $length
     * @return string
     */
    public static function generateRandomString($length = 10)
    {
        $availableChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $availableCharsLength = strlen($availableChars);

        return substr(str_shuffle(str_repeat($availableChars, ceil($length/$availableCharsLength))), 1, $length);
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
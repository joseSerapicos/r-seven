<?php
namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\EntityManager;

/**
 * Class PriceService
 * This class has static methods to use it in anywhere,
 * included out of controller like entity repository, etc.
 * @package AppBundle\Service
 */
class PriceService
{
    // Decimals to use in rounding
    const DECIMAL_CONF = array('unit' => 4, 'total' => 2);

    /**
     * Calc cost value from sell value
     * @param $value
     * @param $margin
     * @param $method
     * @return float
     */
    public function calcCostValue($value, $margin, $method)
    {
        $result = 0;

        // Normalize decimals
        $value = round($value, self::DECIMAL_CONF['unit']);
        $margin = round($margin, self::DECIMAL_CONF['unit']);

        switch ($method) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                $margin = (($margin < 100) ? $margin : 99.9999); // Avoid division by zero
                $result = ($value * (1 - ($margin / 100)));
                break;
            case 'MARKUP':
                $result = ($value / (1 + ($margin / 100)));
                break;
            case 'FIXED':
                $result = ($value - $margin);
                break;
        }

        return round($result, self::DECIMAL_CONF['unit']);
    }

    /**
     * Calc sell value from cost value
     * @param $value
     * @param $margin
     * @param $method
     * @return float
     */
    public function calcSellValue($value, $margin, $method)
    {
        $result = 0;

        // Normalize decimals
        $value = round($value, self::DECIMAL_CONF['unit']);
        $margin = round($margin, self::DECIMAL_CONF['unit']);

        switch ($method) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                $margin = (($margin < 100) ? $margin : 99.9999); // Avoid division by zero
                $result = ($value / (1 - ($margin / 100)));
                break;
            case 'MARKUP':
                $result = ($value * (1 + ($margin / 100)));
                break;
            case 'FIXED':
                $result = ($value + $margin);
                break;
        }

        return round($result, self::DECIMAL_CONF['unit']);
    }

    /**
     * Calc total value
     * @param $unitValue
     * @param $quantity
     * @return float|int
     */
    public function calcTotal($unitValue, $quantity)
    {
        return round($unitValue * $quantity, self::DECIMAL_CONF['total']);
    }

    /**
     * Calc unit value from total value
     * @param $total
     * @param $quantity
     * @return float|int
     */
    public function calcUnitFromTotal($total, $quantity)
    {
        return round($total / $quantity, self::DECIMAL_CONF['unit']);
    }

    /**
     * Get Total Unit Value Detail
     * @param $unitValue
     * @param $vatPercentage
     * @param $vatIsIncluded (determines if VAT is included in value or not)
     * @return array
     */
    public static function getTotalUnitDetail($unitValue, $vatPercentage, $vatIsIncluded = true)
    {
        $value = array();
        if ($vatIsIncluded) {
            // We need to adjust the VAT value.
            // Sometimes the rounded value can produce a different VAT value when it is calculated again
            // based on the rounded value, since that all forms use the value (rounded without VAT) to make all
            // calculus, this issue can cause inquiries between forms when try to calc the VAT value again, so we
            // need to adjust the VAT value according with the rounded value
            $unitValue = round($unitValue / (1 + ($vatPercentage / 100)), self::DECIMAL_CONF['unit']);
        }

        // Normalize value decimals
        $value['value'] = round($unitValue, self::DECIMAL_CONF['unit']);

        // Calculate VAT
        $value['vatValue'] = round($unitValue * ($vatPercentage / 100), self::DECIMAL_CONF['unit']);

        $value['totalUnit'] = round($value['value'] + $value['vatValue'], self::DECIMAL_CONF['total']);

        return $value;
    }

    /**
     * Is Equal (compare float values)
     * @param $float1
     * @param $float2
     * @return bool
     */
    public function isEqual($float1, $float2) {
        // 5 Digits of precision, it is need to avoid the php float compare issue
        $epsilon = 0.00001;

        return (abs($float1 - $float2) < $epsilon);
    }

    /**
     * Is greater (compare float values)
     * @param $float1
     * @param $float2
     * @return bool
     */
    public function isGreater($float1, $float2) {
        // 5 Digits of precision, it is need to avoid the php float compare issue
        $epsilon = 0.00001;

        return (($float1 - $float2) > $epsilon);
    }
}
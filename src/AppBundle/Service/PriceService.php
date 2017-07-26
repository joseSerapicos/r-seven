<?php
namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\EntityManager;

class PriceService
{
    // Decimals to use in rounding
    const DECIMAL_CONF = array('unit' => 4, 'total' => 2);

    /**
     * Calc cost price
     * @param $data
     * @return float|int
     */
    public function calcCostValue($data)
    {
        $result = 0;

        switch ($data['marginMethod']) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                $marginValue = (($data['marginValue'] < 100) ? $data['marginValue'] : 99.9999); // Avoid division by zero
                $result = ($data['sellValue'] * (1 - ($marginValue / 100)));
                break;
            case 'MARKUP':
                $result = ($data['sellValue'] / (1 + ($data['marginValue'] / 100)));
                break;
            case 'FIXED':
                $result = ($data['sellValue'] - $data['marginValue']);
                break;
        }
        return round($result, self::DECIMAL_CONF['total']);
    }

    /**
     * Calc sell price
     * @param $data
     * @return float|int
     */
    public function calcSellValue($data)
    {
        $result = 0;

        switch ($data['marginMethod']) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                $marginValue = (($data['marginValue'] < 100) ? $data['marginValue'] : 99.9999); // Avoid division by zero
                $result = ($data['costValue'] / (1 - ($marginValue / 100)));
                break;
            case 'MARKUP':
                $result = ($data['costValue'] * (1 + ($data['marginValue'] / 100)));
                break;
            case 'FIXED':
                $result = ($data['costValue'] + $data['marginValue']);
                break;
        }
        return round($result, self::DECIMAL_CONF['total']);
    }

    /**
     * Calc total sell price
     * @param $data
     * @return float|int
     */
    public function calcTotalSell($data)
    {
        $quantity = (isset($data['quantity']) ? $data['quantity'] : 0);
        return round($data['sellValue'] * $quantity, self::DECIMAL_CONF['total']);
    }

    /**
     * Calc total cost price
     * @param $data
     * @return float|int
     */
    public function calcTotalCost($data)
    {
        $quantity = (isset($data['quantity']) ? $data['quantity'] : 0);
        return round($data['costValue'] * $quantity, self::DECIMAL_CONF['total']);
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
     * Split Total Unit value
     * @param $unitValue
     * @param $vatPercentage
     * @param $vatIsIncluded (determines if VAT is included in value or not)
     * @return array
     */
    public function splitTotalUnit($unitValue, $vatPercentage, $vatIsIncluded = true)
    {
        $value = array();
        switch ($vatIsIncluded) {
            case true:
                $value['value'] = round($unitValue / (1 + ($vatPercentage / 100)), self::DECIMAL_CONF['unit']);

                // We need to adjust the VAT value.
                // Sometimes the rounded value can produce a different VAT value when it is calculated again
                // based on the rounded value, since that all forms use the value (rounded without VAT) to make all
                // calculus, this issue can cause inquiries between forms when try to calc the VAT value again, so we
                // need to adjust the VAT value according with the rounded value
                return $this->splitTotalUnit($value['value'], $vatPercentage, false, false);
            case false:
                $value['value'] = round($unitValue, self::DECIMAL_CONF['unit']);
                $value['vatValue'] = round($unitValue * ($vatPercentage / 100), self::DECIMAL_CONF['unit']);
                break;
        }

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
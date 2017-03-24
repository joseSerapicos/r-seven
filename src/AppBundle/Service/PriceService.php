<?php
namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\EntityManager;

class PriceService
{
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
        return round($result, 4);
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
        return round($result, 4);
    }

    /**
     * Calc total sell price
     * @param $data
     * @return float|int
     */
    public function calcTotalSell($data)
    {
        $quantity = (isset($data['quantity']) ? $data['quantity'] : 0);
        return round($data['sellValue'] * $quantity, 2);
    }

    /**
     * Calc total cost price
     * @param $data
     * @return float|int
     */
    public function calcTotalCost($data)
    {
        $quantity = (isset($data['quantity']) ? $data['quantity'] : 0);
        return round($data['costValue'] * $quantity, 2);
    }
}
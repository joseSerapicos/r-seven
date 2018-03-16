<?php

namespace BookingBundle\Entity;

use AppBundle\Entity\BasePriceWithVatRepository;
use AppBundle\Service\HelperService;

/**
 * BookingServicePriceRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BookingServicePriceRepository extends BasePriceWithVatRepository
{
    static protected $metadata = null;

    /**
     * Get field metadata
     * @param $field
     * @param $attribute
     * @param $metadata (uses this metadata instead of local metadata)
     * @param $context ('view'|'form'|'none')
     * @return null
     */
    static public function getFieldMetadata($field, $attribute, $metadata = null, $context = 'none')
    {
        if (!$metadata) { $metadata = self::getMetadata(); }

        return self::getLocalFieldMetadata($field, $attribute, $metadata, $context);
    }

    /**
     * Overrides parent
     * @return mixed
     */
    static function getMetadata()
    {
        // Process metadata only once
        if (self::$metadata) {
            return self::$metadata;
        }

        $parentMetadata = parent::getMetadata();

        $localMetadata = self::$metadata = self::processMetadata(array(
            'bookingServiceObj' => array('label' => '', 'type' => 'object', 'acl' => 'read', 'typeDetail' => array(
                'table' => 'bookingService', 'bundle' => 'booking', 'type' => 'none')),
            'bookingObj' => array('label' => '', 'type' => 'object', 'acl' => 'read', 'dependency' => 'bookingServiceObj',
                'typeDetail' => array(
                    'table' => 'booking', 'bundle' => 'booking', 'type' => 'none')
            ),
            'booking_code' => array('table' => '', 'field' => 'CONCAT(booking.codePrefix, booking.codeNumber)',
                'label' => 'Booking', 'type' => 'code', 'acl' => 'read', 'dependency' => 'bookingObj'),
            'supplierObj' => array('table' => 'bookingService', 'label' => '', 'type' => 'object', 'acl' => 'read', 'dependency' => 'bookingServiceObj',
                'typeDetail' => array(
                    'table' => 'supplier', 'bundle' => 'entities', 'type' => 'none')
            ),
            'supplier_code' => array('table' => '', 'field' => 'CONCAT(supplier.codePrefix, supplier.codeNumber)',
                'label' => 'Supplier', 'type' => 'code', 'acl' => 'read', 'dependency' => 'supplierObj'),
            'supplierEntityObj' => array('table' => 'supplier', 'label' => '', 'type' => 'object', 'acl' => 'read', 'dependency' => 'supplierObj',
                'typeDetail' => array(
                    'table' => 'entity', 'tableAlias' => 'supplier_entity', 'bundle' => 'entities', 'type' => 'none')
            ),
            'supplier_name' => array('table' => 'supplier_entity', 'field' => 'name', 'label' => 'Supplier Name',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'supplierEntityObj', 'form' => array('type' => 'none')),
            'clientObj' => array('table' => 'booking', 'label' => '', 'type' => 'object', 'acl' => 'read', 'dependency' => 'bookingObj',
                'typeDetail' => array(
                    'table' => 'client', 'bundle' => 'entities', 'type' => 'none')
            ),
            'client_code' => array('table' => '', 'field' => 'CONCAT(client.codePrefix, client.codeNumber)',
                'label' => 'Client', 'type' => 'code', 'acl' => 'read', 'dependency' => 'clientObj'),
            'clientEntityObj' => array('table' => 'client', 'label' => '', 'type' => 'object', 'acl' => 'read', 'dependency' => 'clientObj',
                'typeDetail' => array(
                    'table' => 'entity', 'tableAlias' => 'client_entity', 'bundle' => 'entities', 'type' => 'none')
            ),
            'client_name' => array('table' => 'client_entity', 'field' => 'name', 'label' => 'Client Name',
                'type' => 'text', 'acl' => 'read', 'dependency' => 'clientEntityObj', 'form' => array('type' => 'none')),
            'serviceObj' => array('table' => 'bookingService', 'label' => 'Service', 'type' => 'object', 'acl' => 'read',
                'dependency' => 'bookingServiceObj', 'typeDetail' => array(
                    'table' => 'service', 'bundle' => 'services', 'type' => 'none', 'fieldInView' => 'service_name'),
                'form' => array('type' => 'html-select')
            ),
            'appIconObj' => array('table' => 'service', 'label' => 'nd',
                'type' => 'object', 'acl' => 'read', 'dependency' => 'serviceObj', 'typeDetail' => array(
                    'table' => 'app_icon', 'bundle' => 'sysadmin', 'type' => 'none')
            ),
            'service_icon' => array('table' => 'app_icon', 'field' => 'icon', 'label' => '', 'type' => 'icon',
                'acl' => 'read', 'dependency' => 'appIconObj', 'form' => array('type' => 'none')),
            'service_name' => array('table' => 'service', 'field' => 'name', 'label' => 'Service', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'serviceObj', 'form' => array('type' => 'none')),
            'vatCode_name' => array('table' => 'vatCode', 'field' => 'name', 'label' => 'VAT Code', 'type' => 'text',
                'acl' => 'read', 'dependency' => 'vatCodeObj', 'form' => array('type' => 'none')),
            'description' => array('label' => 'Description', 'type' => 'text', 'acl' => 'edit'),
            'postingType' => array('label' => 'Operation', 'type' => 'enum', 'acl' => 'edit',
                'typeDetail' => array(
                    'type' => 'text', 'choices' => array(
                        'value' => array(
                            'Debit' => 'DEBIT', 'Credit' => 'CREDIT'
                        )
                    )),
                'form' => array('type' => 'select')
            ),
            'grouperBookingServicePriceObj' => array('label' => '', 'type' => 'object', 'acl' => 'read',
                'typeDetail' => array(
                    'table' => 'bookingServicePrice', 'tableAlias' => 'grouperBookingServicePrice',
                    'bundle' => 'booking', 'type' => 'none'
                )
            ),
            'groupedTotalSell' => array('label' => 'Grouped Total Sell', 'type' => 'monetary', 'acl' => 'read',
                'dependency' => 'grouperBookingServicePriceObj',
                'field' => '(grouperBookingServicePrice.subTotalSell + grouperBookingServicePrice.totalVatSell)',
                'table' => '', 'form' => array('type' => 'none'),
                'normalizer' => array('method' => 'getGroupedTotalSell')
            )
        ));

        return self::$metadata = HelperService::pushIntoArray($parentMetadata, $localMetadata, 'id');
    }

    /**
     * Get For Invoice (return a default array of objects for invoice to bill by booking)
     * @param $entityContext
     * @param $options (array with queryBuilder options format)
     * @return mixeds
     */
    public function getForInvoice($entityContext, $options)
    {
        $entityContextUC = ucfirst($entityContext);

        $localTable = $this->getLocalTable();

        $entityFieldsTermination = ($entityContext == 'supplier' ? 'cost' : 'sell');
        $entityFieldsTerminationUC = ucfirst($entityFieldsTermination);

        $options = array_merge(
            (empty($options) ? array() : $options),
            array(
                'fields' => array(
                    'id',
                    'booking.id AS bookingObj', // For tree view (parent field)
                    // Fields redefined here to avoid the automatic leftJoin with serviceObj and bookingServiceObj
                    // by "queryBuilder" function we need to make manual innerJoin
                    'service.id AS serviceObj',
                    'icon.icon AS service_icon',
                    'service.name AS service_name',
                    'CONCAT(booking.codePrefix, booking.codeNumber) AS booking_code',
                    'description',
                    'quantity',
                    $localTable.".".$entityFieldsTermination."Value AS value",
                    "(".$localTable.".subTotal".$entityFieldsTerminationUC." + ".$localTable.".totalVat".$entityFieldsTerminationUC.") AS total",
                    // Try to calc remain quantity
                    "(" . $localTable . ".quantity "
                    . " - "
                    . "SUM(CASE WHEN (documentType.operation IS NOT NULL) THEN (documentInvoiceDetail.quantity) ELSE (0) END)) AS notInvoicedQuantity",
                    $localTable . ".postingType AS postingType",
                    // Get the total price value minus the value already billed (remain val).
                    // Its used total (value without VAT + VAT, because is more exactly to get original values)
                    "((CASE WHEN (" . $localTable . ".postingType = 'DEBIT') "
                    . "THEN (" . $localTable . ".subTotal".$entityFieldsTerminationUC." + " . $localTable . ".totalVat".$entityFieldsTerminationUC.") "
                    . "ELSE ((" . $localTable . ".subTotal".$entityFieldsTerminationUC." + " . $localTable . ".totalVat".$entityFieldsTerminationUC.") * -1) END) "
                    . " - "
                    . "SUM(CASE WHEN (documentType.operation IS NOT NULL) THEN (CASE WHEN (documentType.operation = 'DEBIT') "
                    . "THEN (documentInvoiceDetail.subTotal + documentInvoiceDetail.totalVat) "
                    . "ELSE ((documentInvoiceDetail.subTotal + documentInvoiceDetail.totalVat) * -1) END) ELSE (0) END)) AS notInvoicedTotal"
                )
            )
        );
        if (!isset($options['criteria'])) { $options['criteria'] = array(); }
        // Exclude grouped objects, they are handled by grouper object
        $options['criteria'][] = array('field' => $localTable.".grouperBookingServicePriceObj", 'expr' => 'isNull', 'value' => null);
        $options['conf'] = array_merge(
            (isset($options['conf']) ? $options['conf'] : array()),
            array(
                // We make manually the joins, so dependency resolver should be disabled, otherwise joins will be duplicated
                'hasDependencyResolver' => false
            )
        );

        // Get query builder
        $qb = $this->queryBuilder($options, false);

        // Get booking service
        $qb->innerJoin($localTable . '.bookingServiceObj',
            'bookingService',
            'WITH',
            '(bookingService.isEnabled = 1) AND (bookingService.grouperBookingServiceObj IS NULL)' // Exclude grouped services
        );

        // Get booking
        $storeId = ((isset($options['conf']) && isset($options['conf']['localData']) && isset($options['conf']['localData']['storeId'])) ?
            $options['conf']['localData']['storeId'] :
            null
        );
        $bookingId = ((isset($options['conf']) && isset($options['conf']['localData']) && isset($options['conf']['localData']['bookingId'])) ?
            $options['conf']['localData']['bookingId'] :
            null
        );
        $qb->innerJoin('bookingService.bookingObj',
            'booking',
            'WITH',
            '(booking.isEnabled = 1)'
            . (empty($storeId) ? '' : (' AND (booking.storeObj = ' . $storeId . ')')) // Store criteria
            . (empty($bookingId) ? '' : (' AND (booking.id = ' . $bookingId . ')')) // Booking criteria is used here
        );

        // Get service
        $qb->innerJoin('bookingService.serviceObj',
            'service'
        );

        // Get icon
        $qb->innerJoin('service.appIconObj',
            'icon'
        );

        // Get document invoice detail
        $qb->leftJoin('AccountingBundle\Entity\\'.$entityContextUC.'DocumentInvoiceDetail',
            'documentInvoiceDetail',
            'WITH',
            'documentInvoiceDetail.bookingServicePriceObj = '.$localTable.'.id'
        );

        // Get document
        $qb->leftJoin('documentInvoiceDetail.'.$entityContext.'DocumentObj',
            'document',
            'WITH',
            'document.isEnabled = 1' // Only enabled documents (not canceled)
        );

        // Get document type
        $qb->leftJoin('document.'.$entityContext.'DocumentTypeObj',
            'documentType'
        );

        // Get entity
        // To get the entity type info (needs to be here because dependency resolver is disabled)
        switch ($entityContext) {
            case 'client':
                $qb->innerJoin('booking.clientObj',
                    $entityContext
                );
                break;
            case 'supplier':
                $qb->innerJoin('bookingService.supplierObj',
                    $entityContext
                );
                break;
        }
        $qb->innerJoin($entityContext.'.entityObj',
            $entityContext.'_entity'
        );

        // Group by id for "SUM"
        $qb->groupBy($localTable . '.id');

        // Remove registries already invoiced
        $qb->andHaving("notInvoicedTotal <> 0");

        $objectsArr = $this->executeQueryBuilder($qb);

        /* Check here manually the notInvoicedQuantity, because in doctrine we cannot use:
        "@notInvoicedQuantity := (" . $localTable . ".quantity "
        . " - "
        . "(CASE WHEN (documentInvoiceDetail.id IS NOT NULL) THEN (SUM(documentInvoiceDetail.quantity)) ELSE (0) END))",
        '@notInvoicedQuantity AS notInvoicedQuantity',
        */
        foreach ($objectsArr as &$obj) {
            if ($obj['notInvoicedQuantity'] < 1) {
                $obj['notInvoicedQuantity'] = 1;
            }
        }

        return $objectsArr;
    }
}
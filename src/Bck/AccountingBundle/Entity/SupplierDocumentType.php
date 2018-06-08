<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\SupplierDocumentTypeRepository")
 * @ORM\Table(name="supplierDocumentType")
 */
class SupplierDocumentType extends BaseDocumentType {}
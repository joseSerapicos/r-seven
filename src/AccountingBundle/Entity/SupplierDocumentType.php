<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\SupplierDocumentTypeRepository")
 * @ORM\Table(name="supplierDocumentType")
 */
class SupplierDocumentType extends BaseDocumentType {}
<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\EntityDocumentTypeRepository")
 * @ORM\Table(name="entityDocumentType")
 */
class EntityDocumentType extends BaseDocumentType {}
<?php
namespace AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\ClientDocumentTypeRepository")
 * @ORM\Table(name="clientDocumentType")
 */
class ClientDocumentType extends BaseDocumentType {}
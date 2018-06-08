<?php
namespace Bck\AccountingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AccountingBundle\Entity\ClientDocumentTypeRepository")
 * @ORM\Table(name="clientDocumentType")
 */
class ClientDocumentType extends BaseDocumentType {}
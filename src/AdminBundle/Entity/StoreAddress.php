<?php
namespace AdminBundle\Entity;

use AppBundle\Entity\BaseAddress;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AdminBundle\Entity\StoreAddressRepository")
 * @ORM\Table(name="storeAddress")
 */
class StoreAddress extends BaseAddress {}

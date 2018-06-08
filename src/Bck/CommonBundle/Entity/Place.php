<?php
namespace Bck\CommonBundle\Entity;

use Bck\SysadminBundle\Entity\BasePlace;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Bck\CommonBundle\Entity\PlaceRepository")
 * @ORM\Table(name="place")
 *
 * This entity represent a place, can be a city, an airport, etc.
 * We use this entity instead of "app_city", so we can cover multiple situations,
 * like airports that no belongs to any city, location of ancient cities and monuments, tourist villages, etc.
 */
class Place extends BasePlace {
}

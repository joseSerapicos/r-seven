<?php
namespace Bck\SysadminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Bck\SysadminBundle\Entity\PlaceRepository")
 * @ORM\Table(name="app_place")
 *
 * This entity represent a place, can be a city, an airport, etc.
 * We use this entity instead of "app_city", so we can cover multiple situations,
 * like airports that no belongs to any city, location of ancient cities and monuments, tourist villages, etc.
 */
class Place extends BasePlace {
}

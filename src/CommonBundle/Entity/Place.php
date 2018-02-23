<?php
namespace CommonBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="CommonBundle\Entity\PlaceRepository")
 * @ORM\Table(name="place",
 *     indexes={
 *         @ORM\Index(name="idx_place_name", columns={"name"}),
 *         @ORM\Index(name="idx_place_iataCode", columns={"iataCode"})
 *     }
 * )
 *
 * This entity represent a place, can be a city, an airport, etc.
 */
class Place extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Country")
     * @ORM\JoinColumn(name="fk_country", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $countryObj;

    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name"})
     *
     * Note: Name can be repeated by country.
     */
    protected $name;

    /**
     * @ORM\Column(name="type", type="string", length=16, nullable=true, unique=false, options={"comment":"Type of place"})
     *
     * (Airport, bus station, train station, etc.)
     */
    protected $type;

    /**
     * @ORM\Column(name="iataCode", type="string", length=3, nullable=true, unique=false, options={"comment":"IATA code"})
     */
    protected $iataCode;

    /**
     * @ORM\Column(name="isoCode", type="string", length=5, nullable=true, unique=false, options={"comment":"ISO code"})
     */
    protected $isoCode;

    /**
     * @ORM\Column(name="icaoCode", type="string", length=4, nullable=true, unique=false, options={"comment":"ICAO code"})
     */
    protected $icaoCode;

    /**
     * @ORM\Column(name="latitude", type="string", length=16, nullable=true, unique=false, options={"comment":"Latitude"})
     */
    protected $latitude;

    /**
     * @ORM\Column(name="longitude", type="string", length=16, nullable=true, unique=false, options={"comment":"Longitude"})
     */
    protected $longitude;

    /**
     * @ORM\Column(name="elevation", type="smallint", nullable=true, unique=false, options={"unsigned":true, "comment":"Elevation"})
     */
    protected $elevation;

    /**
     * @ORM\Column(name="timezone", type="string", length=32, nullable=true, unique=false, options={"comment":"Timezone"})
     */
    protected $timezone;


    /**
     * Set countryObj
     *
     * @param \CommonBundle\Entity\Country $countryObj
     *
     * @return Place
     */
    public function setCountryObj(\CommonBundle\Entity\Country $countryObj)
    {
        $this->countryObj = $countryObj;

        return $this;
    }

    /**
     * Get countryObj
     *
     * @return \CommonBundle\Entity\Country
     */
    public function getCountryObj()
    {
        return $this->countryObj;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Place
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return Place
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set iataCode
     *
     * @param string $iataCode
     *
     * @return Place
     */
    public function setIataCode($iataCode)
    {
        $this->iataCode = $iataCode;

        return $this;
    }

    /**
     * Get iataCode
     *
     * @return string
     */
    public function getIataCode()
    {
        return $this->iataCode;
    }

    /**
     * Set isoCode
     *
     * @param string $isoCode
     *
     * @return Place
     */
    public function setIsoCode($isoCode)
    {
        $this->isoCode = $isoCode;

        return $this;
    }

    /**
     * Get isoCode
     *
     * @return string
     */
    public function getIsoCode()
    {
        return $this->isoCode;
    }

    /**
     * Set icaoCode
     *
     * @param string $icaoCode
     *
     * @return Place
     */
    public function setIcaoCode($icaoCode)
    {
        $this->icaoCode = $icaoCode;

        return $this;
    }

    /**
     * Get icaoCode
     *
     * @return string
     */
    public function getIcaoCode()
    {
        return $this->icaoCode;
    }

    /**
     * Set latitude
     *
     * @param string $latitude
     *
     * @return Place
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * Get latitude
     *
     * @return string
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Set longitude
     *
     * @param string $longitude
     *
     * @return Place
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * Get longitude
     *
     * @return string
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Set elevation
     *
     * @param string $elevation
     *
     * @return Place
     */
    public function setElevation($elevation)
    {
        $this->elevation = $elevation;

        return $this;
    }

    /**
     * Get elevation
     *
     * @return string
     */
    public function getElevation()
    {
        return $this->elevation;
    }

    /**
     * Set timezone
     *
     * @param string $timezone
     *
     * @return Place
     */
    public function setTimezone($timezone)
    {
        $this->timezone = $timezone;

        return $this;
    }

    /**
     * Get timezone
     *
     * @return string
     */
    public function getTimezone()
    {
        return $this->timezone;
    }

    /**
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        return ($this->getIataCode() . ' (' . $this->getName() . ' - ' . $this->getCountryObj()->getName() . ')');
    }
}

<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseAddressRepository")
 */
class BaseAddress extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=true, unique=false, options={"comment":"Name and description of contact"})
     */
    protected $name;

    /**
     * @ORM\Column(name="street1", type="string", length=256, nullable=false, unique=false, options={"comment":"Street line 1"})
     */
    protected $street1;

    /**
     * @ORM\Column(name="street2", type="string", length=256, nullable=true, unique=false, options={"comment":"Street line 2"})
     */
    protected $street2;

    /**
     * @ORM\Column(name="city", type="string", length=64, nullable=false, unique=false, options={"comment":"City"})
     */
    protected $city;

    /**
     * @ORM\Column(name="postCode", type="string", length=12, nullable=false, unique=false, options={"comment":"Post code"})
     */
    protected $postCode;

    /**
     * @ORM\Column(name="region", type="string", length=64, nullable=true, unique=false, options={"comment":"Region"})
     */
    protected $region;

    /**
     * @ORM\Column(name="country", type="string", length=64, nullable=false, unique=false, options={"comment":"Country"})
     */
    protected $country;


    /**
     * Set name
     *
     * @param string $name
     * @return $this
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
     * Set street1
     *
     * @param string $street1
     * @return $this
     */
    public function setStreet1($street1)
    {
        $this->street1 = $street1;

        return $this;
    }

    /**
     * Get street1
     *
     * @return string
     */
    public function getStreet1()
    {
        return $this->street1;
    }

    /**
     * Set street2
     *
     * @param string $street2
     * @return $this
     */
    public function setStreet2($street2)
    {
        $this->street2 = $street2;

        return $this;
    }

    /**
     * Get street2
     *
     * @return string
     */
    public function getStreet2()
    {
        return $this->street2;
    }

    /**
     * Set city
     *
     * @param string $city
     * @return $this
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set postCode
     *
     * @param string $postCode
     * @return $this
     */
    public function setPostCode($postCode)
    {
        $this->postCode = $postCode;

        return $this;
    }

    /**
     * Get postCode
     *
     * @return string
     */
    public function getPostCode()
    {
        return $this->postCode;
    }

    /**
     * Set region
     *
     * @param string $region
     * @return $this
     */
    public function setRegion($region)
    {
        $this->region = $region;

        return $this;
    }

    /**
     * Get region
     *
     * @return string
     */
    public function getRegion()
    {
        return $this->region;
    }

    /**
     * Set country
     *
     * @param string $country
     * @return $this
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }
}

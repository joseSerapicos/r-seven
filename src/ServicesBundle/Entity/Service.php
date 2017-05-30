<?php

namespace ServicesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Service\HelperService;


/**
 * @ORM\Entity(repositoryClass="ServicesBundle\Entity\ServiceRepository")
 * @ORM\Table(name="service")
 */
class Service extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="\SysadminBundle\Entity\Icon")
     * @ORM\JoinColumn(name="fkApp_icon", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $appIconObj;

    /**
     * @ORM\ManyToOne(targetEntity="\EntitiesBundle\Entity\Supplier")
     * @ORM\JoinColumn(name="fk_supplier", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $supplierObj;

    /**
     * @ORM\ManyToOne(targetEntity="\AccountingBundle\Entity\VatCode")
     * @ORM\JoinColumn(name="fk_vatCode", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $vatCodeObj;

    /**
     * @ORM\Column(name="name", type="string", length=64, nullable=false, unique=true, options={"comment":"Name"})
     */
    protected $name;

    /**
     * @ORM\Column(name="type", type="string", length=16, nullable=true, unique=false, options={"comment":"Type of service"})
     */
    protected $type; // [TRAVEL]

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="isEnabledAvailability", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables availability management"})
     */
    protected $isEnabledAvailability;

    /**
     * @ORM\Column(name="isEnabledPrice", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables price management"})
     */
    protected $isEnabledPrice;

    /**
     * @ORM\Column(name="isEnabledAllot", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Enables allot/allot management"})
     */
    protected $isEnabledAllot;

    /**
     * @ORM\Column(name="thumbnail", type="string", length=128, nullable=true, unique=false, options={"comment":"Thumbnail"})
     */
    protected $thumbnail;

    // Extra fields to handle file upload
    private $filesRepository;


    /**
     * Set appIconObj
     *
     * @param \SysadminBundle\Entity\Icon $appIconObj
     *
     * @return Service
     */
    public function setAppIconObj(\SysadminBundle\Entity\Icon $appIconObj = null)
    {
        $this->appIconObj = $appIconObj;

        return $this;
    }

    /**
     * Get appIconObj
     *
     * @return \SysadminBundle\Entity\Icon
     */
    public function getAppIconObj()
    {
        return $this->appIconObj;
    }

    /**
     * Set vatCodeObj
     *
     * @param \AccountingBundle\Entity\VatCode $vatCodeObj
     *
     * @return Service
     */
    public function setVatCodeObj(\AccountingBundle\Entity\VatCode $vatCodeObj)
    {
        $this->vatCodeObj = $vatCodeObj;

        return $this;
    }

    /**
     * Get vatCodeObj
     *
     * @return \AccountingBundle\Entity\VatCode
     */
    public function getVatCodeObj()
    {
        return $this->vatCodeObj;
    }

    /**
     * Set supplierObj
     *
     * @param \EntitiesBundle\Entity\Supplier $supplierObj
     *
     * @return $this
     */
    public function setSupplierObj(\EntitiesBundle\Entity\Supplier $supplierObj)
    {
        $this->supplierObj = $supplierObj;
        return $this;
    }

    /**
     * Get supplierObj
     *
     * @return \EntitiesBundle\Entity\Supplier
     */
    public function getSupplierObj()
    {
        return $this->supplierObj;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return $this
     */
    public function setType($type)
    {
        if (!empty($type) && !in_array($type, array("TRAVEL"))) {
            throw new \InvalidArgumentException("Invalid type");
        }
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
     * Set name
     *
     * @param string $name
     *
     * @return Service
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
     * Set description
     *
     * @param string $description
     *
     * @return Service
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set isEnabledAvailability
     *
     * @param boolean $isEnabledAvailability
     *
     * @return Service
     */
    public function setIsEnabledAvailability($isEnabledAvailability)
    {
        $this->isEnabledAvailability = $isEnabledAvailability;

        return $this;
    }

    /**
     * Get isEnabledAvailability
     *
     * @return boolean
     */
    public function getIsEnabledAvailability()
    {
        return $this->isEnabledAvailability;
    }

    /**
     * Set isEnabledPrice
     *
     * @param boolean $isEnabledPrice
     *
     * @return Service
     */
    public function setIsEnabledPrice($isEnabledPrice)
    {
        $this->isEnabledPrice = $isEnabledPrice;

        return $this;
    }

    /**
     * Get isEnabledPrice
     *
     * @return boolean
     */
    public function getIsEnabledPrice()
    {
        return $this->isEnabledPrice;
    }

    /**
     * Set isEnabledAllot
     *
     * @param boolean $isEnabledAllot
     *
     * @return Service
     */
    public function setIsEnabledAllot($isEnabledAllot)
    {
        $this->isEnabledAllot = $isEnabledAllot;

        return $this;
    }

    /**
     * Get isEnabledAllot
     *
     * @return boolean
     */
    public function getIsEnabledAllot()
    {
        return $this->isEnabledAllot;
    }

    /**
     * Set thumbnail
     * @param string $thumbnail
     * @return $this
     */
    public function setThumbnail($thumbnail)
    {
        $this->thumbnail = $thumbnail;
        return $this;
    }

    /**
     * Get thumbnail
     * @return string
     */
    public function getThumbnail()
    {
        return $this->thumbnail;
    }


    /**
     * @ORM\PreRemove()
     *
     * Prepare to free resources. Save path of uploads to remove after delete the object (after delete "id" is
     * no more available to determine the path)
     * @return $this
     */
    public function preRemove()
    {
        // Save files repository to free resources after delete object
        $this->filesRepository = (empty($this->getId())
            ? null
            : (HelperService::getGlobalVar('filesRepository') . 'services/' . $this->getId())
        );

        return $this;
    }

    /**
     * @ORM\PostRemove()
     *
     * Remove entity files and dir
     * @return $this
     */
    public function postRemove()
    {
        // Remove entity directory
        if ($this->filesRepository) {
            HelperService::rmDirR($this->filesRepository);
        }

        return $this;
    }

    /**
     * Overrides parent method.
     * @return mixed
     */
    public function __toString()
    {
        return (
            '<i class="fa ' . $this->getAppIconObj()->getIcon() . '"></i> '
            . $this->getName()
            . ' (' . $this->getId() . ')'
        );
    }
}

<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseCurrentAccountRepository")
 */
class BaseCurrentAccount extends BaseEntity {
    /**
     * Put document type object here.
     */

    /**
     * Put entity object here.
     */

    /**
     * @ORM\Column(name="code", type="string", length=24, nullable=false, unique=false, options={"comment":"Number/Code"})
     *
     * Add unique constraint with document type: (name="unq_baseCurrentAccount_code", columns={"fk_documentType", "code"})
     */
    protected $code;

    /**
     * @ORM\Column(name="date", type="date", nullable=false, unique=false, options={"comment":"Date of document"})
     */
    protected $date;

    /**
     * @ORM\Column(name="dueDate", type="date", nullable=true, unique=false, options={"comment":"Due date of document"})
     */
    protected $dueDate;

    /**
     * @ORM\Column(name="comments", type="string", length=256, nullable=true, unique=false, options={"comment":"Comments"})
     */
    protected $comments;

    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=false, unique=false, onDelete="RESTRICT")
     */
    protected $storeObj;

    /**
     * @ORM\Column(name="storeLegalName", type="string", length=64, nullable=false, unique=false, options={"comment":"Static store legal name"})
     */
    protected $storeLegalName;

    /**
     * @ORM\Column(name="storeTaxNumber", type="string", length=12, nullable=false, unique=false, options={"comment":"Static store tax number"})
     */
    protected $storeTaxNumber;

    /**
     * @ORM\Column(name="storeStreet1", type="string", length=256, nullable=false, unique=false, options={"comment":"Static store street line 1"})
     */
    protected $storeStreet1;

    /**
     * @ORM\Column(name="storeStreet2", type="string", length=256, nullable=true, unique=false, options={"comment":"Static store street line 2"})
     */
    protected $storeStreet2;

    /**
     * @ORM\Column(name="storeCity", type="string", length=64, nullable=false, unique=false, options={"comment":"Static store city"})
     */
    protected $storeCity;

    /**
     * @ORM\Column(name="storePostCode", type="string", length=12, nullable=false, unique=false, options={"comment":"Static store post code"})
     */
    protected $storePostCode;

    /**
     * @ORM\Column(name="storeRegion", type="string", length=64, nullable=true, unique=false, options={"comment":"Static store region"})
     */
    protected $storeRegion;

    /**
     * @ORM\Column(name="storeCountry", type="string", length=64, nullable=false, unique=false, options={"comment":"Static store country"})
     */
    protected $storeCountry;

    /**
     * @ORM\Column(name="entityLegalName", type="string", length=128, nullable=true, unique=false, options={"comment":"Legal Name"})
     */
    protected $entityLegalName;

    /**
     * @ORM\Column(name="entityTaxNumber", type="string", length=16, nullable=true, unique=false, options={"comment":"Tax code"})
     */
    protected $entityTaxNumber;

    /**
     * @ORM\Column(name="entityStreet1", type="string", length=256, nullable=false, unique=false, options={"comment":"Static entity street line 1"})
     */
    protected $entityStreet1;

    /**
     * @ORM\Column(name="entityStreet2", type="string", length=256, nullable=true, unique=false, options={"comment":"Static entity street line 2"})
     */
    protected $entityStreet2;

    /**
     * @ORM\Column(name="entityCity", type="string", length=64, nullable=false, unique=false, options={"comment":"Static entity city"})
     */
    protected $entityCity;

    /**
     * @ORM\Column(name="entityPostCode", type="string", length=12, nullable=false, unique=false, options={"comment":"Static entity post code"})
     */
    protected $entityPostCode;

    /**
     * @ORM\Column(name="entityRegion", type="string", length=64, nullable=true, unique=false, options={"comment":"Static entity region"})
     */
    protected $entityRegion;

    /**
     * @ORM\Column(name="entityCountry", type="string", length=64, nullable=false, unique=false, options={"comment":"Static entity country"})
     */
    protected $entityCountry;

    /**
     * @ORM\Column(name="subTotal", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Sub total (total without VAT)"})
     */
    protected $subTotal;

    /**
     * @ORM\Column(name="totalVat", type="decimal", scale=2, nullable=false, unique=false, options={"default":"0", "comment":"Total VAT"})
     */
    protected $totalVat;


    /**
     * Set code
     * @param string $code
     * @return $this
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set comments
     *
     * @param string $comments
     *
     * @return $this
     */
    public function setComments($comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get comments
     *
     * @return string
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return $this
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set dueDate
     *
     * @param \DateTime $dueDate
     *
     * @return $this
     */
    public function setDueDate($dueDate)
    {
        $this->dueDate = $dueDate;

        return $this;
    }

    /**
     * Get dueDate
     *
     * @return \DateTime
     */
    public function getDueDate()
    {
        return $this->dueDate;
    }

    /**
     * Set storeObj
     * @param \AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj = null)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \AdminBundle\Entity\Store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Set storeLegalName
     * @param string $storeLegalName
     * @return $this
     */
    public function setStoreLegalName($storeLegalName)
    {
        $this->storeLegalName = $storeLegalName;
        return $this;
    }

    /**
     * Get storeLegalName
     * @return string
     */
    public function getStoreLegalName()
    {
        return $this->storeLegalName;
    }

    /**
     * Set storeTaxNumber
     * @param string $storeTaxNumber
     * @return $this
     */
    public function setStoreTaxNumber($storeTaxNumber)
    {
        $this->storeTaxNumber = $storeTaxNumber;
        return $this;
    }

    /**
     * Get storeTaxNumber
     * @return string
     */
    public function getStoreTaxNumber()
    {
        return $this->storeTaxNumber;
    }

    /**
     * Set storeStreet1
     *
     * @param string $storeStreet1
     * @return $this
     */
    public function setStoreStreet1($storeStreet1)
    {
        $this->storeStreet1 = $storeStreet1;

        return $this;
    }

    /**
     * Get storeStreet1
     *
     * @return string
     */
    public function getStoreStreet1()
    {
        return $this->storeStreet1;
    }

    /**
     * Set storeStreet2
     *
     * @param string $storeStreet2
     * @return $this
     */
    public function setStoreStreet2($storeStreet2)
    {
        $this->storeStreet2 = $storeStreet2;

        return $this;
    }

    /**
     * Get storeStreet2
     *
     * @return string
     */
    public function getStoreStreet2()
    {
        return $this->storeStreet2;
    }

    /**
     * Set storeCity
     *
     * @param string $storeCity
     * @return $this
     */
    public function setStoreCity($storeCity)
    {
        $this->storeCity = $storeCity;

        return $this;
    }

    /**
     * Get storeCity
     *
     * @return string
     */
    public function getStoreCity()
    {
        return $this->storeCity;
    }

    /**
     * Set storePostCode
     *
     * @param string $storePostCode
     * @return $this
     */
    public function setStorePostCode($storePostCode)
    {
        $this->storePostCode = $storePostCode;

        return $this;
    }

    /**
     * Get storePostCode
     *
     * @return string
     */
    public function getStorePostCode()
    {
        return $this->storePostCode;
    }

    /**
     * Set storeRegion
     *
     * @param string $storeRegion
     * @return $this
     */
    public function setStoreRegion($storeRegion)
    {
        $this->storeRegion = $storeRegion;

        return $this;
    }

    /**
     * Get storeRegion
     *
     * @return string
     */
    public function getStoreRegion()
    {
        return $this->storeRegion;
    }

    /**
     * Set storeCountry
     *
     * @param string $storeCountry
     * @return $this
     */
    public function setStoreCountry($storeCountry)
    {
        $this->storeCountry = $storeCountry;

        return $this;
    }

    /**
     * Get storeCountry
     *
     * @return string
     */
    public function getStoreCountry()
    {
        return $this->storeCountry;
    }

    /**
     * Set entityLegalName
     *
     * @param string $entityLegalName
     *
     * @return $this
     */
    public function setEntityLegalName($entityLegalName)
    {
        $this->entityLegalName = $entityLegalName;

        return $this;
    }

    /**
     * Get entityLegalName
     *
     * @return string
     */
    public function getEntityLegalName()
    {
        return $this->entityLegalName;
    }

    /**
     * Set entityTaxNumber
     *
     * @param string $entityTaxNumber
     *
     * @return $this
     */
    public function setEntityTaxNumber($entityTaxNumber)
    {
        $this->entityTaxNumber = $entityTaxNumber;

        return $this;
    }

    /**
     * Get entityTaxNumber
     *
     * @return string
     */
    public function getEntityTaxNumber()
    {
        return $this->entityTaxNumber;
    }

    /**
     * Set entityStreet1
     *
     * @param string $entityStreet1
     * @return $this
     */
    public function setEntityStreet1($entityStreet1)
    {
        $this->entityStreet1 = $entityStreet1;

        return $this;
    }

    /**
     * Get entityStreet1
     *
     * @return string
     */
    public function getEntityStreet1()
    {
        return $this->entityStreet1;
    }

    /**
     * Set entityStreet2
     *
     * @param string $entityStreet2
     * @return $this
     */
    public function setEntityStreet2($entityStreet2)
    {
        $this->entityStreet2 = $entityStreet2;

        return $this;
    }

    /**
     * Get entityStreet2
     *
     * @return string
     */
    public function getEntityStreet2()
    {
        return $this->entityStreet2;
    }

    /**
     * Set entityCity
     *
     * @param string $entityCity
     * @return $this
     */
    public function setEntityCity($entityCity)
    {
        $this->entityCity = $entityCity;

        return $this;
    }

    /**
     * Get entityCity
     *
     * @return string
     */
    public function getEntityCity()
    {
        return $this->entityCity;
    }

    /**
     * Set entityPostCode
     *
     * @param string $entityPostCode
     * @return $this
     */
    public function setEntityPostCode($entityPostCode)
    {
        $this->entityPostCode = $entityPostCode;

        return $this;
    }

    /**
     * Get entityPostCode
     *
     * @return string
     */
    public function getEntityPostCode()
    {
        return $this->entityPostCode;
    }

    /**
     * Set entityRegion
     *
     * @param string $entityRegion
     * @return $this
     */
    public function setEntityRegion($entityRegion)
    {
        $this->entityRegion = $entityRegion;

        return $this;
    }

    /**
     * Get entityRegion
     *
     * @return string
     */
    public function getEntityRegion()
    {
        return $this->entityRegion;
    }

    /**
     * Set entityCountry
     *
     * @param string $entityCountry
     * @return $this
     */
    public function setEntityCountry($entityCountry)
    {
        $this->entityCountry = $entityCountry;

        return $this;
    }

    /**
     * Get entityCountry
     *
     * @return string
     */
    public function getEntityCountry()
    {
        return $this->entityCountry;
    }

    /**
     * Set subTotal
     * @param string $subTotal
     * @return $this
     */
    public function setSubTotal($subTotal)
    {
        $this->subTotal = $subTotal;
        return $this;
    }

    /**
     * Get subTotal
     * @return string
     */
    public function getSubTotal()
    {
        return $this->subTotal;
    }

    /**
     * Set totalVat
     * @param string $totalVat
     * @return $this
     */
    public function setTotalVat($totalVat)
    {
        $this->totalVat = $totalVat;
        return $this;
    }

    /**
     * Get totalVat
     * @return string
     */
    public function getTotalVat()
    {
        return $this->totalVat;
    }

    /**
     * Get total
     * @return string
     */
    public function getTotal()
    {
        // For direct queries use "SUM()"
        return round($this->subTotal + $this->totalVat, 2);
    }
}
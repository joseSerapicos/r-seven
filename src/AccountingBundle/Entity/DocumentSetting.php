<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="AccountingBundle\Entity\DocumentSettingRepository")
 * @ORM\Table(name="documentSetting",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unq_documentSetting", columns={"fk_store", "fk_documentType"})
 *     }
 * )
 */
class DocumentSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     */
    protected $storeObj;

    /**
     * @ORM\ManyToOne(targetEntity="DocumentType")
     * @ORM\JoinColumn(name="fk_documentType", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $documentTypeObj;

    /**
     * @ORM\Column(name="seriesPrefix", type="string", length=8, nullable=true, unique=false, options={"comment":"Series prefix"})
     */
    protected $seriesPrefix;

    /**
     * @ORM\Column(name="seriesNumber", type="bigint", nullable=false, unique=false, options={"unsigned":true, "default":0, "comment":"Series number"})
     */
    protected $seriesNumber;


    /**
     * Set storeObj
     * @param \AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \AdminBundle\Entity\store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Set documentTypeObj
     * @param \AccountingBundle\Entity\DocumentType $documentTypeObj
     * @return $this
     */
    public function setDocumentTypeObj(\AccountingBundle\Entity\DocumentType $documentTypeObj)
    {
        $this->documentTypeObj = $documentTypeObj;
        return $this;
    }

    /**
     * Get documentTypeObj
     * @return \AccountingBundle\Entity\DocumentType
     */
    public function getDocumentTypeObj()
    {
        return $this->documentTypeObj;
    }

    /**
     * Set seriesPrefix
     * @param $seriesPrefix
     * @return $this
     */
    public function setSeriesPrefix($seriesPrefix)
    {
        $this->seriesPrefix = $seriesPrefix;
        return $this;
    }

    /**
     * Get seriesPrefix
     * @return mixed
     */
    public function getSeriesPrefix()
    {
        return $this->seriesPrefix;
    }

    /**
     * Set seriesNumber
     * @param $seriesNumber
     * @return $this
     */
    public function setSeriesNumber($seriesNumber)
    {
        $this->seriesNumber = $seriesNumber;
        return $this;
    }

    /**
     * Get seriesNumber
     * @return mixed
     */
    public function getSeriesNumber()
    {
        return $this->seriesNumber;
    }
}
<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseDocumentTypeSettingRepository")
 */
class BaseDocumentTypeSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=false, onDelete="CASCADE")
     */
    protected $storeObj;

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
    public function setStoreObj(\AdminBundle\Entity\Store $storeObj = null)
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
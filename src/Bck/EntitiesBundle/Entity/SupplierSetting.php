<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\EntitiesBundle\Entity\SupplierSettingRepository")
 * @ORM\Table(name="supplierSetting")
 */
class SupplierSetting extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="Bck\AdminBundle\Entity\Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=true, unique=true, onDelete="CASCADE")
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
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\Bck\AdminBundle\Entity\Store $storeObj = null)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \Bck\AdminBundle\Entity\store
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
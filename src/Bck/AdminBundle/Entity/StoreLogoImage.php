<?php
namespace Bck\AdminBundle\Entity;

use AppBundle\Entity\BaseImage;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass="Bck\AdminBundle\Entity\StoreLogoImageRepository")
 * @ORM\Table(name="storeLogoImage")
 */
class StoreLogoImage extends BaseImage {
    /**
     * @ORM\ManyToOne(targetEntity="Store")
     * @ORM\JoinColumn(name="fk_store", referencedColumnName="id", nullable=false, unique=false, onDelete="CASCADE")
     */
    protected $storeObj;

    /**
     * Set storeObj
     * @param \Bck\AdminBundle\Entity\Store $storeObj
     * @return $this
     */
    public function setStoreObj(\Bck\AdminBundle\Entity\Store $storeObj)
    {
        $this->storeObj = $storeObj;
        return $this;
    }

    /**
     * Get storeObj
     * @return \Bck\AdminBundle\Entity\Store
     */
    public function getStoreObj()
    {
        return $this->storeObj;
    }

    /**
     * Get Image Variations
     * Defines an array of image variations that should be handled by class automatically
     * @return array
     */
    protected function getImageVariations() {
        return array(
            'thumbnail_128', // Thumbnail for gallery
            'resize_96' // Thumbnail for gallery
        );
    }
}

<?php
namespace Bck\EntitiesBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * Fake entity to handle easy with entity contacts form
 */
class EntityContacts extends BaseEntity {

    protected $entityObj;

    protected $entityAddressObj;

    protected $entityPhoneObj;

    protected $entityEmailObj;


    /**
     * Set entityObj
     * @param \Bck\EntitiesBundle\Entity\Entity $entityObj
     * @return object
     */
    public function setEntityObj(\Bck\EntitiesBundle\Entity\Entity $entityObj = null)
    {
        $this->entityObj = $entityObj;
        return $this;
    }

    /**
     * Get entityObj
     * @return \Bck\EntitiesBundle\Entity\Entity
     */
    public function getEntityObj()
    {
        return $this->entityObj;
    }

    /**
     * Set entityAddressObj
     * @param \Bck\EntitiesBundle\Entity\EntityAddress $entityAddressObj
     * @return object
     */
    public function setEntityAddressObj(\Bck\EntitiesBundle\Entity\EntityAddress $entityAddressObj = null)
    {
        $this->entityAddressObj = $entityAddressObj;
        return $this;
    }

    /**
     * Get entityAddressObj
     * @return \Bck\EntitiesBundle\Entity\EntityAddress
     */
    public function getEntityAddressObj()
    {
        return $this->entityAddressObj;
    }

    /**
     * Set entityPhoneObj
     * @param \Bck\EntitiesBundle\Entity\EntityPhone $entityPhoneObj
     * @return object
     */
    public function setEntityPhoneObj(\Bck\EntitiesBundle\Entity\EntityPhone $entityPhoneObj = null)
    {
        $this->entityPhoneObj = $entityPhoneObj;
        return $this;
    }

    /**
     * Get entityPhoneObj
     * @return \Bck\EntitiesBundle\Entity\EntityPhone
     */
    public function getEntityPhoneObj()
    {
        return $this->entityPhoneObj;
    }

    /**
     * Set entityEmailObj
     * @param \Bck\EntitiesBundle\Entity\EntityEmail $entityEmailObj
     * @return object
     */
    public function setEntityEmailObj(\Bck\EntitiesBundle\Entity\EntityEmail $entityEmailObj = null)
    {
        $this->entityEmailObj = $entityEmailObj;
        return $this;
    }

    /**
     * Get entityEmailObj
     * @return \Bck\EntitiesBundle\Entity\EntityEmail
     */
    public function getEntityEmailObj()
    {
        return $this->entityEmailObj;
    }
}
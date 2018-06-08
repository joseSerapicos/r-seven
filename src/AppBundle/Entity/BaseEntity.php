<?php
namespace AppBundle\Entity;

use AppBundle\Service\HelperService;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseEntityRepository")
 */
abstract class BaseEntity {
    /**
     * @ORM\Id
     * @ORM\Column(name="id", type="integer", nullable=false, unique=true, options={"unsigned":true, "comment":"Column row identifier"})
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(name="insertTime", type="datetime", nullable=false, unique=false, options={"comment":"Date and time insertion"})
     */
    protected $insertTime;

    /**
     * @ORM\Column(name="insertUser", type="string", length=64, nullable=false, unique=false, options={"comment":"User insertion"})
     */
    protected $insertUser;

    /**
     * @ORM\Column(name="isEnabled", type="boolean", nullable=false, unique=false, options={"default":0, "comment":"Determines whether the registry is enabled"})
     */
    protected $isEnabled;


    /**
     * Set id
     * This method is used to set a temporary id when object is stored in session
     * @param string $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Get id
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set insertTime
     * @param \DateTime $insertTime
     * @return $this
     */
    public function setInsertTime($insertTime)
    {
        $this->insertTime = $insertTime;
        return $this;
    }

    /**
     * Get insertTime
     * @return \DateTime 
     */
    public function getInsertTime()
    {
        return $this->insertTime;
    }

    /**
     * Set insertUser
     * @param string $insertUser
     * @return $this
     */
    public function setInsertUser($insertUser)
    {
        $this->insertUser = $insertUser;
        return $this;
    }

    /**
     * Get insertUser
     * @return string 
     */
    public function getInsertUser()
    {
        return $this->insertUser;
    }

    /**
     * Set isEnabled
     * @param boolean $isEnabled
     * @return $this
     */
    public function setIsEnabled($isEnabled)
    {
        $this->isEnabled = $isEnabled;
        return $this;
    }

    /**
     * Get isEnabled
     * @return boolean 
     */
    public function getIsEnabled()
    {
        return $this->isEnabled;
    }


    /* MAGIC METHODS */


    /**
     * Representation of object for dropdown (name/label for object)
     * @return mixed
     */
    public function __toString()
    {
        $code = (method_exists($this, 'getCode') ? $this->getCode() : null);
        $name = (method_exists($this, 'getName') ? $this->getName() : null);

        return (
            ($name ? $name : '')
            . ($code ? (' (' . $code . ')') : '')
        );
    }

    /**
     * Clone object
     */
    public function __clone()
    {
        $this->id = null;
    }


    /* NORMALIZERS */


    /**
     * Normalize date
     * @param $date
     * @return string
     */
    public function normalizeDate($date)
    {
        return $date instanceof \DateTime
            ? $date->format('Y-m-d')
            : $date;
    }

    /**
     * Normalize url
     * @param $url
     * @return string
     */
    public function normalizeUrl($url)
    {
        return substr($url, strpos($url, '/upload/'));
    }

    /**
     * Normalize datetime
     * @param $dateTime
     * @return string
     */
    public function normalizeDateTime($dateTime)
    {
        return $dateTime instanceof \DateTime
            ? $dateTime->format('Y-m-d H:i:s')
            : $dateTime;
    }

    /**
     * Normalize Symfony array collection
     * @param $arrayCollection
     * @return array
     */
    public function normalizeArrayCollection($arrayCollection)
    {
        $normalizedValue = array();
        $objArr = $arrayCollection->toArray();

        if (is_array($objArr)) {
            foreach ($objArr as $obj) {
                $normalizedValue[$obj->getId()] = $obj->getId();
            }
        }

        return $normalizedValue;
    }

    /**
     * Normalize password
     * @param $password
     * @return string
     */
    public function normalizePassword($password)
    {
        return str_repeat('*', strlen($password));
    }


    /* LANGUAGE METHODS */


    /**
     * Returns the name when the object is defined in multiple languages.
     * @return mixed
     */
    public function getName()
    {
        return $this->getAttrByLang();
    }

    /**
     * Returns the attribute when the object is defined in multiple languages.
     * @param $attributeUC (attribute to get in upper case)
     * @return mixed
     */
    public function getAttrByLang($attributeUC = 'Name')
    {
        // "en" it's used as reference to check if multiple languages is defined
        if (method_exists($this, 'get'.$attributeUC.'En')) {
            $langPrefix = HelperService::getGlobalVar('langPrefix');
            if (!empty($langPrefix)) { // Avoid infinity loop calling the original method if prefix is not defined
                $getMethodName = 'get' . $attributeUC . ucfirst($langPrefix);
                return $this->$getMethodName();
            }
        }

        return null;
    }


    /* COMMON METHODS */


    /**
     * Check password changes
     * @param $newPassword
     * @param $oldPassword
     * @return bool
     */
    protected function checkPasswordChanges($newPassword, $oldPassword)
    {
        if (
            // In some cases password can be null
            empty($newPassword)
            // Password is different even it's composed by "*" (not secure, but we don't restrict)
            || (strlen($newPassword) != strlen($oldPassword))
            // It's a dummy password (same length as original composed by "*")
            || (substr_count($newPassword, '*') !== strlen($newPassword))
        ) {
            return true;
        }

        return false;
    }
}

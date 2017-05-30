<?php
namespace AccountingBundle\Entity;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AccountingBundle\Entity\BaseCurrentAccountStoreInfoRepository")
 */
class BaseCurrentAccountStoreInfo extends BaseEntity
{
    /**
     * Put current account object here.
     */

    /**
     * @ORM\Column(name="description", type="string", length=256, nullable=true, unique=false, options={"comment":"Description"})
     */
    protected $description;

    /**
     * @ORM\Column(name="icon", type="string", length=20, nullable=true, unique=false, options={"comment":"Icon"})
     */
    protected $icon;
    protected static $iconMap = array(
        "LINK" => '',
        "FACEBOOK" => '',
        "TWITTER" => '',
        "INSTAGRAM" => '',
        "LINKEDIN" => '',
        "PHONE" => '',
        "EMAIL" => ''
    );


    /**
     * Set description
     * @param string $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     * Get description
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set icon
     * @param string $icon
     * @return $this
     */
    public function setIcon($icon)
    {
        $this->icon = (isset(self::$iconMap[$icon]) ? self::$iconMap[$icon] : null);
        return $this;
    }

    /**
     * Get icon
     * @return string
     */
    public function getIcon()
    {
        return $this->icon;
    }
}
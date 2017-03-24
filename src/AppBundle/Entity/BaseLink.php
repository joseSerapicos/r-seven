<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\LinkRepository")
 */
class BaseLink extends BaseEntity {
    /**
     * @ORM\ManyToOne(targetEntity="\SysadminBundle\Entity\Icon")
     * @ORM\JoinColumn(name="fkApp_icon", referencedColumnName="id", nullable=true, unique=false, onDelete="SET NULL")
     */
    protected $appIconObj;

    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=true, unique=false, options={"comment":"Name and description of link"})
     */
    protected $name;

    /**
     * @ORM\Column(name="link", type="string", length=64, nullable=false, unique=false, options={"comment":"Link url"})
     */
    protected $link;


    /**
     * Set appIconObj
     * @param integer $appIconObj
     * @return $this
     */
    public function setAppIconObj($appIconObj)
    {
        $this->appIconObj = $appIconObj;
        return $this;
    }

    /**
     * Get appIconObj
     * @return integer
     */
    public function getAppIconObj()
    {
        return $this->appIconObj;
    }

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
     * Set link
     *
     * @param string $link
     * @return $this
     */
    public function setLink($link)
    {
        $this->link = $link;

        return $this;
    }

    /**
     * Get link
     *
     * @return string
     */
    public function getLink()
    {
        return $this->link;
    }
}

<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseVideoRepository")
 */
class BaseVideo extends BaseFile {
    /**
     * @ORM\Column(name="source", type="string", length=8, nullable=false, unique=false, options={"comment":"Type of file"})
     */
    protected $source;

    /**
     * @ORM\Column(name="thumbnail", type="string", length=256, nullable=true, unique=false, options={"comment":"Video thumbnail"})
     */
    protected $thumbnail;

    /**
     * Set source
     * @param string $source
     * @return $this
     */
    public function setSource($source)
    {
        if(!in_array($source, array('file', 'youtube', 'vimeo'))) {
            throw new \InvalidArgumentException("Invalid source");
        }
        $this->source = $source;
        return $this;
    }

    /**
     * Get source
     * @return string
     */
    public function getSource()
    {
        return $this->source;
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
}

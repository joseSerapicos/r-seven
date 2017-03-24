<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseFileRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseFile extends BaseEntity {
    /**
     * @ORM\Column(name="name", type="string", length=128, nullable=false, unique=false, options={"comment":"Name of file for user"})
     */
    protected $name;

    /**
     * @ORM\Column(name="path", type="string", length=256, nullable=false, unique=false, options={"comment":"File path"})
     */
    protected $path;

    /**
     * @ORM\Column(name="extension", type="string", length=8, nullable=false, unique=false, options={"comment":"Extension of file"})
     */
    protected $extension;

    /**
     * @ORM\Column(name="size", type="integer", nullable=false, unique=false, options={"unsigned":true, "comment":"Web file path"})
     */
    protected $size;

    // Extra fields to handle file upload
    private $deprecatedFile;
    protected $filename;
    protected $dir;
    protected $file;

    /**
     * Set name
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
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set path
     * @param string $path
     * @return $this
     */
    public function setPath($path)
    {
        $this->path = $path;
        return $this;
    }

    /**
     * Get path
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Set extension
     * @param string $extension
     * @return $this
     */
    public function setExtension($extension)
    {
        $this->extension = $extension;
        return $this;
    }

    /**
     * Get extension
     * @return string
     */
    public function getExtension()
    {
        return $this->extension;
    }

    /**
     * Set size
     * @param string $size
     * @return $this
     */
    public function setSize($size)
    {
        $this->size = $size;
        return $this;
    }

    /**
     * Get extension
     * @return string
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set file
     * @param UploadedFile $file
     * @return $this
     */
    public function setFile(UploadedFile $file = null)
    {
        $this->file = $file;
        return $this;
    }

    /**
     * Get file
     * @return UploadedFile
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * Set dir
     * @param string $dir
     * @return $this
     */
    public function setDir($dir)
    {
        $this->dir = $dir;
        return $this;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     *
     * Pre upload
     * @return $this
     */
    public function preUpload()
    {
        // Check if we have an old file and
        // store the old path to delete the old file after the update
        $this->deprecatedFile = (empty($this->path)
            ? null
            : $this->path
        );

        if (!empty($this->file)) {
            $this->name = $this->file->getClientOriginalName();
            $this->extension = $this->file->guessExtension();
            $this->filename = (sha1(uniqid(mt_rand(), true))); // Generate a unique name
            $this->path = ($this->dir.$this->filename.'.'.$this->extension);
            $this->size = $this->file->getClientSize();

            $this->saveFile();
        }

        return $this;
    }

    /**
     * Save file in filesystem
     * @return $this
     */
    protected function saveFile()
    {
        if (!empty($this->file)) {
            // If there is an error when moving the file, an exception will
            // be automatically thrown by move(). This will properly prevent
            // the entity from being persisted to the database on error
            $this->file->move($this->dir, $this->filename . '.' . $this->extension);
        }

        // Check if we have an old file
        if (isset($this->deprecatedFile)) {
            // Delete the old file
            $this->removeFile($this->deprecatedFile);
        }

        return $this;
    }

    /**
     * @ORM\PostRemove()
     *
     * Remove upload
     * @return $this
     */
    public function removeUpload()
    {
        if (!empty($this->path)) {
            $this->removeFile($this->path);
        }
        return $this;
    }

    /**
     * Remove file from filesystem
     * @param $path
     * @return $this
     */
    protected function removeFile($path)
    {
        if (!empty($path)) {
            // Delete file
            if (file_exists($path)) { // Regular file
                unlink($path);
            }
        }
        
        return $this;
    }
}

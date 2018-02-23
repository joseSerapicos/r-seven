<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @ORM\MappedSuperclass(repositoryClass="AppBundle\Entity\BaseImageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BaseImage extends BaseFile {
    // Extra fields to handle file upload
    private $liipImagineDataManager;
    private $liipImagineFilterManager;

    /**
     * Set liipImagineDataManager (from controller)
     * @param string $liipImagineDataManager
     * @return $this
     */
    public function setLiipImagineDataManager($liipImagineDataManager)
    {
        $this->liipImagineDataManager = $liipImagineDataManager;
        return $this;
    }

    /**
     * Set liipImagineFilterManager (from controller)
     * @param string $liipImagineFilterManager
     * @return $this
     */
    public function setLiipImagineFilterManager($liipImagineFilterManager)
    {
        $this->liipImagineFilterManager = $liipImagineFilterManager;
        return $this;
    }

    /**
     * Save file in filesystem
     * @return $this
     */
    protected function saveFile()
    {
        parent::saveFile();

        if (!empty($this->file)) {
            $imgFilter = 'img';
            $thumbnailFilter = 'thumbnail_128';
            switch ($this->extension) {
                case 'jpeg':
                    $imgFilter = 'img_jpeg';
                    $thumbnailFilter = 'thumbnail_128_jpeg';
                    break;
                case 'png':
                    $imgFilter = 'img_png';
                    $thumbnailFilter = 'thumbnail_128_png';
                    break;
            }

            $localPath = substr($this->path, strpos($this->path, 'upload/'));

            // Compress file
            $image = $this->liipImagineDataManager->find($imgFilter, $localPath);
            $response = $this->liipImagineFilterManager->applyFilter($image, $imgFilter);
            $file = $response->getContent();
            $fileSize = strlen($file);

            // Replace file to save size!
            if ($fileSize < $this->size) {
                // Save original file
                rename($this->path, $this->dir . $this->filename . '.original.' . $this->extension);
                file_put_contents(
                    $this->path,
                    $file
                );
                $this->size = $fileSize;
            }

            // Create a thumbnail to list in gallery
            $image = $this->liipImagineDataManager->find($thumbnailFilter, $localPath);
            $response = $this->liipImagineFilterManager->applyFilter($image, $thumbnailFilter);
            file_put_contents(
                $this->dir . $this->filename . '.thumbnail-128.' . $this->extension,
                $response->getContent()
            );
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
        parent::removeFile($path);
        
        if (!empty($path)) {
            // Remove associated images
            $firstPartialPath = substr($path, 0, strripos($path, '.'));
            $lastPartialPath = substr($path, strripos($path, '.'));

            if (file_exists($firstPartialPath . '.rectification' . $lastPartialPath)) { // Backup of original file
                unlink($firstPartialPath . '.rectification' . $lastPartialPath);
            }
            if (file_exists($firstPartialPath . '.thumbnail-128' . $lastPartialPath)) { // Thumbnail of 128px of file
                unlink($firstPartialPath . '.thumbnail-128' . $lastPartialPath);
            }
        }

        return $this;
    }
}

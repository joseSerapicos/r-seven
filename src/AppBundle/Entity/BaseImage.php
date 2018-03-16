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
     * Get Image Variations
     * Defines an array of image variations that should be handled by class automatically
     * @return array
     */
    protected function getImageVariations() {
        return array(
            'thumbnail_128' // Thumbnail for gallery
        );
    }

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
            $imgFilterNameTermination = 'img';
            switch ($this->extension) {
                case 'jpeg':
                    $imgFilterNameTermination = '_jpeg';
                    break;
                case 'png':
                    $imgFilterNameTermination = '_png';
                    break;
            }

            $localPath = substr($this->path, strpos($this->path, 'upload/'));

            // Compress file
            $image = $this->liipImagineDataManager->find('img'.$imgFilterNameTermination, $localPath);
            $response = $this->liipImagineFilterManager->applyFilter($image, 'img'.$imgFilterNameTermination);
            $file = $response->getContent();
            $fileSize = strlen($file);

            // Replace file to save size!
            if ($fileSize < $this->size) {
                // Backup of original image disabled (for best performance and save space)
                // Save original file
                //rename($this->path, $this->dir . $this->filename . '.original.' . $this->extension);

                file_put_contents(
                    $this->path,
                    $file
                );
                $this->size = $fileSize;
            }

            // Create variation of the image according with configuration
            $imageVariations = $this->getImageVariations();
            if (is_array($imageVariations)) {
                foreach ($imageVariations as $imageVariation) {
                    $image = $this->liipImagineDataManager->find($imageVariation.$imgFilterNameTermination, $localPath);
                    $response = $this->liipImagineFilterManager->applyFilter(
                        $image, $imageVariation.$imgFilterNameTermination
                    );
                    file_put_contents(
                        ($this->dir . $this->filename . '.' . $imageVariation . '.' . $this->extension),
                        $response->getContent()
                    );
                }
            }
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

            // Backup of original image disabled (for best performance and save space)
            /*if (file_exists($firstPartialPath . '.original' . $lastPartialPath)) { // Backup of original file
                unlink($firstPartialPath . '.original' . $lastPartialPath);
            }*/

            // Remove all image variations created before according with configuration
            $imageVariations = $this->getImageVariations();
            if (is_array($imageVariations)) {
                foreach ($imageVariations as $imageVariation) {
                    if (file_exists($firstPartialPath . '.' . $imageVariation . $lastPartialPath)) {
                        unlink($firstPartialPath . '.' . $imageVariation . $lastPartialPath);
                    }
                }
            }

            // Remove crop if defined
            if (file_exists($firstPartialPath . '.crop_48' . $lastPartialPath)) { // Image crop of 48px
                unlink($firstPartialPath . '.crop_48' . $lastPartialPath);
            }
        }

        return $this;
    }
}

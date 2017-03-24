<?php

namespace AppBundle\Entity;

/**
 * Interface to BaseEntityRepository.
 * Designed to force children of "BaseEntityRepository" to implement static mandatory methods
 */
interface IBaseEntityRepository
{
    /**
     * Get metadata. Defines local metadata.
     * @return mixed
     */
    static function getMetadata();
}
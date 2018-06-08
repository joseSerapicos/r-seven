<?php
namespace Frt\EntitiesBundle\Form;

use AppBundle\Form\BaseType;


class ClientType extends BaseType {
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'Bck\EntitiesBundle\Entity\Client';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');

        return $this;
    }

    /**
     * Overrides parent method
     * @return $this
     */
    protected function setEntityMetadata()
    {
        parent::setEntityMetadata();

        // Redefine fields
        $this->entityMetadata = array(
            'entityObj' => $this->entityMetadata['entityObj'], // Embed field, it's mandatory
            'code' => $this->entityMetadata['code'],
            'avatar' => $this->entityMetadata['avatar'],
            'title' => $this->entityMetadata['title'],
            'name' => $this->entityMetadata['name'],
            'surname' => $this->entityMetadata['surname'],
            'legalName' => $this->entityMetadata['legalName'],
            'birthDate' => $this->entityMetadata['birthDate'],
            'taxNumber' => $this->entityMetadata['taxNumber']
        );

        return $this;
    }
}
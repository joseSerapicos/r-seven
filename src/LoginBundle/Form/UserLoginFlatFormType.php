<?php
namespace LoginBundle\Form;

use AppBundle\Form\BaseType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;


/**
 * Class UserLoginFlatFormType
 * @package BckAdminBundle\Form
 * This form is only to edit the user password
 */
class UserLoginFlatFormType extends BaseType
{
    /**
     * Overrides parent method
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }

        parent::init();

        $this->conf['entityClass'] = 'LoginBundle\Entity\User';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['class'] = 'm-3';
        $this->conf['buttons'] = 'form';

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
            'username' => $this->entityMetadata['username'],
            'password' => $this->entityMetadata['password'],
            'isSent' => $this->entityMetadata['isSent']
        );

        return $this;
    }

    /**
     * Add buttons
     * @param $formBuilder
     * @return $this
     */
    protected function addButtons($formBuilder) {
        // Determines the class (service/component) that holds the action methods
        $actionsMethodPrefix = ($this->conf['actionsService']
            ? ($this->conf['actionsService'].'.')
            : ''
        );

        $formBuilder->add('reset', ButtonType::class, array(
            'attr' => array(
                'class' => 'btn btn-light',
                '(click)' => $actionsMethodPrefix . 'resetAction($event)'
            ),
            'label' => 'Reset'
        ));

        $formBuilder->add('save', ButtonType::class, array(
            'attr' => array(
                'class' => 'btn btn-primary',
                '(click)' => $actionsMethodPrefix . 'saveAction($event)'
            ),
            'label' => 'Save and Send'
        ));

        return $this;
    }
}
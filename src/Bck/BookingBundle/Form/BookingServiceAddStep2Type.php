<?php
namespace Bck\BookingBundle\Form;

use AppBundle\Form\BaseType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;


class BookingServiceAddStep2Type extends BaseType
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

        $this->conf['entityClass'] = 'Bck\BookingBundle\Entity\BookingService';
        $this->conf['entityRepositoryClass'] = ($this->conf['entityClass'] . 'Repository');
        $this->conf['buttons'] = 'none';

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
            'startDateManual' => $this->entityMetadata['startDateManual'],
            'endDateManual' => $this->entityMetadata['endDateManual'],
            'quantityManual' => $this->entityMetadata['quantityManual'],
            'confirmationStatus' => $this->entityMetadata['confirmationStatus'],
            'confirmationStatusManual' => $this->entityMetadata['confirmationStatusManual'],
            'isAutoAllot' => $this->entityMetadata['isAutoAllot'],
            'isAutoAvailability' => $this->entityMetadata['isAutoAvailability'],
            'isAutoPrice' => $this->entityMetadata['isAutoPrice']
        );

        return $this;
    }

    /**
     * Build form
     * @param FormBuilderInterface $formBuilder
     * @param $options (Symfony form options array, we use the entry array('attr' => array('embed' => [boolean]))
     * to indicate when it is a embed form (sub-form))
     */
    public function buildForm(FormBuilderInterface $formBuilder, array $options)
    {
        parent::buildForm($formBuilder, $options);

        $formBuilder->add('change', ButtonType::class, array(
            'attr' => array(
                'class' => 'btn btn-primary w-100',
                '(click)' => 'changeAction($event)'
            ),
            'label' => 'Change'
        ));

        $formBuilder->add('debug', ButtonType::class, array(
            'attr' => array(
                'class' => 'btn',
                '(click)' => 'debugAction($event)'
            ),
            'label' => 'Debug'
        ));
    }
}
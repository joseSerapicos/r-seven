<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use AppBundle\Service\HelperService;


abstract class BaseType extends AbstractType
{
    protected $conf = array(); // Form configuration
    // Controls if form has been initialized
    protected $isInitialized = false;

    protected $entityMetadata = null;


    /**
     * Initialization. Set all basic configuration
     * This method should be override by child ever that you need to change the default configuration
     * @return $this
     */
    protected function init()
    {
        // Set configuration only once
        if ($this->isInitialized) { return $this; }
        $this->isInitialized = true;

        // Class names
        $entityClass = str_replace("\\Form\\", "\\Entity\\", substr(get_class($this), 0 , -4)); // Removes the key "Type"
        $entityRepositoryClass = ($entityClass . 'Repository');
        // Necessary to get and persist object in the correct database
        $bundleNameArr = HelperService::getBundleNameArr($this);
        $entityDataBase = (($bundleNameArr['bundle'] == 'SysadminBundle') ? 'app_database' : 'local_database');

        $this->conf = array(
            'entityClass' => $entityClass,
            'entityRepositoryClass' => $entityRepositoryClass,
            'entityDatabase' => $entityDataBase,
            'class' => '', // CSS class to apply to the form
            'buttons' => 'popup', // Determines which buttons should be rendered [popup, form, wizard, close, none]
            'hasNgForm' => true, // Enables ngForm by default
            'actionsService' => null, // Determines what service/component handles button actions ('_formService')
            'hasFields' => true, // Determines if fields should be rendered
            'localData' => null // Local specific custom data
        );

        return $this;
    }

    /**
     * Set Entity Metadata
     * This method should be override by child ever that you need to change the default metadata
     * @return $this
     */
    protected function setEntityMetadata()
    {
        $class = $this->conf['entityRepositoryClass'];
        $this->entityMetadata = $class::getMetadata();

        return $this;
    }

    /**
     * Get Entity Metadata
     * Used to set correctly the entity metadata and return it, because class child can override the "conf" and the
     * "entityMetadata" variable
     * @return null
     */
    protected function getEntityMetadata()
    {
        if (!$this->entityMetadata) { $this->setEntityMetadata(); }

        return $this->entityMetadata;
    }

    /**
     * Build form
     * @param FormBuilderInterface $formBuilder
     * @param $options (Symfony form options array, we use the entry array('attr' => array('embed' => [boolean]))
     * to indicate when it is a embed form (sub-form))
     */
    public function buildForm(FormBuilderInterface $formBuilder, array $options)
    {
        // Initialize variables
        $this->init();

        // Option sent by embed forms (sub-forms) to define the form
        $isEmbed = (isset($options['attr']) && isset($options['attr']['embed']) && $options['attr']['embed']);

        $entityMetadata = $this->getEntityMetadata();

        if($this->conf['hasFields']) {
            foreach ($entityMetadata as $field => $fieldMetadata) {
                // Remove common fields (already exists in the original merge entity)
                if (
                    // Fields of other entities (added through parent entity form type)
                    !empty($fieldMetadata['parent'])
                    // In case of 'embed', the base fields are already added from the child form
                    || ($isEmbed && in_array($field, array('id', 'insertTime', 'insertUser', 'isEnabled')))
                ) {
                    continue;
                }
                $this->addControl($formBuilder, $field, $fieldMetadata);
            }
        }

        if (!$isEmbed) {
            $this->addButtons($formBuilder);
        }
    }

    /**
     * Add control
     * @param $formBuilder
     * @param $field
     * @param $metadata
     * @return $this
     */
    protected function addControl($formBuilder, $field, $metadata)
    {
        $entityMetadata = $this->getEntityMetadata();
        $entityRepositoryClass = $this->conf['entityRepositoryClass'];

        // Field attributes
        $formType = $entityRepositoryClass::getFieldMetadata($field, 'type', $entityMetadata, 'form');
        if ($formType == 'none') { // Not allowed field
            return $this;
        }

        $acl = $entityRepositoryClass::getFieldMetadata($field, 'acl', $entityMetadata);
        $isReadOnly = ($acl == 'read');
        $type = $entityRepositoryClass::getFieldMetadata($field, 'type', $entityMetadata);
        $isMapped = $entityRepositoryClass::getFieldMetadata($field, 'isMapped', $entityMetadata);
        $isFakeField = $entityRepositoryClass::getFieldMetadata($field, 'isFakeField', $entityMetadata);
        if ($isMapped === null) { // If not defined, guess it from acl
            $isMapped = (!$isReadOnly);
        }
        $placeholder = $entityRepositoryClass::getFieldMetadata($field, 'placeholder', $entityMetadata);
        $attr = $entityRepositoryClass::getFieldMetadata($field, 'attr', $entityMetadata);

        // Base attributes
        $baseAttrArr = array(
            'attr' => (is_array($attr) ? $attr : array()),
            'mapped' => $isMapped
        );
        if ($placeholder) {
            $baseAttrArr['attr']['placeholder'] = $placeholder;
        }

        // Required. Symfony cannot guess 'nullable' in some cases (not mapped fields and entity type)
        $isRequired = $entityRepositoryClass::getFieldMetadata($field, 'isRequired', $entityMetadata);
        if ($isRequired !== null) { $baseAttrArr['required'] = $isRequired; }

        switch ($formType) {
            case 'datetime':
                $formBuilder->add($field, DateTimeType::class, array_merge(
                    $baseAttrArr,
                    array(
                        'input' => 'datetime',
                        'widget' => 'single_text',
                        'format' => 'yyyy-MM-dd HH:mm:ss'
                    )
                ));
                break;
            case 'date':
                $formBuilder->add($field, DateType::class, array_merge(
                    $baseAttrArr,
                    array(
                        'input' => 'datetime',
                        'widget' => 'single_text'
                    )
                ));
                break;
            case 'radio':
            case 'checkbox':
            case 'select':
            case 'tree-view':
            case 'html-select':
            case 'auto-complete':
            case 'hidden-entity':
                // Choices from static array (rendered by Symfony Forms)
                if ($type == 'enum') {
                    $formBuilder->add($field, ChoiceType::class, array_merge(
                        $baseAttrArr,
                        array(
                            'choices' => $metadata['typeDetail']['choices']['value'],
                            'expanded' => in_array($formType, array('radio', 'checkbox')),
                            'multiple' => in_array($formType, array('checkbox'))
                        )
                    ));
                }
                // Choices from entity (database, rendered by Angular)
                else {
                    // Query to get choices in repository
                    $query = $entityRepositoryClass::getFieldMetadata($field, 'query', $entityMetadata); // Specific defined in metadata
                    if (empty($query)) { $query = 'getChoices'; } // Default

                    $formBuilder->add($field, EntityType::class, array_merge(
                        $baseAttrArr,
                        array(
                            'class' => $entityRepositoryClass::getFieldMetadata($field, 'entityClass', $entityMetadata),
                            'expanded' => in_array($formType, array('radio', 'checkbox')),
                            'multiple' => in_array($formType, array('checkbox')),
                            'em' => $this->conf['entityDatabase'],
                            'query_builder' => function($entityRepository) use ($query) {
                                return $entityRepository->$query(false);
                            }
                        )
                    ));
                }
                break;
            case 'hidden':
                $formBuilder->add($field, HiddenType::class, $baseAttrArr);
                break;
            case 'password':
                $formBuilder->add($field, PasswordType::class, $baseAttrArr);
                break;
            case 'file':
                // Use the static field 'file'
                $formBuilder->add('file', FileType::class, $baseAttrArr);
                break;
            case 'textarea':
                $formBuilder->add($field, TextareaType::class, $baseAttrArr);
                break;
            case 'embed':
                $formBuilder->add($field, $metadata['typeDetail']['formClass'], array('attr' => array('embed' => true)));
                break;
            case 'boolean':
                // If is mapped and not a fake field, use default case, so "nullables" can be guessed.
                // In case of fake fields, there are no entity metadata to form guess the field type, so we need to
                // determine the type by hand, otherwise the form would render the field as a simple input
                // (like "paxIsClient" in "BckBookingBundle:Booking")
                if (!$isMapped || $isFakeField) {
                    $formBuilder->add($field, CheckboxType::class, $baseAttrArr);
                    break;
                }
            default:
                $formBuilder->add($field, null, $baseAttrArr);
        }

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

        $buttonsProfiles = array(
            'none' => array(),
            'wizard' => array(),
            'form' => array('reset', 'save'),
            'popup' => array('reset', 'save', 'cancel', 'saveAndClose'),
            // Use this profile when you want facility add entries
            'popupWithNew' => array('reset', 'save', 'cancel', 'saveAndClose', 'saveAndNew'),
            // Use this profile when you want facility the access to detail
            'popupWithDetail' => array('reset', 'save', 'cancel', 'saveAndClose', 'saveAndEnter'),
            'close' => array('close'),
            'cancel' => array('cancel')
        );

        if (isset($buttonsProfiles[$this->conf['buttons']]) && (count($buttonsProfiles[$this->conf['buttons']]) > 0))
        foreach ($buttonsProfiles[$this->conf['buttons']] as $button) {
            switch ($button) {
                case 'saveAndClose':
                    $formBuilder->add('saveAndClose', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-primary',
                            '(click)' => $actionsMethodPrefix . 'saveAndCloseAction($event)'
                        ),
                        'label' => 'Save and Close'
                    ));
                    break;
                case 'cancel':
                    $formBuilder->add('cancel', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-light',
                            '(click)' => 'cancelAction($event)'
                        ),
                        'label' => 'Cancel'
                    ));
                    break;
                case 'reset':
                    $formBuilder->add('reset', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-light',
                            '(click)' => $actionsMethodPrefix . 'resetAction($event)'
                        ),
                        'label' => 'Reset'
                    ));
                    break;
                case 'save':
                    $formBuilder->add('save', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-primary',
                            '(click)' => $actionsMethodPrefix . 'saveAction($event)'
                        ),
                        'label' => 'Save'
                    ));
                    break;
                case 'saveAndNew':
                    $formBuilder->add('saveAndNew', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-primary',
                            '(click)' => $actionsMethodPrefix . 'saveAndNewAction($event)'
                        ),
                        'label' => 'Save and Add'
                    ));
                    break;
                case 'saveAndEnter':
                    $formBuilder->add('saveAndEnter', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-primary',
                            '(click)' => $actionsMethodPrefix . 'saveAndEnterAction($event)'
                        ),
                        'label' => 'Save and Enter'
                    ));
                    break;
                case 'close':
                    $formBuilder->add('close', ButtonType::class, array(
                        'attr' => array(
                            'class' => 'btn btn-primary',
                            '(click)' => 'closeAction($event)'
                        ),
                        'label' => 'Finish'
                    ));
                    break;
            }
        }

        return $this;
    }

    /**
     * Define form name and form fields prefix
     * @return string
     */
    public function getBlockPrefix()
    {
        return ('form');
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        // Initialize variables
        $this->init();

        // Form attributes
        $formAttrArr = array('(ngSubmit)' => 'saveAction($event)');
        if (!empty($this->conf['class'])) {
            $formAttrArr['class'] = $this->conf['class'];
        }
        if ($this->conf['hasNgForm']) {
            // Controls if FormService has been initialized the "formBuilder group",
            // to avoid the component render the template form before and break.
            // It's no more necessary, because we only create the form (open popup) after get the
            // promise successful response (get, new or clone object), so this code is kept here for future consideration.
            //$formAttrArr['*ngIf'] = '_formService.isInitialized()';
            $formAttrArr['[formGroup]'] = '_formService.getForm()';
        } else {
            $formAttrArr['ngNoForm'] = '';
        }

        $resolver->setDefaults(array(
            'data_class' => $this->conf['entityClass'],
            'attr' => $formAttrArr,
            // This parameter is used to generate the token. We need to use the same parameter value in forms,
            // controllers and views, in order to generate always the same token regardless of the context
            // (because static views).
            // So we use the value defined in "./app/config/parameters.yml" "parameters:secret" for all contexts,
            // to make it more generic and configurable.
            'csrf_token_id' => HelperService::getGlobalVar('csrfTokenId')
        ));
    }
}
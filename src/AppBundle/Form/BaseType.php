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


abstract class BaseType extends AbstractType
{
    protected $entityClass;
    protected $entityRepositoryClass;
    protected $entityDatabase;
    protected $entityMetadata; // Can be predefined in local "init()" if you need special conditions

    /**
     * Initialization of variables. Implemented by child.
     * @return mixed
     */
    protected abstract function init();

    /**
     * Build form
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // Initialize variables
        $this->init();

        $repositoryClass = $this->entityRepositoryClass;
        $entityFields = (empty($this->entityMetadata) ? $repositoryClass::getMetadata() : $this->entityMetadata);

        foreach ($entityFields as $field => $fieldMetadata) {
            // Remove common fields (already exists in the original merge entity)
            if (in_array($field, array('id', 'insertTime', 'insertUser', 'isEnabled'))
                || !empty($fieldMetadata['parent']) // Fields of other entities (added through parent entity form type)
            ) {
                continue;
            }
            $this->addFormControl($builder, $field, $fieldMetadata);
        }
    }

    /**
     * Add form control
     * @param $formBuilder
     * @param $field
     * @param $metadata
     * @return $this
     */
    protected function addFormControl($formBuilder, $field, $metadata)
    {
        $repositoryClass = $this->entityRepositoryClass;

        // Field attributes
        $formType = $repositoryClass::getFieldMetadata($field, 'type', null, 'form');
        $type = $repositoryClass::getFieldMetadata($field, 'type');
        if ($formType == 'none') { // Not allowed field
            return $this;
        }
        $isMapped = $repositoryClass::getFieldMetadata($field, 'isMapped');
        if ($isMapped === null) { // If not defined, guess it from acl
            $isMapped = ($repositoryClass::getFieldMetadata($field, 'acl') == 'edit');
        }
        $placeholder = $repositoryClass::getFieldMetadata($field, 'placeholder');
        $attr = $repositoryClass::getFieldMetadata($field, 'attr');

        // Base attributes
        $baseAttrs = array(
            'attr' => (is_array($attr) ? $attr : array()),
            'mapped' => $isMapped
        );
        if ($placeholder) {
            $baseAttrs['attr']['placeholder'] = $placeholder;
        }

        // Required. Symfony cannot guess 'nullable' in some cases (not mapped fields and entity type)
        $isRequired = $repositoryClass::getFieldMetadata($field, 'isRequired');
        if ($isRequired !== null) { $baseAttrs['required'] = $isRequired; }

        switch ($formType) {
            case 'boolean':
                $formBuilder->add($field, CheckboxType::class, $baseAttrs);
                break;
            case 'datetime':
                $formBuilder->add($field, DateTimeType::class, array_merge(
                    $baseAttrs,
                    array(
                        'input' => 'datetime',
                        'widget' => 'single_text',
                        'format' => 'yyyy-MM-dd HH:mm:ss'
                    )
                ));
                break;
            case 'date':
                $formBuilder->add($field, DateType::class, array_merge(
                    $baseAttrs,
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
                // Choices from static array
                if ($type == 'enum') {
                    $formBuilder->add($field, ChoiceType::class, array_merge(
                        $baseAttrs,
                        array(
                            'choices' => $metadata['typeDetail']['choices']['value'],
                            'expanded' => in_array($formType, array('radio', 'checkbox')),
                            'multiple' => in_array($formType, array('checkbox'))
                        )
                    ));
                }
                // Choices from entity (database)
                else {
                    $autoRefresh = $repositoryClass::getFieldMetadata($field, 'autoRefresh');
                    if (!$autoRefresh) { // Auto refresh choices are loaded on init and rendered by Angular
                        // Determine query
                        $query = $repositoryClass::getFieldMetadata($field, 'query'); // Specific query to get choices
                        if (empty($query)) { $query = 'getChoices'; } // Generic query to get choices

                        $baseAttrs['query_builder'] = function($entityRepository) use ($query) {
                            return $entityRepository->$query(false);
                        };
                    }
                    $formBuilder->add($field, EntityType::class, array_merge(
                        $baseAttrs,
                        array(
                            'class' => $repositoryClass::getFieldMetadata($field, 'entityClass'),
                            'expanded' => in_array($formType, array('radio', 'checkbox')),
                            'multiple' => in_array($formType, array('checkbox')),
                            'em' => $this->entityDatabase
                        )
                    ));
                }
                break;
            case 'hidden':
                $formBuilder->add($field, HiddenType::class, $baseAttrs);
                break;
            case 'password':
                $formBuilder->add($field, PasswordType::class, $baseAttrs);
                break;
            case 'file':
                // Use the static field 'file'
                $formBuilder->add('file', FileType::class, $baseAttrs);
                break;
            case 'embed':
                $formBuilder->add($field, $metadata['typeDetail']['formClass']);
                break;
            case 'textarea':
                $formBuilder->add($field, TextareaType::class, $baseAttrs);
                break;
            default:
                $formBuilder->add($field, null, $baseAttrs);
        }

        return $this;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        // Initialize variables
        $this->init();

        $resolver->setDefaults(array(
            'data_class' => $this->entityClass,
        ));
    }
}
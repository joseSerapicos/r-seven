// Provider interface
export interface WizardManagerServiceProvider {
    rebuildNextStepComponents?: boolean // Force to rebuild all components when you go next. If you go prev,
    // when you return to the next step all component will be destroyed and rebuild again
}
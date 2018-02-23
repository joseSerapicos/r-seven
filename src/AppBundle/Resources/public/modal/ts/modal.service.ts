import {Injectable, ViewContainerRef, ReflectiveInjector} from '@angular/core';
import {DynamicComponentLoaderService} from '../../ts/dynamic-component-loader.service';
import {ModalDialogExtensionModule} from './modal-dialog.extension-module';
import {IModalPopup, BaseModalPopupExt, BaseModalPopup, BaseProvider} from './base-modal-popup';
import {ModalWrapperComponent, ModalSizes} from './modal-wrapper.component';

// Re-exports
export {IModalPopup, BaseModalPopupExt, BaseModalPopup, ModalSizes, BaseProvider};


// Popup interface
export interface Popup {
    module: any,
    component: string,
    providers?: any[],
    // Used only by ModalService to avoid create new instances of classes (services, etc.)
    // and new injectors for the same component. Once created it is saved to use in the next few
    injector?: any,
    size?: string
}


// Alert types
export var AlertTypes = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};


// Modal wrapper module
import {ModalWrapperExtensionModule} from './modal-wrapper.extension-module';


/**
 * Service
 * Modal uses the Bootstrap classes
 * NOTE: In modal service it's no use implementing the TaskLoaderManagerService because not works! Modal
 * are duplicated in the same way, because all clicks are processes one after finish the other and not at same time!
 */
@Injectable()
export class ModalService {
    protected _modalComponentFactory: any; // Modal wrapper for component
    protected _mainViewContainerRef: ViewContainerRef; // Main ViewContainerRef for modal
    protected _modalCounter: number = 0; // Count existent modals to controls the body scrollbar
    protected _$body: any; // Body element to controls scrollbar
    protected _hasInit: boolean = false; // Controls initialization

    constructor(
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService
    ) {}

    /**
     * Initialization
     * Init modal always in the main component (so we can ensure that the mainViewContainerRef is always active,
     * others component can be hidden or destroyed)
     * @param viewContainerRef
     * @returns {ModalService}
     */
    public init(viewContainerRef: ViewContainerRef): ModalService
    {
        // Initializes only once
        if (this._hasInit) { return this; }

        let that = this;

        // Get factory for modal wrapper
        this._dynamicComponentLoaderService.getComponentFactory(ModalWrapperExtensionModule, 'ModalWrapperComponent').then(
            componentFactory => {
                that._modalComponentFactory = componentFactory;
            });

        // Set main viewContainerRef
        this._mainViewContainerRef = viewContainerRef;

        // Set body element
        this._$body = $('body');

        this._hasInit = true;
        return this;
    }

    /**
     * Popup. Render component inside the popup.
     * @param popup
     * @param injector
     * @returns {Promise<T>}
     *
     * Handling with return:
     * ModalService.popup([parameters]).then(
     *     data => {
     *         data.componentRef.instance....
     *         data.dismissPromise.then(
     *             dismissData => {
     *                 ...
     *             },
     *             errors => { console.log(errors); }
     *         );
     *     },
     *     errors => { console.log(errors); }
     * );
     */
    public popup(popup: Popup, injector = null): Promise<any>
    {
        let that = this,
            modalComponentRef = this._mainViewContainerRef.createComponent(
                this._modalComponentFactory,
                this._mainViewContainerRef.length,
                null,
                []
            ),
            modalComponentInstance = <ModalWrapperComponent>modalComponentRef.instance;

        /* IMPORTANT: Use this code if you need to put the component in body (to avoided positioned parent troubling)
        let $modal = $(modalComponentInstance._elementRef.nativeElement);
        $modal.appendTo('body');*/

        // Set modal size
        modalComponentInstance.setSize(popup.size);

        // Update counter
        if (this._modalCounter === 0) {
            // Remove body scrollbar
            $(this._$body).addClass('no-overflow');
        }
        this._modalCounter++;

        // Define injector
        if (injector && !popup.injector) {
            let unresolvedProviders = (popup.providers || []),
                resolvedProviders = ReflectiveInjector.resolve(unresolvedProviders);
            popup.injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, injector);
        }

        // Create popup
        return new Promise(function(resolve, reject) {
            return that._dynamicComponentLoaderService.load(
                popup.module,
                popup.component,
                modalComponentInstance.getModalContainerRef(),
                (popup.injector || null)
            ).then(
                componentRef => {
                    let dismissPromise = new Promise(function(resolve, reject) {
                        // Dismiss emitter
                        let onDismissSubscription = componentRef.instance.onDismissEmitter.subscribe(
                            data => {
                                onDismissSubscription.unsubscribe();

                                // Remove component
                                that._mainViewContainerRef.remove(that._mainViewContainerRef.length - 1);
                                // It's used the "remove" method of "ViewContainerRef" instead
                                // modalComponentRef.destroy();

                                // Update counter
                                that._modalCounter--;
                                if (that._modalCounter === 0) {
                                    // Restore body scrollbar
                                    $(that._$body).removeClass('no-overflow');
                                }

                                return resolve(data);
                            }
                        );
                    });

                    // Show modal
                    modalComponentInstance.show();

                    return resolve({
                        componentRef: componentRef,
                        dismissPromise: dismissPromise
                    });
                },
                errors => {
                    console.log(errors);
                    return reject(null);
                }
            );
        });
    }

    /**
     * Dialog
     * @param body
     * @param title
     * @param size
     * @returns {Promise<T>}
     */
    public dialog(
        body: string = 'Are you sure?',
        title: string = 'Warning',
        size = ModalSizes.sm
    ): Promise<any> {
        return this.modalDialog(body, title, true, size);
    }

    /**
     * Alert
     * @param body
     * @param title
     * @param size
     * @returns {Promise<T>}
     */
    public alert(
        body: string = 'Are you sure?',
        title: string = 'Warning',
        size = ModalSizes.sm
    ): Promise<any> {
        return this.modalDialog(body, title, false, size);
    }

    /**
     * Modal Dialog (default component)
     * @param body
     * @param title
     * @param isDialog
     * @param size
     * @returns {Promise<T>}
     *
     * Handling with return:
     * ModalService.modalDialog([parameters]).then(
     *     hasConfirm => {
     *         // Popup response
     *     },
     *     errors => {
     *         console.log(errors);
     *     }
     * );
     */
    protected modalDialog(
        body: string = 'Are you sure?',
        title: string = 'Warning',
        isDialog: boolean = true,
        size = ModalSizes.sm
    ): Promise<any> {
        let that = this;

        return new Promise(function(resolve, reject) {
            let popup: Popup = {
                module: ModalDialogExtensionModule,
                component: 'ModalDialogComponent',
                size: size
            };

            that.popup(popup).then(
                data => {
                    // Set modal properties
                    data.componentRef.instance.setTitle(title).setBody(body).setIsDialog(isDialog);
                    data.dismissPromise.then(
                        dismissData => { return resolve(dismissData); },
                        errors => { console.log(errors); return reject(false); }
                    );
                },
                errors => { console.log(errors); return reject(false); }
            );
        });
    }

    /**
     * Normalize alert type to a valid option
     * @param type
     * @returns {string}
     */
    protected normalizeAlertType(type: string) {
        return (AlertTypes[type] || AlertTypes.info);
    }
}
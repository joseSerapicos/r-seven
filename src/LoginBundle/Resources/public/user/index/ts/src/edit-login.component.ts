import {Component, ElementRef, Inject, Injector, ReflectiveInjector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ModalService, Popup} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form-provider';
import {FormExtensionComponent} from '../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';

// Email
import {EditExtModule as EmailEditExtModule} from '../../../../../../../Bck/CommonBundle/Resources/public/email/index/ts/src/edit.ext-module';


// Component
@Component({
    selector: '.js_editLogin',
    templateUrl: '../templates/edit-login.component.html'
})
export class EditLoginComponent extends FormExtensionComponent
{
    protected emailPopup: Popup = null;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') protected _helperService: any,
        protected _modalService: ModalService,
        protected _injector: Injector
    ) {
        // Parent construct
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        this.emailPopup = {
            module: EmailEditExtModule,
            component: 'EditComponent',
            providers: [ // Providers are provided in data-box
                {provide: 'DataService', useClass: DataService},
                {provide: 'FormServiceProvider', useValue: {}},
                FormService
            ],
            localData: {context: 'PASSWORD'}
        };
    }

    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    public save(): Promise<any>
    {
        let that = this,
            route = this._dataService.getRoute('edit-login');

        return new Promise(function(resolve, reject) {
            that._formService.save(route).then(
                data => {
                    let object = that._formService.getObject();

                    // Send email with password
                    if (!that.emailPopup['injector']) {
                        // It's the firs time that popup is open, so we need to supply the providers
                        let context = that.emailPopup['localData']['context'],
                            route = (that._helperService.getAppVar('route') + 'bck/common/email/conf');

                        that._dataService.runAction(route).then(
                            data => {
                                // Update route of "new" action
                                data['route']['new']['url']= (data['route']['new']['url'] + '/' + context + '/' + object['id']);

                                that.emailPopup['providers'] = that.emailPopup['providers'].concat([
                                    {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                                    {provide: 'Provider', useValue: that._helperService.getFormProvider(data)},
                                    {provide: 'ParentDataService', useValue: that._dataService}
                                ]);

                                let resolvedProviders = ReflectiveInjector.resolve(that.emailPopup['providers']);
                                that.emailPopup['injector'] = ReflectiveInjector.fromResolvedProviders(resolvedProviders, that._injector);

                                let emailDataService = that.emailPopup['injector'].get('DataService');

                                emailDataService.newObject().then(
                                    data => { that.openPopup(that.emailPopup); },
                                    errors => { console.log(errors); }
                                );
                            },
                            errors => { console.log(errors); }
                        );
                    } else {
                        // Update route of "new" action
                        let emailDataService = that.emailPopup['injector'].get('DataService'),
                            newEmailRoute = emailDataService.getRoute('new');

                        newEmailRoute = (newEmailRoute.substring(0, newEmailRoute.lastIndexOf("/"))  + '/' + object['id']);
                        emailDataService.setRoute('new', newEmailRoute);

                        emailDataService.newObject().then(
                            data => { that.openPopup(that.emailPopup); },
                            errors => { console.log(errors); }
                        );
                    }

                    return resolve(data);
                },
                errors => { return reject(errors); }
            );
        });
    }

    /**
     * Open popup
     * @param popup
     * @returns {EditLoginComponent}
     */
    protected openPopup(popup: Popup)
    {
        // Open popup
        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );

        return this;
    }
}
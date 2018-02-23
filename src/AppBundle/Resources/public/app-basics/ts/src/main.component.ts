import {Component, Inject} from '@angular/core';
import {FlashMessageService} from '../../../ts/flash-message.service';

// AppI (template for modules)
export interface AppBasicsProvider {}


@Component({
    selector: '.js_appBasics',
    template: ''
})
export class MainComponent
{
    constructor(
        private _flashMessageService: FlashMessageService
    ) {}

    /**
     * Throw flash messages
     * @returns any
     */
    private throwFlashMessages(): MainComponent {
        if (_app.flashMessages != null) {
            for (let flashMessage of _app.flashMessages) {
                this._flashMessageService.message(
                    flashMessage.body,
                    flashMessage.head,
                    flashMessage.type
                );
            }
        }
        return this;
    }

    /**
     * Life cycle callback
     */
    ngOnInit() {
        this.throwFlashMessages();
        delete _app.flashMessages; // It's no longer necessary
    }
}
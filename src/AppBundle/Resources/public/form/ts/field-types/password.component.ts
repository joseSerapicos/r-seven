import {Component, Input} from '@angular/core';
import {FormService} from '../form.service';

// Component
@Component({
    selector: 'js_password',
    template: `
    <input (blur)="resetAction($event)"
           class="form-control"
           [class.error]="_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)"
           type="password"
           placeholder="Password"
           [(ngModel)]="_fields.password">
    <input (keyup)="validateAction($event)"
           class="form-control m-t"
           [class.error]="_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)"
           type="password"
           placeholder="Confirm password"
           [(ngModel)]="_fields.confirm">
    `
})
export class FieldTypePasswordComponent {
    @Input() field: string;

    protected _fields = {password: null, confirm: null}

    constructor(
        protected _formService: FormService
    ) {}

    /**
     * Validate fields
     * @param $event
     */
    protected validateAction($event: any = null): void
    {
        let isValid = (this._fields.password == this._fields.confirm);
        this._formService.getObject()[this.field] = (isValid ? this._fields.password : null);
        this._formService.getErrors()[this.field] = (isValid ? null : ["Password confirmation does not match"]);
    }

    /**
     * Reset
     * @param $event
     */
    protected resetAction($event: any = null): void
    {
        if (this._fields.password != this._fields.confirm) {
            this._fields.confirm = null;
            this.validateAction(null);
        }
    }
}
import {Component, ElementRef, Renderer} from '@angular/core';
import {BaseModalPopup} from './base-modal-popup';

@Component({
    selector: '.js_modalDialog',
    template:
    `<div class="modal-header">
        <h3 class="modal-title">{{title}}</h3>
    </div>
    <div class="modal-body">{{body}}</div>
    <div class="modal-footer">
        <div class="row">
            <div class="col-auto ml-auto">
                <button *ngIf="isDialog" class="btn btn-light" (click)="closeAction($event, false)">Cancel</button>
                <button class="btn btn-primary" (click)="closeAction($event, true)">Ok</button>
            </div>
        </div>
    </div>
    `
})
export class ModalDialogComponent extends BaseModalPopup
{
    protected title: string = 'Warning';
    protected body: string = 'Are you sure';
    protected isDialog: boolean = true;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer
    ) {
        super(
            elementRef,
            renderer,
            null
        );
    }

    /**
     * Set title
     * @param title
     * @returns {ModalDialogComponent}
     */
    public setTitle(title: string): ModalDialogComponent
    {
        this.title = title;
        return this;
    }

    /**
     * Set body
     * @param body
     * @returns {ModalDialogComponent}
     */
    public setBody(body: string): ModalDialogComponent
    {
        this.body = body;
        return this;
    }

    /**
     * Set isDialog
     * @param isDialog
     * @returns {ModalDialogComponent}
     */
    public setIsDialog(isDialog: boolean): ModalDialogComponent
    {
        this.isDialog = isDialog;
        return this;
    }
}
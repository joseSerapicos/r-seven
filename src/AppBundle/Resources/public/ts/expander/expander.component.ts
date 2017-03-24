import {Component, Input, Output, EventEmitter} from '@angular/core';

// Component
@Component({
    selector: 'js_expander',
    template: `
    <a [ngClass]="['no-user-select', 'expander', customClass]"
       (click)="toggleAction($event)">
        <i *ngIf="hasIcon" [ngClass]="['fa', (isExpanded ? 'fa-angle-down' : 'fa-angle-right')]"></i>
        <span [innerHTML]="label"></span></a>
    `
})
export class ExpanderComponent
{
    @Input() isExpanded: boolean = false;
    @Input() label: string;
    @Input() hasIcon: boolean = true;
    @Input() customClass: string = ''; // customClass instead of class because is a reserved word
    @Output() onChange = new EventEmitter();

    /**
     * Toggle expanded
     * @param $event
     */
    protected toggleAction($event): void
    {
        $event.preventDefault();
        this.isExpanded = !this.isExpanded;
        this.onChange.emit(this.isExpanded);
    }
}
import {Component, Input, Output, EventEmitter} from '@angular/core';

// Component
@Component({
    selector: 'js_expander',
    template: `
    <a [ngClass]="['no-user-select', 'expander', customClass]"
       (click)="toggleAction($event)">
        <i *ngIf="hasIcon" [ngClass]="['mr-2 fa', (isExpanded ? 'fa-angle-down' : 'fa-angle-right')]"></i>
        <i *ngIf="labelIcon" [ngClass]="['mr-2 fa', labelIcon]"></i><span [innerHTML]="label"></span><span *ngIf="labelCount !== undefined" class="badge badge-info ml-2">{{labelCount}}</span></a>
    `
})
export class ExpanderComponent
{
    @Input() isExpanded: boolean = false;
    @Input() label: string;
    @Input() labelCount: number = null;
    @Input() labelIcon: string = null;
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
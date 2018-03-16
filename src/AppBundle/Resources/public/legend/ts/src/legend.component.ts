import {Component, Inject} from '@angular/core';
import {LegendProvider} from './legent-provider';

// Re-exports
export {LegendProvider}


// Component
@Component({
    selector: 'js_legend',
    template: `
    <dl *ngIf="_provider.length > 0" class="legend">
        <ng-template ngFor let-legend [ngForOf]="_provider" let-i="index">
          <div class="dsp-inline-block nowrap"><dt [ngClass]="legend['class']"></dt><dd>{{legend['label']}}</dd></div>
        </ng-template>
    </dl>
    `
})
export class LegendComponent {
    constructor(
        @Inject('LegendProvider') protected _provider: LegendProvider
    ) {}
}
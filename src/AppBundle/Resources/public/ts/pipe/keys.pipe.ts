import {Pipe, PipeTransform} from '@angular/core';

/**
 * Pipe to get keys of objects to interact with "ngFor"
 */
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value, args: string[]): any
    {
        console.log(Object.keys(value || {}));
        return Object.keys(value || {});
    }
}
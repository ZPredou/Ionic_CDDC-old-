import { Pipe, PipeTransform, OnInit } from '@angular/core';

/**
 * Generated class for the OeuvreTitleFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(terms); // only filter title
    });
  }
}

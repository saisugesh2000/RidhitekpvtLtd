import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachContactUs'
})
export class SerachContactUsPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => item.fullname.toString().toLowerCase().includes(searchTerm));
  }

}

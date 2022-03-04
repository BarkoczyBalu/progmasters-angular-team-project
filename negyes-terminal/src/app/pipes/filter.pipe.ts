import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterKey: string, phrase: string): any[] {

    if (!Array.isArray || !filterKey || !phrase) { return value }

    return value.filter(item => {
      return (item[filterKey].toLowerCase().includes(phrase.toLowerCase()))
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forint'
})
export class ForintPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value !== undefined && value !== null) {
      return value.toLocaleString('hu-HU');
    } else {
      return '';
    }
  }

}

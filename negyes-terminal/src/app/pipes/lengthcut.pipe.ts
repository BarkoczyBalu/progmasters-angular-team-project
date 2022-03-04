import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthcut'
})
export class LengthcutPipe implements PipeTransform {

  transform(value: string, cut: number): string {
    return value.substring(0, cut) + '...';
  }

}

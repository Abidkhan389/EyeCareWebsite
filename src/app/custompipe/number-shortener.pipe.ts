import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberShortener'
})
export class NumberShortenerPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000) {
      const rounded = Math.floor(value / 1000);
      return `${rounded}k+`;
    }
    return value.toString();
  }
}

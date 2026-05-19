import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const phoneStr:string = value.toString().replace(/\D/g, '');
    if (phoneStr.length === 12 && phoneStr.startsWith('375')) {
      return phoneStr.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    }
    return value.toString();
  }

}

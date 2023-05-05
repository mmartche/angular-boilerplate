import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFirst'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any[]): any {
    if(value.length > 0) {
      if (!!value[0].name) return value[0].name
      return value[0]
    } 
    return ''
  }
}

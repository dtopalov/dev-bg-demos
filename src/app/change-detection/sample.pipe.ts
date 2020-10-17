import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})

export class MyPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
      console.count('calculate value');
      return value.toFixed(3);
  }
}

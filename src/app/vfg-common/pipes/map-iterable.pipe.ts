import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapIterablePipe'
})
export class MapIterablePipe implements PipeTransform {
  transform(iterable: any, args: any[]): any {
    let result = [];
    iterable.forEach((entryVal, entryKey) => {
            result.push({
                key: entryKey,
                value: entryVal
            });
        });

    console.log('iterablePipe', iterable, args, result);
    return result;
  }
}
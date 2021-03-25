import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any[] | null, phrase: string, key: string = 'firstName', props?:{count: number}): any[] | null {
    
    if(!Array.isArray(value) || !phrase || !key){
      if(Array.isArray(value) && !phrase && props?.count){
        props.count = value.length
      }
      return value;
    }
    phrase = ('' + phrase).toLowerCase();

    const filtered = value.filter( item => {
      const iKey: string = ('' + item[key]).toLowerCase();
      return iKey.includes(phrase);
    });
    if(filtered.length > -1 && props?.count){
      props.count = filtered.length
      if(props?.count > -1){
        props.count=filter.length
      }
    }
    return filtered
  }

}

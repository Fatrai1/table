import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorterUpDown'
})
export class SorterUpDownPipe implements PipeTransform {

  transform(value: any[] | null, key: string, direction:boolean ): any[] | null{
    
    if (!Array.isArray(value) || !key ){
      return value;
    }
    
      return value.sort(function(a:any,b:any):any{
        if (typeof a[key]==='number' && typeof b[key]==='number'){
          if (direction){
            return  a[key]-b[key];
          }else{
           return b[key]-a[key];
          }
          
        }else
        {
          if (direction){
        return (''+a[key]).toLowerCase().localeCompare((''+b[key]).toLowerCase());

        }else
        {
          return (''+b[key]).toLowerCase().localeCompare((''+a[key]).toLowerCase());

        }
      }
    }
      )
    }
  }

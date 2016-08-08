import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, arg1:string,arg2:string): any {
    var limit =(arg1)?parseInt(arg1):50;

    if(value){
    var trimtext= value.substring(0,limit);
    return trimtext.substr(0, Math.min(trimtext.length, trimtext.lastIndexOf(" ")))+'....';
    
  }
  }

}

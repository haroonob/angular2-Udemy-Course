import { Directive,HostListener,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[autoGrow]',
  // host:{
  //   '(focus)':'onFocus',
  //   '(blur)':'onBlur',
  // }
})
export class AutoGrowDirective {

  constructor(private el:ElementRef,private renderer:Renderer ) {
    
    
   }
@HostListener('focus')   
onFocus(){
      //console.log('hello');
      this.el.nativeElement.style.width='500px';
      //this.renderer.setElementStyle(this.el.nativeElement,'width','400');
      this.el.nativeElement.value='text';
    }
 @HostListener('blur') 
 onBlur(){
   this.el.nativeElement.style.width='120pxl';
       this.renderer.setElementStyle(this.el.nativeElement,'width','120');
    }
}

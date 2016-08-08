import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css']
})
export class AccordionComponent {

@Input() title :string;
isExpanded=false;
toggle(){
  this.isExpanded=!this.isExpanded;
  console.log(this.isExpanded);
} 

}

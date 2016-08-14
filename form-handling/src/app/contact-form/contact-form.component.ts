import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})
export class ContactFormComponent {
onSubmit(form){
  console.log(form  );  
}
log(x){
  
}
}

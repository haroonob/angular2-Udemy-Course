import { Component, OnInit } from '@angular/core';
import {ControlGroup,Control,Validators,FormBuilder} from '@angular/common';
import {UsernameValidators} from '../UsernameValidators';
@Component({
  moduleId: module.id,
  selector: 'app-signup-form',
  templateUrl: 'signup-form.component.html',
  styleUrls: ['signup-form.component.css']
})
export class SignupFormComponent {
 form:ControlGroup;
 constructor(fb:FormBuilder){
    this.form=fb.group({
      username:['',Validators.compose([Validators.required,UsernameValidators.cannotContainSpace]),UsernameValidators.shouldBeUnique],
      password:['',Validators.required]
    })

 }
  // Model driven Form 
  // Using ControlGroup and Control
  // form=new ControlGroup({
  //   username:new Control('',Validators.required),
  //   password:new Control('',Validators.required)
  // });
signup(){
  console.log(this.form.value);
}
}

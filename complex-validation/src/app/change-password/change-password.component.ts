import { Component, OnInit } from '@angular/core';
import {ControlGroup,Control,Validators,FormBuilder} from '@angular/common';
import {UsernameValidators} from '../UsernameValidators';
@Component({
  moduleId: module.id,
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html',
  styleUrls: ['change-password.component.css']
})
export class ChangePasswordComponent {
form:ControlGroup;
 constructor(fb:FormBuilder){
    this.form=fb.group({
      oldpassword:['',Validators.compose([Validators.required]),UsernameValidators.shouldBeCorrect],
      newpassword:['',Validators.compose([Validators.required,UsernameValidators.shouldFollowPWDPolicy])],
      confirmpassword:['',Validators.compose([Validators.required])],
    },{ validator: UsernameValidators.shouldSameAsNewPassword })

 

 }
  changePassword(){
      // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var newpassword = this.form.find('newpassword');
        if (newpassword.value != '12345') 
            newpassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");

  }
}

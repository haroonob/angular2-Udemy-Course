import { Component } from '@angular/core';
import {SignupFormComponent} from './signup-form/signup-form.component'
import {ChangePasswordComponent} from './change-password/change-password.component'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SignupFormComponent,ChangePasswordComponent]
})
export class AppComponent {
  title = 'app works!';
}

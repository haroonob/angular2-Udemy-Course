import { Component } from '@angular/core';
import {ContactFormComponent} from './contact-form/contact-form.component'
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ContactFormComponent,SubscriptionFormComponent]
})
export class AppComponent {
  title = 'app works!';
}

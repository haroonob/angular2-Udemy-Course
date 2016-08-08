import { Component } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { SwitchmenuComponent } from './switchmenu/switchmenu.component';
import { SummaryComponent } from './summary/summary.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[AccordionComponent,SwitchmenuComponent,SummaryComponent],
  
})
export class AppComponent {
  title = 'app works!';
}

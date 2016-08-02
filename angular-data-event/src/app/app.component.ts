import { Component } from '@angular/core';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {ClassBindingComponent} from './class-binding/class-binding.component';
import {StyleBindingComponent} from './style-binding/style-binding.component';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TwowayBindingComponent} from './twoway-binding/twoway-binding.component';
import {GlyphiconStarComponent} from './glyphicon-star/glyphicon-star.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[GlyphiconStarComponent,TwowayBindingComponent,EventBindingComponent,AlertComponent, DATEPICKER_DIRECTIVES,PropertyBindingComponent,ClassBindingComponent,StyleBindingComponent]
})
export class AppComponent {
   date: Date = new Date();
}

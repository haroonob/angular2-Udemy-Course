import { Component } from '@angular/core';
import  {SummaryPipe } from '../summary.pipe';
@Component({
  moduleId: module.id,
  selector: 'app-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['summary.component.css'],
  pipes:[SummaryPipe]
})
export class SummaryComponent {

  post={
    title:'Post Title',
    body:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
    point:4.9087   
}

}

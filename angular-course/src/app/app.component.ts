import { Component } from '@angular/core';
import {CourseComponent} from './course/course.component'
import {AuthorComponent} from './author/author.component'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
    directives: [CourseComponent,AuthorComponent]
})
export class AppComponent {
 
}

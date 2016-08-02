import { Component,  } from '@angular/core';
import { CourseService } from '../course.service';
import { AutoGrowDirective } from '../auto-grow.directive';
@Component({
  moduleId: module.id,
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.css'],
  providers:[CourseService] ,
  directives:[AutoGrowDirective]
})
export class CourseComponent  {
 title ='This is courses title page'; 
    courses;   
    constructor(courseService: CourseService){
        this.courses=courseService.getCourses();
    }
  

}

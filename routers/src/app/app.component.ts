import { Component } from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
  
  constructor(private router:Router){}
  // ngOnInit(){
  //   this.router.navigate(['/']);
  // }
}

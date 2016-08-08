import { Component } from '@angular/core';
import {FavoritComponent} from './favorit/favorit.component'
import {LikeComponent} from './like/like.component'
import {VoterComponent} from './voter/voter.component'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[FavoritComponent,LikeComponent,VoterComponent]
})
export class AppComponent {
  post= {
    isFavorit:true
  }
  toggle(value){
    console.log(value);
    
  }
}

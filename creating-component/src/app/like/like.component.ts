import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-like',
  templateUrl: 'like.component.html',
  styleUrls: ['like.component.css']
})
export class LikeComponent  {

@Input("is-like") isLike = false;
totalCount=10;
 onClick(){
    this.isLike=!this.isLike;
    this.totalCount+=this.isLike?+1:-1;
   // this.change.emit({newValue:this.isFavorit});
  }
}

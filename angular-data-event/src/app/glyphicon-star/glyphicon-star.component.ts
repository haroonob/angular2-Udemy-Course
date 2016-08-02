import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-glyphicon-star',
  templateUrl: 'glyphicon-star.component.html',
  styleUrls: ['glyphicon-star.component.css']
})
export class GlyphiconStarComponent {
isFavorit=false;
onClick(){

  this.isFavorit=!this.isFavorit;
}

}

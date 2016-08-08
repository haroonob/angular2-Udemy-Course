import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-favorit',
  templateUrl: 'favorit.component.html',
  styleUrls: ['favorit.component.css'],
  
})
export class FavoritComponent {

  @Input("is-favorit") isFavorit = false;
  @Output('on-change') change=new EventEmitter();
  
  onClick(){
    this.isFavorit=!this.isFavorit;
    this.change.emit({newValue:this.isFavorit});
  }

}

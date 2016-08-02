import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
@Component({
  moduleId: module.id,
  selector: 'app-author',
  templateUrl: 'author.component.html',
  styleUrls: ['author.component.css'],
  providers:[AuthorService]
  
})
export class AuthorComponent {

 title ='Authors'; 
    authors;   
    constructor(authorService: AuthorService){
        this.authors=authorService.getAuthors();
    }

}

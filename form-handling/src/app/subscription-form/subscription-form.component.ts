import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-subscription-form',
  templateUrl: 'subscription-form.component.html',
  styleUrls: ['subscription-form.component.css']
})
export class SubscriptionFormComponent 
{

  onSubmit(form){
  console.log(form  );  
}

}

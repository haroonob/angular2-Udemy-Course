import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-voter',
  templateUrl: 'voter.component.html',
  styleUrls: ['voter.component.css']
})
export class VoterComponent { 
myVote = 0;
voteCount=10;
upVote(){
  if(this.myVote==1)
    return ;
  this.myVote++;
}
downVote(){
  if(this.myVote==-1)
      return ;
  this.myVote--;
}
}

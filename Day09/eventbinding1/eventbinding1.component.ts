import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {
  isClick:boolean=true;
  myborder:string="6px solid red";
  myclass:string='';
  isImageClick:boolean=true;

   onClick(){
    if(this.isClick){
      console.log("Click Event Occur...")
      this.isClick=false;
      this.myclass="btn btn-success"
      this.isImageClick=false;
    }
    
  }

  onImage(){
    console.log("on Image Click...");
    this.myborder="4px dotted green";

  }

}

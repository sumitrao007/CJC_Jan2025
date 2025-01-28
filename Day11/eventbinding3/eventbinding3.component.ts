import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {

  name:string='';

  onChange(myname:string){
    console.log("Change Event Occur...");

    if(myname.length>6){
      alert("Maximum chacter")
    }

  }

}

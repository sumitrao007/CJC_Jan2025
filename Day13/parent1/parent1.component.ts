import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  strData:string="Hello Welcome to Angular Module By Sumit Raokhande";
  mydate:string='';

  jsonObj={
    id:9,
    fname:"Sumit",
    lname:"Raokhande"
  }

  onClick(inputDate:string){
    // console.log(inputDate)
    this.mydate=inputDate;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {

  result:number=0;

  onSend(myname:any){
    console.log(myname);
    console.log(myname.value)
    myname.style.color='white';
    myname.style.background='green';

  }

  onSend1(myvalue:string){
    console.log("Data is => "+myvalue);

  }

  onAddition(num1:any,num2:any){
    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;
  }

}

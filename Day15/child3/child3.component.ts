import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  strData:string="Hopes so u r Enjoying This Angular Module";
  jsonObj={
    id:9,
    fname:"Sumit",
    lname:"Raokhande"
  }

  arrProduct:any[]=[
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Iphone",
      price:120000,
      qty:1
    },
    {
      name:"Realme",
      price:18000,
      qty:2
    },
    {
      name:"Vivo",
      price:12000,
      qty:2
    },
    {
      name:"OnePlus",
      price:45000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:3
    }
  ];

  @Output() childStrEvent=new EventEmitter();

  @Output() childJsonEvent=new EventEmitter();

  @Output() childArrObjEvent=new EventEmitter();


  onSend(){
    this.childStrEvent.emit(this.strData);
    this.childJsonEvent.emit(this.jsonObj);
    this.childArrObjEvent.emit(this.arrProduct)
  }

  onClick(data:any){
    console.log("=== "+data)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component {

    childStrRecived:string='';
    childJsonReceived:any={};
    childArrObjReceived:any[]=[];

}

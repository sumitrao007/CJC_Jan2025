import { Component, OnInit } from '@angular/core';
import { Employees } from '../model/Employee';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addData:Employees=<Employees>{};
  allCountry:any[]=[];

  constructor(private service:HttpService,
              private router:Router
  ){}
  ngOnInit(): void {
   this.getAllCountryFromBackend();
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allCountry=response;
    })
  }

  

  onSubmit(){
    this.addData.createdBy="admin";
    this.addData.updatedBy="admin";
    this.addData.createdDate=Date.now();
    this.addData.updatedDate=Date.now();

    this.service.addEmpData(this.addData)
    .subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['']);
    })

  }

}

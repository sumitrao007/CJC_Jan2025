import { Component, OnInit } from '@angular/core';
import { Employees } from '../model/Employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addData:Employees=<Employees>{};
  allCountry:any[]=[];
  isUpdate:boolean=false;

  constructor(private service:HttpService,
              private router:Router,
              private route:ActivatedRoute
  ){}

  ngOnInit(): void {
   this.getAllCountryFromBackend();
   this.getDataFromUrl();

  }


  getDataFromUrl(){

      this.route.paramMap
      .subscribe((param:any)=>{
        // console.log(param.get("id"));
       if(param.get("id")!=null){
        this.getParticularRecordFromBackend(param.get("id"))
       }
        
      })
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allCountry=response;
    })
  }

  getParticularRecordFromBackend(id:any){
    this.service.getParticularRecordById(id)
    .subscribe((response:any)=>{
      console.log(response)
      this.isUpdate=true;
      this.addData=response;
    })
  }
  

  onSubmit(){

    if(this.isUpdate){
      //update a record
      this.addData.updatedDate=Date.now();
      this.addData.updatedBy="Admin";

      this.service.updateEmpData(this.addData)
      .subscribe((response)=>{
        this.isUpdate=false;
        this.router.navigate(['']);
      })


    }else{
      //add a Record
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

}

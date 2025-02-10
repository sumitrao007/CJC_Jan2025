import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:any[]=[];
id:number=0;
title:string='';
body:string='';
isHidden:boolean=true;


  constructor(private service:HttpService){}
  ngOnInit(): void {
   this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getData()
    .subscribe((myresponse:any)=>{
        console.log(myresponse)
        this.posts=myresponse;
    })
  }

  onSubmit(inputTitle:any,inputBody:any){
    let jsonObj={
        title:inputTitle,
        body:inputBody
    }
    this.service.postData(jsonObj)
    .subscribe((response)=>{
      console.log(response);
    })
    
  }

  onEdit(item:any){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let jsonObj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.updateData(jsonObj)
    .subscribe((resposne)=>{
      console.log(resposne);
    })

  }


}

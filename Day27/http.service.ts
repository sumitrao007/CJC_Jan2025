import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getEmployeeList(){
   return (this.http.get(`${this.baseUrl}getAllEmp`))
  }

  getParticularRecordById(id:any){
    return (this.http.get(`${this.baseUrl}getparticularEmpById/${id}`));
  }

  getAllCountry(){
   return (this.http.get(`${this.baseUrl}getAllCountry`));
  }

  addEmpData(obj:Employees){
   return this.http.post(`${this.baseUrl}addemp`,obj,{
      responseType:"text"
    })
  }

}

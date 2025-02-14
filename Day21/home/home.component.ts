import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  id:number=9;
  

  onPage1(){
    this.router.navigate(['/page1']);
  }
  
  onPage2(){
    this.router.navigate(['/page2',this.id]);
  }

  onFollower(){
    this.router.navigate(['/follower']);
  }


}

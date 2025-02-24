import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AddempComponent } from './addemp/addemp.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"empDetails/:id",component:EmpdetailsComponent
  },
  {
    path:"addEmp",component:AddempComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

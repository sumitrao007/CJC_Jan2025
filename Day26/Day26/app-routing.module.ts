import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

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
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

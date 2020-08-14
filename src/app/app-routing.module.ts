import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { AddtaskComponent } from './addtask/addtask.component';



const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'calender' , component : CalenderComponent},
  { path : 'addtask' , component : AddtaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

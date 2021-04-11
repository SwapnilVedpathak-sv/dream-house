import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddExpencesComponent } from './add-expences/add-expences.component';
const routes: Routes = [
  {
    path:'list',
    component: HomeComponent
  },
  {
    path:'add-expences',
    component: AddExpencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

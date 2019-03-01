import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo:'/admin/dashboard',  pathMatch: 'full' },
  { path:'admin' , loadChildren:'./admin/admin.module#AdminModule'},
  { path: 'admin/student', loadChildren:'./student/student.module#StudentModule'},
  { path: 'admin/staff', loadChildren:'./staff/staff.module#StaffModule'},

  //Should be the last one
  {path:'**', component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

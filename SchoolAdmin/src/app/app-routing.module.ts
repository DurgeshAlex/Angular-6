import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/admin/dashboard',  pathMatch: 'full' },
  { path:'admin' , loadChildren:'./admin/admin.module#AdminModule'},
  { path: 'admin/student', loadChildren:'./student/student.module#StudentModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

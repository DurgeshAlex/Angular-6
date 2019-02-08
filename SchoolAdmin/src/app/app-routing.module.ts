import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { EnrollstudentComponent } from './content/enroll/enrollstudent/enrollstudent.component';

const routes: Routes = [
  { path: '', redirectTo:'/admin/dashboard',  pathMatch: 'full' },
  { path: 'admin/dashboard',  component: DashboardComponent },
  { path: 'admin/enroll/student', component: EnrollstudentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

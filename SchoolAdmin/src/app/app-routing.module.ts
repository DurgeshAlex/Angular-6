import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollstudentComponent } from './student/enroll/enrollstudent/enrollstudent.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

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

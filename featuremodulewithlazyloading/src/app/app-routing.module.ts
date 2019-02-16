import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/app', pathMatch:'full'},
  {path:'app', component:AppComponent},
  {path:'app/reservation', loadChildren:'./reservation/reservation.module#ReservationModule'},
  {path:'app/passenger', loadChildren:'./passenger/passenger.module#PassengerModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { PassengerComponent } from './passenger/passenger.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/app', pathMatch:'full'
  },
  {
    path:'app', component:AppComponent
  },
  {
    path: 'reservation', component:ReservationComponent
  },
  {
    path:'passenger',component:PassengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

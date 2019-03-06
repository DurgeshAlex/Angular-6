import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { PassengerComponent } from './passenger/passenger.component';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { ChildComponent } from './reservation/child/child.component';

const routes: Routes = [
 
  {
    path: 'reservation', component:ReservationComponent,
    children:[
      {
        path:'child',
        component: ChildComponent
      }
    ]
  },
  {
    path:'passenger',component:PassengerComponent
  },
  {
    path:'**',component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

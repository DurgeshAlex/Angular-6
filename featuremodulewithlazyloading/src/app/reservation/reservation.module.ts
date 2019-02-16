import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ],
  exports: [
    ReservationComponent
  ]
})
export class ReservationModule { }

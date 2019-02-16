import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PassengerComponent } from './passenger/passenger.component';

@NgModule({
  declarations: [PassengerComponent],
  imports: [
    CommonModule,
    PassengerRoutingModule
  ],
  exports:[
    PassengerComponent
  ]
})
export class PassengerModule { }

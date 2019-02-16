import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerComponent } from './passenger/passenger.component';

@NgModule({
  declarations: [PassengerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PassengerComponent
  ]
})
export class PassengerModule { }

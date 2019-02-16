import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerModule } from './passenger/passenger.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PassengerModule,
    ReservationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ReservationComponent } from './reservation/reservation.component';
import { Error404Component } from './error404/error404.component';
import { ChildComponent } from './reservation/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    ReservationComponent,
    Error404Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

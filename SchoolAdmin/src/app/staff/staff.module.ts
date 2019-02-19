import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll/enroll.component';
import { FormsModule } from '@angular/forms';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  declarations: [EnrollComponent],
  imports: [
    CommonModule,
    FormsModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }

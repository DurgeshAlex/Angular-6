import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { EnrollstudentComponent } from './enroll/enrollstudent/enrollstudent.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from '../admin/admin.module';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
    declarations: [
        StudentlistComponent,
        EnrollstudentComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        AdminModule,
        StudentRoutingModule
    ],
    exports:[
       // EnrollstudentComponent,
       // StudentlistComponent
    ]

})
export class StudentModule {

}
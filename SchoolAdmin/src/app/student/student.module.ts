import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { EnrollstudentComponent } from './enroll/enrollstudent/enrollstudent.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from '../admin/admin.module';
import { StudentRoutingModule } from './student-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        StudentlistComponent,
        EnrollstudentComponent,
        SearchComponent
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
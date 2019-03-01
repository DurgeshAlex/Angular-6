import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from './enroll/enroll.component';
const routes:Routes=[
    {
        path:'',
        redirectTo:'enroll',
        pathMatch:'full',
        children:[
            { path:'enroll', component:EnrollComponent}
        ]
    }
];
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class StaffRoutingModule{
}
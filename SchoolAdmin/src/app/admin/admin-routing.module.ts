import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';
const routes:Routes=[
    {
        path:'',
        children:[
            {path:'dashboard', component:DashboardComponent}
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
export class AdminRoutingModule{
}
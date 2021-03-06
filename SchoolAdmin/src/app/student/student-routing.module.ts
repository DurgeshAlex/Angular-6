import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnrollstudentComponent } from './enroll/enrollstudent/enrollstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

    { path: '', redirectTo: '/list', pathMatch: 'full' },
    {
        path: 'list',
        component: StudentlistComponent
    },
    {
        path: 'enroll',
        component: EnrollstudentComponent
    },
    {
        path:'search',
        component:SearchComponent
    }



];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class StudentRoutingModule {

}
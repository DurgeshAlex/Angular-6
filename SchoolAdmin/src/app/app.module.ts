import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { EnrollstudentComponent } from './content/enroll/enrollstudent/enrollstudent.component';
import { StudentComponent } from './content/student/student.component';
import { StudentlistComponent } from './content/student/studentlist/studentlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LeftsidebarComponent,
    DashboardComponent,
    EnrollstudentComponent,
    StudentComponent,
    StudentlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

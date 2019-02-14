import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
totalStudent:number =this.studentService.getTotalStudent();
  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

}

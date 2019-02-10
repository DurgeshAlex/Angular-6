import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students:Student[]= [];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.students=this.studentService.getStudents();
  }

}

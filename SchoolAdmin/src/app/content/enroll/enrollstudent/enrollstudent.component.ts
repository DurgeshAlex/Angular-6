import { Component, OnInit } from '@angular/core';
import { Student } from '../../student/Student';

@Component({
  selector: 'app-enrollstudent',
  templateUrl: './enrollstudent.component.html',
  styleUrls: ['./enrollstudent.component.css']
})
export class EnrollstudentComponent implements OnInit {
student:Student = new Student();
  onSave(student: Student){
    console.log(student);
  }
  constructor() { }

  ngOnInit() {
  }

}

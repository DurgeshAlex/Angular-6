import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-enrollstudent',
  templateUrl: './enrollstudent.component.html',
  styleUrls: ['./enrollstudent.component.css']
})
export class EnrollstudentComponent implements OnInit {
student:Student = new Student();
id:number=0;
 newStudent:Student; 
onSave(student: Student){
  this.id++;
  this.newStudent = new Student();
  this.createNewStudent(this.newStudent,student);
  this.studentService.enrollStudent(this.newStudent);
}
  createNewStudent(newStudent:Student,student:Student){
    newStudent.address=student.address;
    newStudent.adharNo= student.adharNo;
    newStudent.city=student.city;
    newStudent.contactNo=student.contactNo;
    newStudent.email=student.email;
    newStudent.id=this.id;
    newStudent.name=student.name;
    newStudent.pinCode=student.pinCode;
    newStudent.state=student.state;
  }

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[]=[];
 
  enrollStudent(student: Student) {
    this.studentList.push(student);
  }
  getStudents():Student[]{
    return this.studentList;
  }


  constructor() { }
}

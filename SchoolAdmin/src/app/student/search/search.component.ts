import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  student:Student = new Student();
  constructor() { }

  ngOnInit() {
  }

}

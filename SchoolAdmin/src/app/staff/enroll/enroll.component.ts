import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  staff:Staff =new Staff();
  constructor() { }

  ngOnInit() {
  }

}

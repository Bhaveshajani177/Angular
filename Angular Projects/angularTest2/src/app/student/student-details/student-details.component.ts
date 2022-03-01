import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from 'src/app/core/models/istudent';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  @Input() stidentInfo!: IStudent;

  constructor() {}

  ngOnInit(): void {}
}

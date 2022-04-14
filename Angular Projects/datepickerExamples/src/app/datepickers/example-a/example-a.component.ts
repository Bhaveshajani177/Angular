import { Component, OnInit } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css'],
})
export class ExampleAComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { IStudent } from '../../core/models/istudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Output() sendStudentDetails: EventEmitter<IStudent> = new EventEmitter();

  // ViewChilds
  @ViewChild('studentForm') studentForm!: NgForm;
  @ViewChild('firstName') firstName!: ElementRef;
  @ViewChild('lastName') lastName!: ElementRef;
  @ViewChild('gender') gender!: ElementRef;
  @ViewChild('instituteName') instituteName!: ElementRef;
  @ViewChild('city') city!: ElementRef;
  @ViewChild('description') description!: ElementRef;

  studentList: IStudent[] = [];
  showStudentList: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // add student method
  addStudent(genderValue: any) {
    if (
      !this.firstName.nativeElement.value ||
      !this.lastName.nativeElement.value ||
      // !this.gender.nativeElement.value ||
      !genderValue ||
      !this.instituteName.nativeElement.value ||
      !this.city.nativeElement.value ||
      !this.description.nativeElement.value
    ) {
      alert('Please enter required data');
    } else {
      alert('student added successfully');

      // create student object
      let student: IStudent = {
        firstName: this.firstName.nativeElement.value,
        lastName: this.lastName.nativeElement.value,
        // gender: this.gender.nativeElement.value,
        gender: genderValue,
        instituteName: this.instituteName.nativeElement.value,
        city: this.city.nativeElement.value,
        description: this.description.nativeElement.value,
      };

      this.studentList.push(student);
      this.studentForm.resetForm();
      this.showStudentList = true;
    }
  }

  // get student details
  getStudentDetails(student: IStudent) {
    this._sendStudentDetails(student);
  }

  // send student details to student-main component
  _sendStudentDetails(student: IStudent) {
    this.sendStudentDetails.emit(student);
  }

  // delete student method
  // deleteStudent(id: number) {
  //   this.studentList.splice(id, 1);
  // }
}

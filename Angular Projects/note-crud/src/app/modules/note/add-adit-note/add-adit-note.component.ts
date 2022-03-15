import { INote } from './../../../core/models/inote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { NoteService } from '../note.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-adit-note',
  templateUrl: './add-adit-note.component.html',
  styleUrls: ['./add-adit-note.component.css'],
})
export class AddAditNoteComponent implements OnInit {
  // Inputs
  @Input() noteDetails!: INote;

  // Outputs
  @Output() gotoNoteList: EventEmitter<boolean> = new EventEmitter();

  // consts
  isFormSubmitted = false;
  showUpdateButton: boolean = false;

  // notes form
  noteForm!: FormGroup;

  // constructor
  constructor(private noteService: NoteService, private toastr: ToastrService) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // check add note or edit note
    if (this.noteDetails.id) {
      // this.showUpdateButton = true;
      this.prepareNoteForm(this.noteDetails);
    } else {
      // this.showUpdateButton = false;
    }
  }

  // initialize note form
  initializeForm() {
    this.noteForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      note: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
      ]),
      status: new FormControl(false),
    });
  }

  // getters
  get _noteForm() {
    return this.noteForm.controls;
  }

  // prepare note form
  prepareNoteForm(note: INote) {
    this.noteForm.patchValue(note);
  }

  // add new notes
  addEditNote() {
    this.isFormSubmitted = true;
    if (this.noteDetails.id && this.noteForm.valid) {
      // ------- update existing note -------

      // create note object
      const note: INote = {
        id: this.noteDetails.id,
        title: this.noteForm.value.title,
        note: this.noteForm.value.note,
        status: this.noteForm.value.status,
        createdAt: this.noteDetails.createdAt,
        updatedAt: new Date(),
      };

      // edit note
      const response = this.noteService.updateNote(note);
      if (response) {
        this.clearForm();
        this.toastr.success('Data Updated Successfully', 'Successfully!');
        this.gotoNoteList.emit(true);
      } else {
        this.toastr.error('Data Not Updated', 'Update Failure!');
      }
    } else {
      // ------- create new note -------
      if (this.noteForm.valid) {
        // create note object
        const note: INote = {
          id: UUID.UUID(),
          title: this.noteForm.value.title,
          note: this.noteForm.value.note,
          status: this.noteForm.value.status || false,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // add note
        const response = this.noteService.addNote(note);
        if (response) {
          this.clearForm();
          this.toastr.success('Data Added Successfully', 'Successfully!');
        } else {
          this.toastr.error('Data Not Added', 'Failure!');
        }
      }
    }
  }

  // clear form value
  clearForm() {
    this.noteForm.reset();
    this.isFormSubmitted = false;
  }
}

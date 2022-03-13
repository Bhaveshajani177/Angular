import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { INote } from 'src/app/core/models/inote';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-adit-note',
  templateUrl: './add-adit-note.component.html',
  styleUrls: ['./add-adit-note.component.css'],
})
export class AddAditNoteComponent implements OnInit {
  // consts
  isFormSubmitted = false;
  showUpdateButton: boolean = false;

  // notes form
  noteForm!: FormGroup;

  // constructor
  constructor(private noteService: NoteService) {
    this.initializeForm();
  }

  ngOnInit(): void {}

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

  // add new notes
  addEditNote() {
    if (this.showUpdateButton) {
      console.log('edit form');
    } else {
      // create new note
      this.isFormSubmitted = true;
      if (this.noteForm.valid) {
        // create note object
        let note: INote = {
          id: UUID.UUID(),
          title: this.noteForm.value.title,
          note: this.noteForm.value.note,
          status: this.noteForm.value.status || false,
        };

        // add note
        const response = this.noteService.addNote(note);
        if (response) {
          this.clearForm();
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

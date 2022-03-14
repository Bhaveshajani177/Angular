import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { INote } from '../../../core/models/inote';

@Component({
  selector: 'app-note-main',
  templateUrl: './note-main.component.html',
  styleUrls: ['./note-main.component.css'],
})
export class NoteMainComponent implements OnInit {
  // consts
  isShowNoteList = true;
  editNoteDetails!: INote;

  constructor() {}

  ngOnInit(): void {}

  showAddNoteForm() {
    this.isShowNoteList = false;
    // pass empty object to add-edit-note-component
    this.editNoteDetails = {
      id: '',
      note: '',
      title: '',
      status: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  getEditNoteDetails(note: INote) {
    this.editNoteDetails = note;
    this.isShowNoteList = false;
  }
}

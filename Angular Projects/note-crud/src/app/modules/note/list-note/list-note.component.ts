import { Component, OnInit } from '@angular/core';
import { INote } from 'src/app/core/models/inote';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css'],
})
export class ListNoteComponent implements OnInit {
  // notes array
  notes: INote[] = [];

  // constructor
  constructor(private noteService: NoteService) {}

  // onInit
  ngOnInit(): void {
    this.getNoteList();
  }

  // get note list
  getNoteList() {
    this.notes = this.noteService.getNotes();
  }

  // edit existing note
  editNote(note: INote) {}

  // delete existing note
  deleteNote(noteId: string) {
    const response = this.noteService.deleteNote(noteId);
    if (response) {
      alert('data deleted successfully');
    } else {
      alert('data not deleted successfully');
    }
  }
}

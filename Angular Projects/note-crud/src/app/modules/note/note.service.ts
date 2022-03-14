import { Injectable } from '@angular/core';
import { INote } from '../../core/models/inote';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  // notes array
  notes: INote[] = [];

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes') || '{}');
  }

  // list note
  getNotes() {
    return this.notes;
  }

  // add note
  addNote(note: INote) {
    try {
      // push notes to notes array
      this.notes.push(note);

      // store data to local Storage
      localStorage.setItem('notes', JSON.stringify(this.notes));

      return true;
    } catch {
      return false;
    }
  }

  // update note
  updateNote(noteDetails: INote) {
    try {
      // find index
      const index = this.notes.findIndex((note) => {
        return note.id === noteDetails.id;
      });

      // update array
      this.notes[index].title = noteDetails.title;
      this.notes[index].note = noteDetails.note;
      this.notes[index].status = noteDetails.status;
      this.notes[index].createdAt = noteDetails.createdAt;
      this.notes[index].updatedAt = noteDetails.updatedAt;

      // store data to local Storage
      localStorage.setItem('notes', JSON.stringify(this.notes));

      return true;
    } catch {
      return false;
    }
  }

  // delete note
  deleteNote(noteId: string) {
    try {
      // find index
      const index = this.notes.findIndex((note) => {
        return note.id === noteId;
      });

      // remove note
      this.notes.splice(index, 1);

      // store data to local Storage
      localStorage.setItem('notes', JSON.stringify(this.notes));

      return true;
    } catch {
      return false;
    }
  }
}

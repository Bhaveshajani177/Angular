import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/core/models/inote';
import { NoteService } from '../note.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css'],
})
export class ListNoteComponent implements OnInit {
  // Outputs
  @Output() sendEditNoteDetails: EventEmitter<INote> = new EventEmitter();

  // notes array
  notes: INote[] = [];

  // constructor
  constructor(
    private noteService: NoteService,
    private toastr: ToastrService
  ) {}

  // onInit
  ngOnInit(): void {
    this.getNoteList();
  }

  // get note list
  getNoteList() {
    const noteData = this.noteService.getNotes();

    // sort note by updated date
    this.notes = noteData.sort(
      (noteA: any, noteB: any) =>
        new Date(noteB.updatedAt).getTime() -
        new Date(noteA.updatedAt).getTime()
    );
  }

  // edit existing note
  editNote(note: INote) {
    this.sendEditNoteDetails.emit(note);
  }

  // delete existing note
  deleteNote(noteId: string) {
    const response = this.noteService.deleteNote(noteId);
    if (response) {
      this.toastr.success('Data Deleted Successfully', 'Successfully!');
    } else {
      this.toastr.error('Data Not Deleted', 'Failure!');
    }
  }
}

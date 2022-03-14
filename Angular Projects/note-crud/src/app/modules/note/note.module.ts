import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { AddAditNoteComponent } from './add-adit-note/add-adit-note.component';
import { ListNoteComponent } from './list-note/list-note.component';
import { NoteMainComponent } from './note-main/note-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AddAditNoteComponent, ListNoteComponent, NoteMainComponent],
  exports: [AddAditNoteComponent, ListNoteComponent, NoteMainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
})
export class NoteModule {}

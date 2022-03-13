import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// modules
import { NoteModule } from './modules/note/note.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

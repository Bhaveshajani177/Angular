import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { StudentMainComponent } from './student-main/student-main.component';

// modules
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [AppComponent, StudentMainComponent],
  imports: [BrowserModule, AppRoutingModule, StudentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

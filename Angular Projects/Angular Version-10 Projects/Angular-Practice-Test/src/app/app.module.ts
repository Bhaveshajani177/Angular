import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// child modules
import { TestModule } from './modules/test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule  // child module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

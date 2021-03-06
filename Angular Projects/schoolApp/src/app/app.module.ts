import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

// firebase modules
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

// classes
import { Regex } from './utility/regex';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { EventBlockerDirective } from './shared/directives/event-blocker.directive';
import { ListComponent } from './list/list.component';
import { EditImageComponent } from './edit-image/edit-image.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UploadComponent,
    EventBlockerDirective,
    ListComponent,
    EditImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    AngularFireStorageModule,
  ],
  providers: [Regex],
  bootstrap: [AppComponent],
})
export class AppModule {}

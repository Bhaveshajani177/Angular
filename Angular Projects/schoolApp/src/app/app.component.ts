import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // consts
  title = 'schoolApp';

  constructor(
    public authService: AuthService,
    private angularFireAuth: AngularFireAuth
  ) {}

  // logout method
  async logout($event: Event) {
    $event.preventDefault();

    await this.angularFireAuth.signOut();
  }
}

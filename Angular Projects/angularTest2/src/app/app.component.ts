import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Test-2';

  // get current data
  currentData: Date = new Date();

  // get project version
  projectVersion = VERSION.full;
}

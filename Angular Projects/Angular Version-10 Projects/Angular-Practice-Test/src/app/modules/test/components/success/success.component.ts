import { Component } from '@angular/core';

@Component({
  selector: 'app-success-component',
  template: `<h1>Success Component</h1>`,
  styles: [`
    h1{
      color:darkgreen;
      background-color: lightgreen;
    }
  `]
})

export class SuccessComponent {
}

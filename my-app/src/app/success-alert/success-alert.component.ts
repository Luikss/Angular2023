import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p>This is a success!</p>`,
  styles: [`
    p {
      padding: 10px;
      background-color: darkseagreen;
      border: 1px solid;
    }
  `]
})
export class SuccessAlertComponent {

}

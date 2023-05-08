import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .whiteText {
      color: white;
    }
  `]
})
export class DetailsComponent {
  showSecret = false;
  clicks = [];

  onDisplayDetails() {
    this.showSecret = !this.showSecret;
    this.clicks.push(this.clicks.length + 1);
  }
}

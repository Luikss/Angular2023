import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEmitter = new EventEmitter<number>();
  interval;
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalEmitter.emit(this.number + 1);
      this.number++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}

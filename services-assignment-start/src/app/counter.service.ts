import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  activeToInactive() {
    this.activeToInactiveCount++;
    console.log('There are ' + this.activeToInactiveCount + ' active->inactive status changes so far.')
  }

  inactiveToActive() {
    this.inactiveToActiveCount++;
    console.log('There are ' + this.inactiveToActiveCount + ' inactive->active status changes so far.')
  }
}

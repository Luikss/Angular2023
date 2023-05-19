import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {

  logStatusChange(status: string) {
    console.log('Account status changed, new status: ' + status);
  }

  logServerCreated(status: string, name: string) {
    console.log('Account with name: ' + name + ' and status: ' + status + ' was created!');
  }
}

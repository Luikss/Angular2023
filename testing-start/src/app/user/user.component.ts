import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  data: string;
  isLoggedIn = false;

  constructor(private userService: UserService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then(data => this.data = data);
  }
}

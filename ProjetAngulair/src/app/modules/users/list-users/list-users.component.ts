import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {User} from '../../../core/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['username', 'lastname', 'firstname', 'email', 'role'];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.findAll();
  }

}

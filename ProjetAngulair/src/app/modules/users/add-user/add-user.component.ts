import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {UserService} from '../../../core/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  //valid invalid
  //pristine dirty
  //touched untouched
  user: User = new User(
    '',
    '',
    '',
    '',
    '',
    '');


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.user);
    this.userService.add(this.user);
  }

}

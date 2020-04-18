import {Injectable} from '@angular/core';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }


  private users: User[] = [];

  public add(user: User) {
    this.users.push(user);
  }

  public update(user: User) {
    // tslint:disable-next-line:triple-equals
    const index = this.users.findIndex(current => current.username == current.username);
    this.users[index] = Object.assign(new User('', '', '', '', '', ''), user);//envoyer une copier de user
  }

  public delete(user: User) {
    const index = this.users.findIndex(current => current.username === current.username);


  }

  public find(username: string): User {
    return this.users.find(current => current.username === current.username);

  }

  public findAll(): User[] {
    return this.users.map(user => Object.assign(new User('', '', '', '', '', ''), user));
  }


}

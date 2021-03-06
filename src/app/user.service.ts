import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUsers() {
    return this.users;
  }

}

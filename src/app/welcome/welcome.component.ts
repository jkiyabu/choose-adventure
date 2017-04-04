import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})
export class WelcomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  addUser(newUser: User) {
    this.userService.addUser(newUser);
    this.router.navigate(['careers']);
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}

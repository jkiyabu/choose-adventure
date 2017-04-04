import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Output() newUserSender = new EventEmitter();

  submitForm(name: string) {
    var newUserToAdd: User = new User(name, 0, 'none');
    this.newUserSender.emit(newUserToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}

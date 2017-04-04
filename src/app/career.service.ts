import { Injectable } from '@angular/core';
import { Career } from './career.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CareerService {
  careers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.careers = angularFire.database.list('careers');
  }

  getCareers() {
    return this.careers;
  }
}

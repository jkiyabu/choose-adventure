import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { CareerService } from './../career.service';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  providers: [CareerService]
})
export class CareersComponent implements OnInit {
  careers: FirebaseListObservable<any[]>;

  constructor(private router: Router, private careerService: CareerService) { }

  ngOnInit() {
    this.careers = this.careerService.getCareers();

  }

}

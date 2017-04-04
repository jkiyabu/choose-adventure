import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { CareerService } from './../career.service';
import { Career } from './../career.model';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  providers: [CareerService]
})
export class CareersComponent implements OnInit {
  careers: FirebaseListObservable<any[]>;

  constructor(private router: Router, private careerService: CareerService) { }

  goToDetailPage(clickedCareer) {
    this.router.navigate(['career-details', clickedCareer.$key]);
  };

  ngOnInit() {
    this.careers = this.careerService.getCareers();
  }

}

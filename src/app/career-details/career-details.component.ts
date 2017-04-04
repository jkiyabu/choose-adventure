import { Component, OnInit } from '@angular/core';
import { CareerService } from './../career.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css'],
  providers: [CareerService]
})
export class CareerDetailsComponent implements OnInit {
  careerId: string;
  careerToDisplay;
  year1: any[];

  constructor(private route: ActivatedRoute, private location: Location, private careerService: CareerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.careerId = urlParameters['id'];
    });
    this.careerToDisplay = this.careerService.getCareerById(this.careerId);
    //this.year1 = this.careerToDisplay.years.year1;
    console.log(this.careerToDisplay);
  }

}

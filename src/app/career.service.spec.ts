import { TestBed, inject } from '@angular/core/testing';

import { CareerService } from './career.service';

describe('CareerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareerService]
    });
  });

  it('should ...', inject([CareerService], (service: CareerService) => {
    expect(service).toBeTruthy();
  }));
});

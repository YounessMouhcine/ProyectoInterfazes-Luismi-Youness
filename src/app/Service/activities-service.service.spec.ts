import { TestBed } from '@angular/core/testing';

import { ActivitiesServiceService } from './activities-service.service';

describe('ActivitiesServiceService', () => {
  let service: ActivitiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataBikesService } from './data-bikes.service';

describe('DataBikesService', () => {
  let service: DataBikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataTelevisionsService } from './data-televisions.service';

describe('DataTelevisionsService', () => {
  let service: DataTelevisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTelevisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

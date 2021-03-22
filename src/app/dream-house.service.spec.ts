import { TestBed } from '@angular/core/testing';

import { DreamHouseService } from './dream-house.service';

describe('DreamHouseService', () => {
  let service: DreamHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreamHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

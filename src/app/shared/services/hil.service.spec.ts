import { TestBed } from '@angular/core/testing';

import { HilService } from './hil.service';

describe('HilService', () => {
  let service: HilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

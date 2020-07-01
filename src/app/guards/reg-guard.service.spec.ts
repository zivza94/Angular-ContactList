import { TestBed } from '@angular/core/testing';

import { RegGuardService } from './reg-guard.service';

describe('RegGuardService', () => {
  let service: RegGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

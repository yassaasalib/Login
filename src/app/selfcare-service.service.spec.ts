import { TestBed } from '@angular/core/testing';

import { SelfCareService } from './selfcare-service.service';

describe('SelfCareService', () => {
  let service: SelfCareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfCareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

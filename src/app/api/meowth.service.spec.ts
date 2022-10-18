import { TestBed } from '@angular/core/testing';

import { MeowthService } from './meowth.service';

describe('MeowthService', () => {
  let service: MeowthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeowthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SanctionService } from './sanction.service';

describe('SanctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SanctionService = TestBed.get(SanctionService);
    expect(service).toBeTruthy();
  });
});

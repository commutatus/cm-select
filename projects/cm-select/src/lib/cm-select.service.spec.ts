import { TestBed } from '@angular/core/testing';

import { CmSelectService } from './cm-select.service';

describe('CmSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmSelectService = TestBed.get(CmSelectService);
    expect(service).toBeTruthy();
  });
});

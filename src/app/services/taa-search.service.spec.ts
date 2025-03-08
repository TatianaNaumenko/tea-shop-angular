import { TestBed } from '@angular/core/testing';

import { TaaSearchService } from './taa-search.service';

describe('TaaSearchService', () => {
  let service: TaaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

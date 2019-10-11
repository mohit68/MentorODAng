import { TestBed } from '@angular/core/testing';

import { SearchResultServiceService } from './search-result-service.service';

describe('SearchResultServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchResultServiceService = TestBed.get(SearchResultServiceService);
    expect(service).toBeTruthy();
  });
});

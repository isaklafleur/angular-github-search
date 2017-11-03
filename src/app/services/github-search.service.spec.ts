import { TestBed, inject } from '@angular/core/testing';

import { GithubSearchService } from './github-search.service';

describe('GithubSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubSearchService]
    });
  });

  it('should be created', inject([GithubSearchService], (service: GithubSearchService) => {
    expect(service).toBeTruthy();
  }));
});

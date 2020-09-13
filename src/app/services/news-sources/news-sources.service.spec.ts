import { TestBed } from '@angular/core/testing';

import { NewsSourcesService } from './news-sources.service';

describe('NewsSourcesService', () => {
  let service: NewsSourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsSourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

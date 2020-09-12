import { TestBed } from '@angular/core/testing';

import { CounterPartyAnalyticsService } from './counter-party-analytics.service';

describe('CounterPartyAnalyticsService', () => {
  let service: CounterPartyAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterPartyAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { StarwarapiService } from './starwarapi.service';

describe('StarwarapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarwarapiService]
    });
  });

  it('should be created', inject([StarwarapiService], (service: StarwarapiService) => {
    expect(service).toBeTruthy();
  }));
});

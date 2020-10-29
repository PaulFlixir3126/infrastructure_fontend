import { TestBed, inject } from '@angular/core/testing';

import { restApiService } from './comorinCS.service';

describe('restApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [restApiService]
    });
  });

  it('should be created', inject([restApiService], (service: restApiService) => {
    expect(service).toBeTruthy();
  }));
});

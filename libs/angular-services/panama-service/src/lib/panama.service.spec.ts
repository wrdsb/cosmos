import { TestBed } from '@angular/core/testing';

import { PanamaService } from './panama.service';

describe('PanamaService', () => {
  let service: PanamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

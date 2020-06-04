import { TestBed } from '@angular/core/testing';

import { UILayoutService } from './ui-layout.service';

describe('LayoutService', () => {
  let service: UILayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UILayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

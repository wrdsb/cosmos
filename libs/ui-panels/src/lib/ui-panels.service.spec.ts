import { TestBed } from '@angular/core/testing';

import { UIPanelsService } from './ui-panels.service';

describe('PanelsService', () => {
  let service: UIPanelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIPanelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

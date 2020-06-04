import { TestBed } from '@angular/core/testing';

import { UINavigationService } from './ui-navigation.service';

describe('NavigationService', () => {
  let service: UINavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UINavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

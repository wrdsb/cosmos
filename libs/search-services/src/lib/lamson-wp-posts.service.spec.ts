import { TestBed } from '@angular/core/testing';

import { LamsonWpPostsService } from './lamson-wp-posts.service';

describe('LamsonWpPostsService', () => {
  let service: LamsonWpPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LamsonWpPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

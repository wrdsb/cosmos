import { async, TestBed } from '@angular/core/testing';
import { NotFoundPageModule } from './not-found-page.module';

describe('NotFoundPageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NotFoundPageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NotFoundPageModule).toBeDefined();
  });
});

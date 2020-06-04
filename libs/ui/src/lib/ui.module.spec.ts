import { async, TestBed } from '@angular/core/testing';
import { UIModule } from './ui.module';

describe('UIModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UIModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UIModule).toBeDefined();
  });
});

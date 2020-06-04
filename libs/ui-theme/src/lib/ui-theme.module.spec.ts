import { async, TestBed } from '@angular/core/testing';
import { UIThemeModule } from './ui-theme.module';

describe('UIThemeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UIThemeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UIThemeModule).toBeDefined();
  });
});

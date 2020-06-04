import { async, TestBed } from '@angular/core/testing';
import { UiThemeModule } from './ui-theme.module';

describe('UiThemeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiThemeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiThemeModule).toBeDefined();
  });
});

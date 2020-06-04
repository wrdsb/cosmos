import { async, TestBed } from '@angular/core/testing';
import { UiPanelsModule } from './ui-panels.module';

describe('UiPanelsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiPanelsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiPanelsModule).toBeDefined();
  });
});

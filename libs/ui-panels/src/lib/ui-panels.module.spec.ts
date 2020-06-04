import { async, TestBed } from '@angular/core/testing';
import { UIPanelsModule } from './ui-panels.module';

describe('UIPanelsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UIPanelsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UIPanelsModule).toBeDefined();
  });
});

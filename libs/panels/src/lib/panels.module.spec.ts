import { TestBed, waitForAsync } from '@angular/core/testing';
import { PanelsModule } from './panels.module';

describe('PanelsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PanelsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PanelsModule).toBeDefined();
  });
});

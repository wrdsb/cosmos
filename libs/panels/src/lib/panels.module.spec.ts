import { async, TestBed } from '@angular/core/testing';
import { PanelsModule } from './panels.module';

describe('PanelsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PanelsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PanelsModule).toBeDefined();
  });
});

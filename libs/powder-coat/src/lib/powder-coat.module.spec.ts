import { TestBed, waitForAsync } from '@angular/core/testing';
import { PowderCoatModule } from './powder-coat.module';

describe('PowderCoatModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PowderCoatModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PowderCoatModule).toBeDefined();
  });
});

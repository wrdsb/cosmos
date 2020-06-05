import { async, TestBed } from '@angular/core/testing';
import { PowderCoatModule } from './powder-coat.module';

describe('PowderCoatModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PowderCoatModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PowderCoatModule).toBeDefined();
  });
});

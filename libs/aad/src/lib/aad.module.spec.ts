import { async, TestBed } from '@angular/core/testing';
import { AadModule } from './aad.module';

describe('AadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AadModule).toBeDefined();
  });
});

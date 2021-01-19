import { TestBed, waitForAsync } from '@angular/core/testing';
import { AadModule } from './aad.module';

describe('AadModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AadModule).toBeDefined();
  });
});

import { TestBed, waitForAsync } from '@angular/core/testing';
import { IppsModule } from './ipps.module';

describe('IppsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IppsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IppsModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { IppsModule } from './ipps.module';

describe('IppsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IppsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IppsModule).toBeDefined();
  });
});

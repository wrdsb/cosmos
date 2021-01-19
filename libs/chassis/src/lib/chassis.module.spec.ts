import { TestBed, waitForAsync } from '@angular/core/testing';
import { ChassisModule } from './chassis.module';

describe('ChassisModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChassisModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ChassisModule).toBeDefined();
  });
});

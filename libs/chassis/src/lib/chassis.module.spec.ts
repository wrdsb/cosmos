import { async, TestBed } from '@angular/core/testing';
import { ChassisModule } from './chassis.module';

describe('ChassisModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChassisModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ChassisModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { MSGraphServiceModule } from './msgraph-service.module';

describe('MSGraphServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MSGraphServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MSGraphServiceModule).toBeDefined();
  });
});

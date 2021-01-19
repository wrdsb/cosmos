import { TestBed, waitForAsync } from '@angular/core/testing';
import { MSGraphServiceModule } from './msgraph-service.module';

describe('MSGraphServiceModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MSGraphServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MSGraphServiceModule).toBeDefined();
  });
});

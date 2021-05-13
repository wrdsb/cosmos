import { TestBed, waitForAsync } from '@angular/core/testing';
import { MSGraphServiceModule } from './angular-services-msgraph-service.module';

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

import { TestBed, waitForAsync } from '@angular/core/testing';
import { EnvironmentModule } from './environment.module';

describe('EnvironmentModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EnvironmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EnvironmentModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { EnvironmentModule } from './environment.module';

describe('EnvironmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EnvironmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EnvironmentModule).toBeDefined();
  });
});

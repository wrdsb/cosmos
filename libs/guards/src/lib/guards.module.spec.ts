import { TestBed, waitForAsync } from '@angular/core/testing';
import { GuardsModule } from './guards.module';

describe('GuardsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GuardsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GuardsModule).toBeDefined();
  });
});

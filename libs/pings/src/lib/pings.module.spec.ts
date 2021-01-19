import { TestBed, waitForAsync } from '@angular/core/testing';
import { PingsModule } from './pings.module';

describe('PingsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PingsModule).toBeDefined();
  });
});

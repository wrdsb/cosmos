import { TestBed, waitForAsync } from '@angular/core/testing';
import { GoogleModule } from './screens-google-google.module';

describe('GoogleModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoogleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { GoogleModule } from './google.module';

describe('GoogleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoogleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { PingsModule } from './pings.module';

describe('PingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PingsModule).toBeDefined();
  });
});

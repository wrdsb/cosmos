import { async, TestBed } from '@angular/core/testing';
import { IgorServiceModule } from './igor-service.module';

describe('IgorServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IgorServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IgorServiceModule).toBeDefined();
  });
});

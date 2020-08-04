import { async, TestBed } from '@angular/core/testing';
import { HagarServiceModule } from './hagar-service.module';

describe('HagarServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HagarServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HagarServiceModule).toBeDefined();
  });
});

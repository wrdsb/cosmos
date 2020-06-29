import { async, TestBed } from '@angular/core/testing';
import { SortingHatServiceModule } from './sorting-hat-service.module';

describe('SortingHatServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SortingHatServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortingHatServiceModule).toBeDefined();
  });
});

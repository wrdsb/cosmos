import { async, TestBed } from '@angular/core/testing';
import { SortingHatModule } from './sorting-hat.module';

describe('SortingHatModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SortingHatModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortingHatModule).toBeDefined();
  });
});

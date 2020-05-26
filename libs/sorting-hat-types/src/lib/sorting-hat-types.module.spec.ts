import { async, TestBed } from '@angular/core/testing';
import { SortingHatTypesModule } from './sorting-hat-types.module';

describe('SortingHatTypesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SortingHatTypesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortingHatTypesModule).toBeDefined();
  });
});

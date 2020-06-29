import { async, TestBed } from '@angular/core/testing';
import { SortingHatConsolePrivateModule } from './sorting-hat-console-private.module';

describe('SortingHatConsolePrivateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SortingHatConsolePrivateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortingHatConsolePrivateModule).toBeDefined();
  });
});

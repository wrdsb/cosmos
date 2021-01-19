import { TestBed, waitForAsync } from '@angular/core/testing';
import { SortingHatConsolePrivateModule } from './sorting-hat-console-private.module';

describe('SortingHatConsolePrivateModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SortingHatConsolePrivateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortingHatConsolePrivateModule).toBeDefined();
  });
});

import { TestBed, waitForAsync } from '@angular/core/testing';
import { PingsUiModule } from './pings-ui.module';

describe('PingsUiModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PingsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PingsUiModule).toBeDefined();
  });
});

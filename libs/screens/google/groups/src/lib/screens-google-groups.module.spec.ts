import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScreensGoogleGoogleGroupsModule } from './screens-google-groups.module';

describe('ScreensGoogleGoogleGroupsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScreensGoogleGoogleGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScreensGoogleGoogleGroupsModule).toBeDefined();
  });
});

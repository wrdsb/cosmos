import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppSettingsModule } from './app-settings.module';

describe('AppSettingsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppSettingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppSettingsModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { AppSettingsModule } from './app-settings.module';

describe('AppSettingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSettingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppSettingsModule).toBeDefined();
  });
});

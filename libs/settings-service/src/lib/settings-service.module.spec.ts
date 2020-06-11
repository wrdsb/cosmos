import { async, TestBed } from '@angular/core/testing';
import { SettingsServiceModule } from './settings-service.module';

describe('SettingsServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SettingsServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SettingsServiceModule).toBeDefined();
  });
});

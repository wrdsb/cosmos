import { async, TestBed } from '@angular/core/testing';
import { DevicesModule } from './devices.module';

describe('DevicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DevicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DevicesModule).toBeDefined();
  });
});

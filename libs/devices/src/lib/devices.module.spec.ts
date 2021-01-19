import { TestBed, waitForAsync } from '@angular/core/testing';
import { DevicesModule } from './devices.module';

describe('DevicesModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DevicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DevicesModule).toBeDefined();
  });
});

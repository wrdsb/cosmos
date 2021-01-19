import { TestBed, waitForAsync } from '@angular/core/testing';
import { UINavigationModule } from './ui-navigation.module';

describe('UINavigationModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UINavigationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UINavigationModule).toBeDefined();
  });
});

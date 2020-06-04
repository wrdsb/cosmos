import { async, TestBed } from '@angular/core/testing';
import { UINavigationModule } from './ui-navigation.module';

describe('UINavigationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UINavigationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UINavigationModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { UiNavigationModule } from './ui-navigation.module';

describe('UiNavigationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNavigationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiNavigationModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { HomePageModule } from './home-page.module';

describe('HomePageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomePageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomePageModule).toBeDefined();
  });
});

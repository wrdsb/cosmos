import { async, TestBed } from '@angular/core/testing';
import { ProfilePageModule } from './profile-page.module';

describe('ProfilePageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProfilePageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProfilePageModule).toBeDefined();
  });
});

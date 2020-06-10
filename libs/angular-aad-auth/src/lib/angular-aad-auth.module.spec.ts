import { async, TestBed } from '@angular/core/testing';
import { AngularAadAuthModule } from './angular-aad-auth.module';

describe('AngularAadAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularAadAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularAadAuthModule).toBeDefined();
  });
});

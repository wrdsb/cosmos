import { async, TestBed } from '@angular/core/testing';
import { AngularAADAuthModule } from './angular-aad-auth.module';

describe('AngularAADAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularAADAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularAADAuthModule).toBeDefined();
  });
});

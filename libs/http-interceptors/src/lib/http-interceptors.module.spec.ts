import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpInterceptorsModule } from './http-interceptors.module';

describe('HttpInterceptorsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpInterceptorsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HttpInterceptorsModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { HttpInterceptorsModule } from './http-interceptors.module';

describe('HttpInterceptorsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpInterceptorsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HttpInterceptorsModule).toBeDefined();
  });
});

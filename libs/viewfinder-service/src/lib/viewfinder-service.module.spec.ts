import { async, TestBed } from '@angular/core/testing';
import { ViewfinderServiceModule } from './viewfinder-service.module';

describe('ViewfinderServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ViewfinderServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ViewfinderServiceModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { GsuiteModule } from './gsuite.module';

describe('GsuiteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GsuiteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GsuiteModule).toBeDefined();
  });
});

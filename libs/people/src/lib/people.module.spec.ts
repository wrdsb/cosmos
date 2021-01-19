import { TestBed, waitForAsync } from '@angular/core/testing';
import { PeopleModule } from './people.module';

describe('PeopleModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PeopleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PeopleModule).toBeDefined();
  });
});

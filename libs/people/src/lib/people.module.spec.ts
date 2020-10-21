import { async, TestBed } from '@angular/core/testing';
import { PeopleModule } from './people.module';

describe('PeopleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PeopleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PeopleModule).toBeDefined();
  });
});

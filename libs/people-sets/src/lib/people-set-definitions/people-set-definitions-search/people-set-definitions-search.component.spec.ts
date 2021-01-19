import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleSetDefinitionsSearchComponent } from './people-set-definitions-search.component';

describe('PeopleSetDefinitionsSearchComponent', () => {
  let component: PeopleSetDefinitionsSearchComponent;
  let fixture: ComponentFixture<PeopleSetDefinitionsSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetDefinitionsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetDefinitionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

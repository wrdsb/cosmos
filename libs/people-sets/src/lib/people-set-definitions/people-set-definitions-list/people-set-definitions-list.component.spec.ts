import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleSetDefinitionsListComponent } from './people-set-definitions-list.component';

describe('PeopleSetDefinitionsListComponent', () => {
  let component: PeopleSetDefinitionsListComponent;
  let fixture: ComponentFixture<PeopleSetDefinitionsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetDefinitionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetDefinitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSetDefinitionEditComponent } from './people-set-definition-edit.component';

describe('PeopleSetDefinitionEditComponent', () => {
  let component: PeopleSetDefinitionEditComponent;
  let fixture: ComponentFixture<PeopleSetDefinitionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetDefinitionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetDefinitionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

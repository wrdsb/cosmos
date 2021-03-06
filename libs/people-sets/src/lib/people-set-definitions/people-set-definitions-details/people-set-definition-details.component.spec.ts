import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleSetDefinitionDetailsComponent } from './people-set-definition-details.component';

describe('PeopleSetDefinitionDetailsComponent', () => {
  let component: PeopleSetDefinitionDetailsComponent;
  let fixture: ComponentFixture<PeopleSetDefinitionDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetDefinitionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetDefinitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

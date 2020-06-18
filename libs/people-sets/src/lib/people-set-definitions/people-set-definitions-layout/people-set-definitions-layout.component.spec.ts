import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSetDefinitionsLayoutComponent } from './people-set-definitions-layout.component';

describe('PeopleSetDefinitionsLayoutComponent', () => {
  let component: PeopleSetDefinitionsLayoutComponent;
  let fixture: ComponentFixture<PeopleSetDefinitionsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetDefinitionsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetDefinitionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexPeopleSearchComponent } from './search.component';

describe('CodexPeopleSearchComponent', () => {
  let component: CodexPeopleSearchComponent;
  let fixture: ComponentFixture<CodexPeopleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodexPeopleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodexPeopleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

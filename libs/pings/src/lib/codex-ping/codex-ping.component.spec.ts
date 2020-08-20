import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexPingComponent } from './codex-ping.component';

describe('CodexPingComponent', () => {
  let component: CodexPingComponent;
  let fixture: ComponentFixture<CodexPingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodexPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodexPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

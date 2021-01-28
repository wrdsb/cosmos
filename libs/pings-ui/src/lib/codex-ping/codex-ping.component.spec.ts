import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodexPingComponent } from './codex-ping.component';

describe('CodexPingComponent', () => {
  let component: CodexPingComponent;
  let fixture: ComponentFixture<CodexPingComponent>;

  beforeEach(waitForAsync(() => {
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

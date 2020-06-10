import { async, TestBed } from '@angular/core/testing';
import { MsgraphServiceModule } from './msgraph-service.module';

describe('MsgraphServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MsgraphServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MsgraphServiceModule).toBeDefined();
  });
});

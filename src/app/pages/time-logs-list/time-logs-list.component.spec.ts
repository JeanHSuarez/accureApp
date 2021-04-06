import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLogsListComponent } from './time-logs-list.component';

describe('TimeLogsListComponent', () => {
  let component: TimeLogsListComponent;
  let fixture: ComponentFixture<TimeLogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLogsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

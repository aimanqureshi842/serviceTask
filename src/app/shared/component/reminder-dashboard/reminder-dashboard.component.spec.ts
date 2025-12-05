import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderDashboardComponent } from './reminder-dashboard.component';

describe('ReminderDashboardComponent', () => {
  let component: ReminderDashboardComponent;
  let fixture: ComponentFixture<ReminderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

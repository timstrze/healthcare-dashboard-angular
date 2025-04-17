import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationTherapyScheduleComponent } from './medication-therapy-schedule.component';

describe('MedicationReportComponent', () => {
  let component: MedicationTherapyScheduleComponent;
  let fixture: ComponentFixture<MedicationTherapyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationTherapyScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationTherapyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

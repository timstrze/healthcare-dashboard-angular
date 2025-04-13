import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DayPilotModule} from '@daypilot/daypilot-lite-angular';

@Component({
  selector: 'app-medication-therapy-schedule',
  standalone: true,
  imports: [CommonModule, DayPilotModule],
  templateUrl: './medication-therapy-schedule.component.html',
  styles: [``]
})
export class MedicationTherapyScheduleComponent {
  @ViewChild('eventModal') eventModal!: TemplateRef<any>;
  selectedEvent: any;
  constructor(private modalService: NgbModal) {}
  config: any = {
    viewType: "Week",
    cellHeight: 20,
    startDate: "2025-04-09",
    onEventClick: (args: any) => {
      this.selectedEvent = args.e.data;
      this.modalService.open(this.eventModal, { centered: true });
    }
  }

  events = [
    { id: 1, start: "2025-04-10T10:00:00", end: "2025-04-10T12:00:00", text: "Occupational Therapy Session", barColor: "#2196F3", description: "Assists patient in regaining skills for daily living." },
    { id: 2, start: "2025-04-06T09:00:00", end: "2025-04-06T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 3, start: "2025-04-07T09:00:00", end: "2025-04-07T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 4, start: "2025-04-08T09:00:00", end: "2025-04-08T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 5, start: "2025-04-09T09:00:00", end: "2025-04-09T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 6, start: "2025-04-10T09:00:00", end: "2025-04-10T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 7, start: "2025-04-11T09:00:00", end: "2025-04-11T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 8, start: "2025-04-12T09:00:00", end: "2025-04-12T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers morning medication." },
    { id: 9, start: "2025-04-07T14:00:00", end: "2025-04-07T15:30:00", text: "Cognitive Behavioral Therapy", barColor: "#2196F3", description: "Therapy focused on changing patterns of thinking." },
    { id: 10, start: "2025-04-08T11:00:00", end: "2025-04-08T12:00:00", text: "Physical Therapy", barColor: "#2196F3", description: "Therapy aimed at improving physical function." },
    { id: 11, start: "2025-04-09T13:00:00", end: "2025-04-09T14:00:00", text: "Group Therapy Session", barColor: "#2196F3", description: "Group session for sharing experiences." },
    { id: 12, start: "2025-04-11T10:30:00", end: "2025-04-11T11:00:00", text: "Blood Pressure Medication", barColor: "#4CAF50", description: "Administers blood pressure medication." },
    { id: 13, start: "2025-04-12T15:00:00", end: "2025-04-12T16:00:00", text: "Nutrition Counseling", barColor: "#2196F3", description: "Counseling on nutrition and dietary needs." }
  ];

  getModalHeaderClass(): string {
    if (this.selectedEvent?.barColor === '#2196F3') {
      return 'modal-header bg-primary text-white';
    } else if (this.selectedEvent?.barColor === '#4CAF50') {
      return 'modal-header bg-success text-white';
    }
    return 'modal-header';
  }
}

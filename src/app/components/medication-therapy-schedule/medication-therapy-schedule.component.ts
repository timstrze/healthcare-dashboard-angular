import {Component, ViewChild, TemplateRef, Input, SimpleChanges, OnChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DayPilotModule} from '@daypilot/daypilot-lite-angular';

@Component({
  selector: 'app-medication-therapy-schedule',
  standalone: true,
  imports: [CommonModule, DayPilotModule],
  templateUrl: './medication-therapy-schedule.component.html',
  styles: [`
    .card {
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
      transition: background-color 0.3s, color 0.3s;
    }

    .card.light {
      background-color: #ffffff;
      color: #212529;
      border-color: #dee2e6;
    }

    .card.dark {
      background-color: #1e2a38;
      color: #f8f9fa;
      border-color: #3a3f44;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    ul {
      margin-top: 0.5rem;
      color: inherit;
    }

    .card-body {
      padding: 0;
    }

    .card.dark ul {
      color: #ced4da;
    }

    .card.light ul {
      color: #6c757d;
    }

    li {
      padding: 2px 0;
    }
  `]
})
export class MedicationTherapyScheduleComponent implements OnChanges {
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('eventModal') eventModal!: TemplateRef<any>;
  selectedEvent: any;
  constructor(private modalService: NgbModal) {}
  config: any = {
    viewType: "Week",
    theme: "",
    cellHeight: 20,
    startDate: "2025-04-09",
    onEventClick: (args: any) => {
      this.selectedEvent = args.e.data;
      this.modalService.open(this.eventModal, { centered: true });
    }
  }

  events = [
    { id: 1, start: "2025-04-10T10:00:00", end: "2025-04-10T12:00:00", text: "Occupational Therapy Session", barColor: "#2196F3", description: "Assists patient in regaining skills for daily living." },
    { id: 2, start: "2025-04-06T09:00:00", end: "2025-04-06T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers prescribed medication including beta blockers and calcium channel blockers to regulate blood pressure." },
    { id: 3, start: "2025-04-07T09:00:00", end: "2025-04-07T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Includes administration of blood pressure medication and daily multivitamin. Patient monitored for side effects." },
    { id: 4, start: "2025-04-08T09:00:00", end: "2025-04-08T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Routine morning dose of antihypertensive medication. Advised fluid intake before dose." },
    { id: 5, start: "2025-04-09T09:00:00", end: "2025-04-09T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers scheduled medication and monitors for dizziness or lightheadedness post-intake." },
    { id: 6, start: "2025-04-10T09:00:00", end: "2025-04-10T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Administers medication with review of any overnight symptoms. Recommends breakfast after dose." },
    { id: 7, start: "2025-04-11T09:00:00", end: "2025-04-11T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Daily dose includes statins and antihypertensives. Observation for nausea post-medication." },
    { id: 8, start: "2025-04-12T09:00:00", end: "2025-04-12T10:00:00", text: "Morning Medication", barColor: "#4CAF50", description: "Includes ACE inhibitors and proton-pump inhibitors. Patient instructed to stay upright 30 minutes after intake." },
    { id: 9, start: "2025-04-07T14:00:00", end: "2025-04-07T15:30:00", text: "Cognitive Behavioral Therapy", barColor: "#2196F3", description: "Therapy focused on changing patterns of thinking." },
    { id: 10, start: "2025-04-08T11:00:00", end: "2025-04-08T12:00:00", text: "Physical Therapy", barColor: "#2196F3", description: "Therapy aimed at improving physical function." },
    { id: 11, start: "2025-04-09T13:00:00", end: "2025-04-09T14:00:00", text: "Group Therapy Session", barColor: "#2196F3", description: "Group session for sharing experiences." },
    { id: 12, start: "2025-04-11T10:30:00", end: "2025-04-11T11:00:00", text: "Blood Pressure Medication", barColor: "#4CAF50", description: "Administers blood pressure medication." },
    { id: 13, start: "2025-04-12T15:00:00", end: "2025-04-12T16:00:00", text: "Nutrition Counseling", barColor: "#2196F3", description: "Counseling on nutrition and dietary needs." }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme']) {
      this.config.theme = this.theme === 'dark' ? 'darkmode' : '';
    }
  }

  getModalHeaderClass(): string {
    if (this.selectedEvent?.barColor === '#2196F3') {
      return 'modal-header bg-primary text-white';
    } else if (this.selectedEvent?.barColor === '#4CAF50') {
      return 'modal-header bg-success text-white';
    }
    return 'modal-header';
  }
}

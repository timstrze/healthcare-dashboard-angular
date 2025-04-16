import { Component, Input } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  templateUrl: './patient-details.component.html',
  imports: [
    NgClass,
    NgForOf,
    FormsModule
  ],
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
export class PatientDetailsComponent {
  @Input() theme: 'light' | 'dark' = 'light';

  notes: { time: string, text: string }[] = [
    {
      time: '2025-04-10 09:15 AM',
      text: 'Patient reported mild headaches. Advised to increase hydration and monitor symptoms.'
    },
    {
      time: '2025-04-12 01:30 PM',
      text: 'Blood pressure within target range. Continue current medication. Scheduled next check-up in 2 weeks.'
    },
    {
      time: '2025-04-14 04:45 PM',
      text: 'Patient requested clarification on dietary restrictions. Provided detailed guidance on sodium intake.'
    }
  ];

  newNote: string = '';

  constructor(private modalService: NgbModal) {}

  openDoctorNotes(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push({
        time: new Date().toLocaleString(),
        text: this.newNote.trim()
      });
      this.newNote = '';
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-pie-chart',
  standalone: true,
  templateUrl: './patient-details.component.html',
  styles: [`
    .card {
      padding: 1rem;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
    }
    ul {
      margin-top: 0.5rem;
    }
    li {
      padding: 2px 0;
    }
  `]
})
export class PatientDetailsComponent {}
